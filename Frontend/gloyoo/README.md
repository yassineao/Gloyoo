# Gloyoo Frontend

A modern **bilingual agency website** for **Gloyoo**, built to present services in social media management, content creation, performance marketing, and web design.

The application is developed with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**, and uses localized routes, reusable sections, and SEO metadata to support a polished marketing presence.

---

## ✨ What This App Includes

- **German and English support** with locale-based routing (`/de`, `/en`)
- **Localized homepage** with hero, advantages, services, and about sections
- **Dedicated service pages** for:
  - `social-media`
  - `content-creation`
  - `performance-marketing`
  - `webdesign`
- **Consultation form page** at `/:locale/form`
- **SEO-ready metadata** including Open Graph, Twitter cards, JSON-LD, `robots.ts`, and `sitemap.ts`
- **Animated UI experience** powered by `motion`, `gsap`, and visual background effects

---

## 🧱 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | `Next.js 16` App Router |
| UI | `React 19`, `TypeScript` |
| Styling | `Tailwind CSS 4` |
| Animation | `motion`, `gsap`, `ogl` |
| Quality | `ESLint 9` |

---

## 📁 Project Structure

```text
gloyoo/
├─ app/
│  ├─ [locale]/
│  │  ├─ page.tsx                    # localized homepage
│  │  ├─ form/page.tsx               # consultation/contact form
│  │  └─ services/[service]/page.tsx # service detail pages
│  ├─ components/
│  │  ├─ mainPage/                   # homepage sections
│  │  ├─ service/                    # service-page components
│  │  └─ form/                       # form UI
│  ├─ lib/
│  │  ├─ i18n.ts                     # localization dictionaries
│  │  └─ seo.ts                      # SEO helpers and site config
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ layout.tsx
│  └─ page.tsx                       # redirects to /de
├─ public/
├─ next.config.ts
├─ tsconfig.json
└─ package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** recommended
- **npm**

### Install dependencies

```bash
npm install
```

### Start development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
The app redirects the root route automatically to `/de`.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

---

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

Supported service slugs:

- `social-media`
- `content-creation`
- `performance-marketing`
- `webdesign`

---

## 🗂️ Content & Localization

Most marketing copy, labels, and service details are managed in:

- `app/lib/i18n.ts`

Use that file to update:

- navigation labels
- hero content
- service descriptions
- SEO titles and descriptions
- form copy and text blocks

---

## 🔎 SEO Setup

SEO-related logic lives in:

- `app/lib/seo.ts`
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- route-level `generateMetadata()` functions

You can optionally set the public site URL in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If no value is provided, the app falls back to `https://gloyoo.vercel.app`.

---

## 📝 Development Notes

- The project is currently **frontend-focused**.
- The consultation form is present in the UI, but backend submission handling can be added later if needed.
- The app is well suited for deployment on **Vercel**.

---

## ✅ Summary

This frontend provides a solid foundation for a modern digital agency website with:

- multilingual support
- clean component organization
- service-focused landing pages
- SEO-friendly structure
- room for future backend/API integration


