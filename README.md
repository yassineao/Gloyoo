# Gloyoo

A modern **multilingual marketing website** for **Gloyoo**, focused on social media services, content creation, performance marketing, and web design.

This repository currently contains the **frontend application**, built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

---

## ✨ Project Overview

Gloyoo is structured as a digital agency/lead-generation website with:

- a localized landing page in **German** and **English**
- dedicated pages for each service offering
- a consultation/form page for lead capture
- SEO-friendly metadata, sitemap, and robots setup
- animated UI sections and reusable components

---

## 📁 Repository Structure

```text
Gloyoo/
├─ Frontend/
│  └─ gloyoo/              # Next.js frontend app
│     ├─ app/
│     ├─ public/
│     ├─ package.json
│     └─ README.md
└─ README.md               # Project-level overview
```

---

## 🧱 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | `Next.js 16` |
| UI | `React 19`, `TypeScript` |
| Styling | `Tailwind CSS 4` |
| Animation | `motion`, `gsap`, `ogl` |
| Linting | `ESLint 9` |

---

## 🚀 Getting Started

### 1. Go to the frontend app

```bash
cd Frontend/gloyoo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
The root route redirects to `/de` by default.

---

## 📜 Available Scripts

Run these inside `Frontend/gloyoo`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production build |
| `npm run lint` | Run ESLint |

---

## 🌍 Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Redirects to the default locale |
| `/:locale` | Localized homepage |
| `/:locale/form` | Consultation/contact form |
| `/:locale/services/:service` | Service detail pages |
| `/robots.txt` | Crawl rules |
| `/sitemap.xml` | Sitemap |

Supported locales:

- `de`
- `en`

Service routes currently include:

- `social-media`
- `content-creation`
- `performance-marketing`
- `webdesign`

---

## 🗂️ Content Management

Most site copy and localized text live in:

- `Frontend/gloyoo/app/lib/i18n.ts`

This is the main place to update:

- hero text
- section headings
- service descriptions
- metadata and SEO text
- form copy
- navigation labels

---

## 🔎 SEO & Deployment

SEO-related logic is handled in:

- `Frontend/gloyoo/app/lib/seo.ts`
- `Frontend/gloyoo/app/layout.tsx`
- `Frontend/gloyoo/app/robots.ts`
- `Frontend/gloyoo/app/sitemap.ts`

For production deployment, **Vercel** is the best fit.
You can optionally set a public base URL with:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📌 Current Status

- ✅ Frontend structure is in place
- ✅ Localized marketing pages are implemented
- ✅ SEO metadata and route generation are set up
- ⚠️ Form submission backend/API is not included yet

---

## 📄 Additional Documentation

For more app-specific details, see:

- `Frontend/gloyoo/README.md`
