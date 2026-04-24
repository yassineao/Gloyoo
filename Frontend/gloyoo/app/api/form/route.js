import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitStore = globalThis.gloyooFormRateLimit ?? new Map();

globalThis.gloyooFormRateLimit = rateLimitStore;

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);

  return false;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request) {
  try {
    const { companyName, lastName, email, phoneNumber, message, website } =
      await request.json();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages. Please try again later.' },
        { status: 429 },
      );
    }

    if (!companyName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      );
    }

    const safeCompanyName = escapeHtml(companyName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhoneNumber = phoneNumber
      ? escapeHtml(phoneNumber)
      : 'Not provided';
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

    await resend.emails.send({
      from: 'Gloyoo Contact <onboarding@resend.dev>',
      to: 'yassuke4@gmail.com',
      subject: `New Gloyoo contact form message from ${companyName}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Company name:</strong> ${safeCompanyName}</p>
        <p><strong>Last name:</strong> ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone number:</strong> ${safePhoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send form email:', error);

    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 },
    );
  }
}
