<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Locallify Engineering Conventions for AI Coding Agents

**For:** any AI coding agent (Cursor, Claude Code, Cline, GitHub Copilot Workspace, Aider) working on this codebase.
**Read order:** this file → context/ (Six-File Methodology) → PRD.md → CLAUDE.md → relevant feature docs.
**Last updated:** May 2026
**Version:** 1.0

---

## 0. The 30-second briefing

You are working on **Locallify** — a marketing website for a digital-presence service for local businesses in tier-2/3 India. The site must look like a $50,000 indie studio build (think Vercel, Linear, Active Theory, Obys agency) — not a Wix template.

Design language: **"Voltage."** Midnight base, electric lime accent, magazine-grade variable typography, scroll-triggered motion. NEVER cream, beige, sand, or warm-white. NEVER generic SaaS aesthetic.

If you forget everything else, remember three rules:

1. **Mobile-first, always.** 95% of traffic is sub-₹20,000 Android phones on 4G. Performance is a feature.
2. **One lime element per viewport.** It's an emphasis tool, not a default color.
3. **`prefers-reduced-motion` is mandatory.** Every animation has a no-motion fallback.

---

## 1. Application Building Context (Six-File System)

Read the following files in order before implementing or making any architectural decision:

1. `context/project-overview.md` — Product definition, goals, and scope.
2. `context/architecture.md` — System structure, stack, and invariants.
3. `context/ui-context.md` — "Voltage" design system, colors, and typography.
4. `context/code-standards.md` — Implementation rules and conventions.
5. `context/ai-workflow-rules.md` — Development workflow and scoping rules.
6. `context/progress-tracker.md` — Current phase, completed work, and next steps.

Update `context/progress-tracker.md` after each meaningful implementation change.

---

## 2. Tech stack

| Layer | Tool | Version | Locked? |
|---|---|---|---|
| Runtime | Node.js | 20 LTS | yes |
| Framework | Next.js (App Router) | 15.x | yes |
| Language | TypeScript | 5.x | yes |
| Styling | Tailwind CSS | 4.x | yes |
| Component motion | Framer Motion | 11.x | yes |
| Scroll choreography | GSAP + ScrollTrigger | 3.12.x | yes |
| Smooth scroll (optional) | Lenis | latest | open |
| CMS | Sanity | latest | open |
| Forms | Resend + WhatsApp API | latest | open |
| Hosting | Vercel | n/a | yes |
| Analytics | Plausible | n/a | open |
| Error monitoring | Sentry | latest | open |
| Package manager | pnpm | 9.x | yes |

**Do not introduce a new dependency without a written justification in the PR description.**

---

## 3. Project structure

```
locallify-web/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Public site routes
│   │   ├── page.tsx              # Home
│   │   ├── work/
│   │   ├── pricing/
│   │   ├── services/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── templates/
│   │   └── cities/
│   ├── (legal)/                  # Privacy, terms, refund
│   ├── api/                      # API routes (forms, webhooks)
│   ├── layout.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── globals.css               # Design tokens + Tailwind base
│   └── sitemap.ts
├── components/
│   ├── ui/                       # Primitives — button, input, dialog, etc.
│   ├── motion/                   # Reusable motion components
│   ├── sections/                 # Page-level sections — Hero, BentoGrid, etc.
│   ├── layout/                   # Header, Footer, Nav
│   └── illustration/             # SVG components
├── content/                      # MDX content (if not using Sanity)
│   ├── blog/
│   ├── case-studies/
│   └── help/
├── lib/                          # Utilities, hooks, schemas
│   ├── utils.ts
│   ├── seo.ts
│   ├── analytics.ts
│   └── hooks/
├── styles/
│   ├── tokens.css                # CSS variables (design tokens)
│   └── fonts.css                 # @font-face declarations
├── public/
│   ├── fonts/                    # Self-hosted variable fonts
│   ├── images/
│   └── og/                       # OG image templates
├── types/                        # Shared TypeScript types
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── PRD.md
├── AGENTS.md                     # this file
└── CLAUDE.md
```

