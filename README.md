# Indo Treasure — Next.js 15

Productie-codebase voor de Indo Treasure-galerie. App Router, TypeScript, Tailwind CSS v4, Nederlands (nl-NL).

## Stack

- Next.js 15 (App Router, Server Components default)
- TypeScript
- Tailwind CSS v4 (inline `@theme` tokens)
- Geen backend, auth, betalingen, CMS of i18n

## Starten

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Pagina's

| Route | Bestand |
|---|---|
| `/` | `app/page.tsx` |
| `/catalogus` | `app/catalogus/page.tsx` |
| `/catalogus/[slug]` | `app/catalogus/[slug]/page.tsx` |
| `/over-ons` | `app/over-ons/page.tsx` |

## Structuur

```
app/
  layout.tsx           Root layout — TopNav, Footer, fonts, <html lang="nl-NL">
  page.tsx             Home
  catalogus/
    page.tsx           Catalogus met filters
    [slug]/page.tsx    Detailpagina met galerij
  over-ons/page.tsx    Over ons
  globals.css          Tailwind v4 + design tokens
components/
  TopNav.tsx
  Footer.tsx
  ArtworkCard.tsx
  CatalogFilters.tsx   ('use client' — chip-state)
  Gallery.tsx          ('use client' — thumb-state)
  RequestModal.tsx     ('use client')
  Eyebrow.tsx
  BatikDivider.tsx
  Logo.tsx
lib/
  artworks.ts          Data + types
  format.ts            EUR-formatter
```

## Designsysteem

- Display-font: Cormorant Garamond
- Body-font: Manrope
- Palet: olijfgroen-aarde (Indo Treasure)
- Tokens in `app/globals.css` onder `@theme`

## Niet inbegrepen (zoals afgesproken)

- Geen authenticatie, betaling, of bestelproces — de "Aanvragen"-knop opent een client-side formulier dat (nog) nergens naartoe verstuurt.
- Geen CMS — werken staan in `lib/artworks.ts`.
- Geen i18n — alle copy is hard NL.

## Volgende stappen

- `next/image` overal aansluiten op echte assets
- Aanvraagformulier koppelen aan een service (Resend / Postmark / Plunk)
- Sitemap genereren via `app/sitemap.ts`
