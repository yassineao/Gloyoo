# Gloyoo Frontend

A modern bilingual marketing website for **Gloyoo**, built to showcase social media services, performance marketing, content creation, and web design.

The project uses `Next.js 16`, `React 19`, `TypeScript`, and `Tailwind CSS 4`, with localized routes, SEO metadata, animated UI sections, and dedicated service pages.

---

## ✨ Highlights

- **German and English support** with locale-based routing: `/de` and `/en`
- **Localized landing page** with hero, advantages, services, and about sections
- **Dedicated service pages** for:
  - `social-media`
  - `content-creation`
  - `performance-marketing`
  - `webdesign`
- **Consultation form page** at `/:locale/form`
- **SEO-ready setup** with route metadata, Open Graph, Twitter cards, JSON-LD, `robots.ts`, and `sitemap.ts`
- **Animated visual experience** powered by `motion`, `gsap`, and custom background effects

## 🧱 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | `Next.js 16` App Router |
| UI | `React 19`, `TypeScript` |
| Styling | `Tailwind CSS 4` |
| Animation | `motion`, `gsap`, `ogl` |
| Code Quality | `ESLint 9` |

## 📁 Project Structure

```text
gloyoo/
├─ app/
│  ├─ [locale]/
│  │  ├─ page.tsx                    # localized homepage
│  │  ├─ form/page.tsx               # contact/consultation form page
│  │  └─ services/[service]/page.tsx # service detail pages
│  ├─ components/
│  │  ├─ mainPage/                   # homepage sections
│  │  ├─ service/                    # service-page UI
│  │  └─ form/                       # form UI
│  ├─ lib/
│  │  ├─ i18n.ts                     # locale dictionaries and helpers
│  │  └─ seo.ts                      # site metadata helpers
│  ├─ robots.ts
│  └─ sitemap.ts
├─ public/
├─ next.config.ts
└─ package.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
The root route redirects automatically to `http://localhost:3000/de`.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## 🌍 Routing Overview

| Route | Purpose |
| --- | --- |
| `/` | Redirects to `/de` |
| `/:locale` | Localized homepage |
| `/:locale/form` | Localized consultation form |
| `/:locale/services/:service` | Localized service detail page |
| `/robots.txt` | Search engine crawl rules |
| `/sitemap.xml` | Generated sitemap |

Supported locales:

- `de`
- `en`

## 🗂️ Content & Localization

Most marketing copy, labels, metadata, and service content are managed in:

- `app/lib/i18n.ts`

If you want to update:

- navigation labels
- hero text
- service descriptions
- SEO titles and descriptions
- form labels and testimonials

start with that file.

## 🔎 SEO Configuration

SEO helpers and site-level metadata live in:

- `app/lib/seo.ts`
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

You can optionally define the public site URL in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If not set, the project falls back to `https://gloyoo.vercel.app`.

## 📝 Notes

- `app/api/` is currently empty, so the form is presentational unless a backend endpoint is added.
- The site is structured as a lead-generation/agency website and is a strong fit for deployment on **Vercel**.

---

## ✅ Summary

This frontend is a clean, multilingual agency site for Gloyoo with:

- strong landing-page structure
- reusable components
- localized SEO support
- room for future form/API integration