**Naming:**
- Components: PascalCase (`HeroDevice.tsx`).
- Files: kebab-case for utilities (`format-date.ts`), PascalCase for components.
- Route folders: kebab-case (`/case-studies/[slug]`).
- CSS classes: never write custom; use Tailwind utilities and design tokens.

---

## 4. Design tokens (the source of truth)

All tokens live in `styles/tokens.css` and are exposed as CSS variables. Tailwind's `theme.extend` reads from these variables. **Never hardcode a color or font-size in JSX. Always reference a token.**

### 4.1 Colors

```css
:root {
  --bg-primary: #0A0A0E;
  --bg-surface: #14141A;
  --bg-elevated: #1C1C24;
  --bg-inverse: #EFEFF2;

  --border-subtle: #1F1F28;
  --border-default: #2A2A36;
  --border-strong: #3A3A48;

  --accent-primary: #D0FF14;          /* Voltage lime */
  --accent-hover: #B8E600;
  --accent-soft: #2E3A0A;

  --accent-secondary: #FF5C28;        /* Burn orange */
  --accent-secondary-hover: #E04A1C;

  --text-primary: #EFEFF2;
  --text-secondary: #B4B4BE;
  --text-muted: #7F7F8A;
  --text-subtle: #5A5A66;
  --text-inverse: #0A0A0E;

  --semantic-good: #5BE49B;
  --semantic-warn: #FFB454;
  --semantic-bad: #FF6B7A;
}
```

Tailwind usage: `bg-bg-primary text-text-primary border-border-default`.

### 4.2 Typography (Tailwind)

```ts
// tailwind.config.ts
fontFamily: {
  display: ['Instrument Serif', 'serif'],
  sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
  mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
}
```

**Display = Instrument Serif only.** Always italic for hero headlines.

### 4.3 Type scale (fluid via clamp())

Use Tailwind's `text-*` utilities mapped to the clamp() tokens defined in PRD.md §5.2. Never set absolute pixel sizes for body or display.

### 3.4 Spacing

8-point grid. Use Tailwind utilities (`p-4` = 1rem = 16px). Don't introduce arbitrary values unless absolutely required, and document them.

---

## 5. Component conventions

### 5.1 Anatomy

Every component file:

```tsx
'use client'; // only when needed
import { type ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'div'> {
  variant?: 'default' | 'featured';
}

export function PricingCard({ variant = 'default', className, ...props }: Props) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border-default bg-bg-surface p-6',
        variant === 'featured' && 'border-accent-primary',
        className
      )}
      {...props}
    />
  );
}
```

**Rules:**
- Server components by default. `'use client'` only when needed (state, effects, event handlers, motion).
- Always forward `className` and spread `...props` for primitives.
- Use `cn()` (clsx + tailwind-merge) for class composition.
- Never use `any`. Never use `as` to bypass types. Solve the type properly.
- Props named consistently — `variant`, `size`, `tone`, `disabled`.

### 5.2 Variants

Use `class-variance-authority` (CVA) for any component with 2+ visual variants. Example:

```tsx
const button = cva(
  'inline-flex items-center justify-center font-medium transition',
  {
    variants: {
      variant: {
        primary: 'bg-accent-primary text-text-inverse hover:bg-accent-hover',
        secondary: 'bg-accent-secondary text-text-primary hover:bg-accent-secondary-hover',
        ghost: 'border border-border-default text-text-primary hover:border-text-primary',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);
```

---

## 6. Motion conventions

### 6.1 When to use what

- **Framer Motion** — component-level animation, entry/exit, layout transitions, hover/tap.
- **GSAP + ScrollTrigger** — scroll-triggered timelines, complex sequencing, marquees, pinning.
- **CSS transitions** — simple hover states, color changes, transforms <300ms.
- **CSS animations** — infinite loops (marquee, gradient mesh, subtle ambient).

Never use both Framer and GSAP on the same element.

