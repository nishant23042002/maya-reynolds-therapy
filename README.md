# Dr. Maya Reynolds, PsyD — Therapy Website

Practical assignment (Stage 2) for the Grow My Therapy Front-End Development Internship: clone the homepage of [conejovalleycounseling.com](https://www.conejovalleycounseling.com/) in Next.js + Tailwind CSS, then redesign it (new theme, copy, and images) for a fictional therapist persona, Dr. Maya Reynolds, PsyD, using her profile document as the content source. Adds a new "Our Office" section per the assignment brief.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — theme tokens defined in `src/app/globals.css`
- Fonts self-hosted via `next/font/google` (Fraunces for headings, Plus Jakarta Sans for body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            # layout, page, global theme tokens
  components/     # one component per homepage section
  lib/content.ts  # every homepage string, in one place
public/images/    # site images, incl. the real office photos + headshot
                  # from Dr. Reynolds' profile document
```

## Live site

<!-- Add your Vercel URL here once deployed -->

## Notes

Built as a skills assessment. Structure and copy are grounded in Dr. Maya Reynolds' profile document; layout is based on conejovalleycounseling.com per the assignment brief.
