# UI Context

The **"Voltage"** design language is the core differentiator. It combines a deep midnight professional base with electric, high-energy accents.

## Color Tokens (Voltage Theme)
```css
:root {
  /* Base */
  --bg-primary:     #0A0A0E;
  --bg-surface:     #14141A;
  --bg-elevated:    #1C1C24;
  --bg-inverse:     #EFEFF2;

  /* Accent */
  --accent-primary:  #D0FF14; /* Electric Lime */
  --accent-hover:    #B8E600;
  --accent-soft:     #2E3A0A;

  /* Secondary */
  --accent-secondary:  #FF5C28; /* Burn Orange */
  --accent-secondary-hover: #E04A1C;

  /* Text */
  --text-primary:   #EFEFF2; /* Off-white for OLED comfort */
  --text-secondary: #B4B4BE;
  --text-muted:     #7F7F8A;
  --text-inverse:   #0A0A0E;

  /* Borders */
  --border-subtle:  #1F1F28;
  --border-default: #2A2A36;
}
```

## Typography
| Role | Family | weights | Style Rules |
|---|---|---|---|
| **Display** | Instrument Serif | 400 | Italic for hero hooks, tight line-height (1.0). |
| **UI/Sans** | Geist | 300-700 | Primary interface font, negative letter-spacing for headers. |
| **Meta/Mono**| Geist Mono | 400-500 | Numbers, labels, and small technical metadata. |

## Spacing & Radius
- **Grid:** 8-point system.
- **Radius:** 
  - `sm`: 4px
  - `md`: 8px
  - `lg`: 16px (Cards)
  - `pill`: 999px (Buttons)
- **Gaps:** `clamp()` based fluid spacing for mobile/desktop transitions.

## Motion Principles
- **Custom Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Smooth out).
- **Choreography:** Staggered reveals for bento cards and hero headlines.
- **Performance:** 60fps mandatory. Use CSS transforms/opacity only for scroll triggers.

## Components Patterns
- **Buttons:** Large, pill-shaped, high-contrast.
- **Cards:** Subtle borders (`--border-subtle`) with light glows instead of heavy shadows.
- **Bento Grid:** Asymmetric layouts with variable `grid-column` spans.
- **Mockups:** Phone-frame mockups showing real customer site scrolls.