### 6.2 Easing

```ts
export const easings = {
  smoothOut: [0.16, 1, 0.3, 1],
  smoothIn: [0.7, 0, 0.84, 0],
  smoothInOut: [0.83, 0, 0.17, 1],
};
```

Default is `smoothOut`. Use `smoothIn` only when something is leaving the viewport.

### 6.3 Duration

| Element | Duration |
|---|---|
| Micro (hover, focus) | 150–200ms |
| Standard (modal, drawer) | 250–300ms |
| Macro (page transition, hero reveal) | 500–700ms |
| Continuous (marquee, ambient) | 20–40s |

### 5.4 prefers-reduced-motion

Every motion component must wrap with the `useReducedMotion` hook (Framer) or check `(prefers-reduced-motion: reduce)` (CSS). When motion is reduced, animation duration becomes 0 and any movement collapses to a fade.

```tsx
const shouldReduceMotion = useReducedMotion();
const variants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
  visible: { opacity: 1, y: 0 },
};
```

### 5.5 Performance

- Animate only `transform` and `opacity`. Never `width`, `height`, `top`, `left`.
- Use `will-change` sparingly and remove after animation completes.
- Long scroll-triggered timelines should be deferred with dynamic imports.
- Test on a mid-range Android (Moto G or similar) before merging.

---

## 7. Image conventions

- Use `next/image` always. Never raw `<img>` except for SVG.
- Provide `alt` text. Decorative: `alt=""`.
- Hero images: `priority` prop and `sizes="100vw"`.
- Below-fold images: lazy by default, with explicit `sizes` prop.
- Format: AVIF primary, WebP fallback (Next handles this).
- Customer photos: max 1600px wide source, served responsively.

---

## 8. Performance budgets

Hard limits. Any PR that exceeds these is blocked.

| Metric | Budget |
|---|---|
| JS bundle (initial, gzipped) | <120 KB |
| CSS (initial, gzipped) | <25 KB |
| Fonts (initial) | <120 KB (Instrument Serif + Geist Variable only) |
| Hero image (mobile, AVIF) | <60 KB |
| Total page weight (mobile) | <500 KB |
| Lighthouse Performance (mobile) | ≥95 |
| Lighthouse Accessibility | ≥95 |
| Lighthouse Best Practices | ≥100 |
| Lighthouse SEO | ≥100 |

CI runs Lighthouse on every PR. Failing scores block merge.

---

## 9. Accessibility (WCAG 2.2 AA)

- Color contrast verified — body text on dark must clear 4.5:1.
- Every interactive element is keyboard-reachable.
- Focus styles visible AND on-brand (lime outline, 2px, 4px offset).
- Skip-to-content link at top of every page.
- Proper landmark roles (`<main>`, `<nav>`, `<footer>`, `<aside>`).
- One `<h1>` per page. Clean heading hierarchy.
- All form fields have labels (visible preferred, `aria-label` acceptable).
- All images have `alt` text (decorative = empty alt, not missing alt).
- Run axe-core in CI; failing audits block merge.

---

## 10. SEO (delegated to CLAUDE.md)

Every page must implement:

- Unique `<title>` and `<meta description>`.
- OG image (1200×630, dynamically generated where possible).
- Twitter Card meta.
- Schema.org JSON-LD for the appropriate type.
- Internal links to 3+ related pages.

Full SEO strategy lives in CLAUDE.md. **Read it before building any new page.**

---

## 11. Forms and submissions

All form submissions:

1. Validated client-side with Zod schemas.
2. Re-validated server-side.
3. Honeypot field for spam.
4. Rate-limited (Upstash Redis or Vercel KV).
5. Success → redirect to a thank-you page with confetti suppressed under reduced-motion.
6. Errors → human-language messages, never technical.

WhatsApp CTAs use the `https://wa.me/91XXXXXXXXXX?text=...` pattern with a pre-filled message. Phone number lives in env var `NEXT_PUBLIC_WHATSAPP_NUMBER`.

