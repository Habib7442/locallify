# Code Standards

## Framework Conventions (Next.js 15)
- **App Router:** Use `app/` directory for all routing.
- **Server Components:** Default to Server Components; use `"use client"` only for interactivity.
- **Optimized Images:** Always use `next/image` with `priority` for above-fold content.
- **Metadata API:** Use the built-in Metadata API for SEO instead of custom `<head>` tags.

## TypeScript Rules
- **Strict Mode:** Mandatory. No `any` types.
- **Interfaces over Types:** Use interfaces for component props.
- **Shared Types:** Place global types in `types/` or `lib/types.ts`.

## Styling Conventions (Tailwind v4)
- **Utility First:** Use Tailwind classes for most styling.
- **Variable Injection:** Inject `--voltage-*` variables via Tailwind theme configuration.
- **Complex Animations:** Move GSAP/Framer Motion logic into custom hooks (e.g., `useScrollReveal`).

## File Organization
- **PascalCase** for components (e.g., `HeroSection.tsx`).
- **kebab-case** for pages and directories (e.g., `city-pages/`).
- **Index Exports:** Use index files for clean imports in `components/ui`.

## Component Checklist
- [ ] Responsive (Mobile-first).
- [ ] Accessible (ARIA labels, focus states).
- [ ] Performance (Lazy loaded if below fold).
- [ ] Reduced Motion fallback.
