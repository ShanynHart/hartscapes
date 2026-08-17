# Hartscapes

Marketing website for [Hartscapes](https://hartscapes.co.za), an owner-run landscaping company in Cape Town, South Africa. Built for a real client (my mom's business) and serving real customers — the site showcases 11 landscaping services, a photo portfolio of completed projects across Cape Town, before/after transformations, and client testimonials.

**Live site:** [hartscapes.co.za](https://hartscapes.co.za)

## Tech stack

- **React 18 + TypeScript** on **Vite**
- **Tailwind CSS** with **shadcn/ui** (Radix primitives) for the component library
- **Framer Motion** for scroll and entrance animations
- **React Router** for client-side routing, with per-page SEO meta (titles, descriptions, Open Graph, canonical URLs) managed by a small custom hook
- **Embla Carousel** for the project and testimonial carousels
- Deployed on **Vercel** with SPA rewrites

## Features

- **Service pages** — 11 services (fencing, decking, paving, artificial lawns, water features, and more), each with its own gallery, FAQ accordion, and call-to-action, generated from a single data file and lazy-loaded per route
- **Project portfolio** — galleries for 14 completed projects, driven by a build-time `index.json` manifest so new photos can be added without code changes
- **Before/after showcase** — shuffled carousel of 53 garden transformations
- **Lightbox galleries** with keyboard navigation
- **SEO** — unique meta per route, `sitemap.xml`, structured robots.txt
- **Performance** — all gallery images optimized (resized and recompressed, 422 MB → 94 MB), lazy loading throughout
- **WhatsApp integration** for direct customer enquiries

## Development

```sh
npm install
npm run dev     # dev server on http://localhost:8080
npm run build   # production build
npm run lint
```

## Project structure

```
src/
  components/     # shared UI (navbar, footer, galleries, sections)
  components/ui/  # shadcn/ui primitives
  data/           # services and project content
  hooks/          # usePageMeta (SEO), utilities
  pages/          # routes
  pages/services/ # one component per service page
public/
  gallery/        # photo galleries + index.json manifest
```