---

## 12. Content (MDX or Sanity)

If using MDX in repo:

- All blog posts in `content/blog/[slug].mdx`.
- Frontmatter required: `title`, `slug`, `excerpt`, `publishedAt`, `author`, `category`, `image`, `seo` (object).
- Body uses standard markdown + custom components (`<Quote>`, `<CTA>`, `<Image>`).
- Reading time and word count computed at build time.

If using Sanity:

- Schemas live in `sanity/schemas/`.
- Studio runs at `/studio` route (auth-gated).
- Preview mode wired for draft content.
- ISR with 60-second revalidation for blog pages.

---

## 13. Testing

- **Unit:** Vitest for utilities and pure logic.
- **Component:** React Testing Library + Vitest.
- **E2E:** Playwright (one test per critical flow — home → WhatsApp click, pricing → WhatsApp click, blog post load).
- **Visual regression:** optional, Percy or Chromatic if budget allows.
- **Accessibility:** axe-core runs in CI on every PR.

Don't write tests for the sake of coverage. Test behaviors, not implementations.

---

## 14. Git & PR conventions

### 14.1 Commits

Conventional Commits format:

```
feat(home): add hero device mockup
fix(pricing): correct featured tier border
chore(deps): bump framer-motion to 11.3.0
perf(images): preload hero on home
a11y(nav): improve focus styles
```

### 14.2 Branches

- `main` — production. Protected.
- `feat/<short-name>` — new features.
- `fix/<short-name>` — bug fixes.
- `chore/<short-name>` — non-functional.

### 13.3 PRs

- One concern per PR.
- Description includes: what, why, screenshots/GIFs for visual changes, Lighthouse before/after for perf changes.
- Self-review before requesting review.
- No "fix typo" PRs in middle of feature work — bundle them.

---

## 15. Deployment

- Vercel preview deploys on every PR.
- Production deploys on merge to `main`.
- Env vars set in Vercel dashboard, never committed.
- `NEXT_PUBLIC_*` only for variables that are safe in the browser.
- Production smoke test: post-deploy, hit `/`, `/pricing`, `/work` and verify 200s.

---

## 16. What NOT to do

A short list of things that have been considered and explicitly rejected. Don't propose them again without raising it as a discussion first.

- ❌ Pure black background (`#000000`) — too harsh on OLED. We use `#0A0A0E`.
- ❌ Cream / beige / warm-white anywhere on the site.
- ❌ Pure white text on dark (`#FFFFFF`) — use `#EFEFF2`.
- ❌ Glowing-particle "AI" backgrounds.
- ❌ Stock photography of generic Indian families or office workers.
- ❌ Three.js / WebGL on landing pages.
- ❌ Cookie banners unless legally required (Plausible doesn't need one).
- ❌ Newsletter modal popups.
- ❌ Page-load splash screens.
- ❌ "Powered by" badges from third-party tools.
- ❌ Autoplaying video with sound.
- ❌ More than one font in any single component.
- ❌ Inline styles (`style={{...}}`) for anything except dynamic values.
- ❌ `console.log` left in committed code (ESLint blocks this).
- ❌ Class names like `text-[14px]` — use the design system.

---

## 17. The "is this on-brand?" smell test

Before merging anything, ask:

1. Does this look like it was made by a 6-person indie studio in Berlin?
2. Would a Vercel/Linear engineer hit ★ on this if they saw it on Twitter?
3. Would a salon owner in Imphal understand what we do in 5 seconds?

If all three answers are not yes, iterate.

---

## 18. Where to ask

- Product/scope questions → reference PRD.md, then ask the founder.
- Visual/brand questions → reference this file, then ask the founder.
- SEO/content questions → reference CLAUDE.md.
- Technical questions → reference Next.js / Tailwind / Framer Motion docs; this codebase doesn't fight the framework.

---

*If anything in this file conflicts with reality on the ground, update this file in the same PR. This document is the source of truth, and it should always reflect what we actually do.*
