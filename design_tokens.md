# Design Tokens

This document outlines the core design tokens used in the Orionixlabs website, managed via `tailwind.config.js`.

## Color Palette

Colors are defined to ensure a consistent visual identity.

| Token Name      | Hex Code  | Usage                               |
| --------------- | --------- | ----------------------------------- |
| `bg-dark`       | `#0A192F` | Primary background color (dark mode) |
| `accent-teal`   | `#64FFDA` | Primary accent, CTAs, highlights    |
| `accent-violet` | `#7C3AED` | Secondary accent, gradients         |
| `white`         | `#FFFFFF` | Text on dark backgrounds, surfaces  |

### Neutral Grays

A scale of desaturated grays is used for text, UI elements, and backgrounds.

| Token Name      | Hex Code  |
| --------------- | --------- |
| `neutral-50`    | `#F8FAFC` |
| `neutral-100`   | `#F1F5F9` |
| `neutral-200`   | `#E2E8F0` |
| `neutral-300`   | `#CBD5E1` |
| `neutral-400`   | `#94A3B8` |
| `neutral-500`   | `#64748B` |
| `neutral-600`   | `#475569` |
| `neutral-700`   | `#334155` |
| `neutral-800`   | `#1E293B` |
| `neutral-900`   | `#0F172A` |

## Typography

-   **Primary Font**: Inter (`font-sans`)
-   **Alternative Font**: Manrope (`font-manrope`)

These are variable fonts loaded via `next/font`.

## Spacing

Spacing follows Tailwind's default 4px scale. Key custom paddings are defined in the `@layer components` section of `globals.css`:

-   `.section-padding`: `px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`

## Motion & Animation

Animations are handled by Framer Motion and defined in `tailwind.config.js` and `src/lib/motionVariants.ts`.

### Keyframe Animations (CSS)
-   `fadeIn`: Opacity from 0 to 1.
-   `slideUp`: TranslateY from 30px to 0 with fade in.
-   `float`: Gentle up-and-down floating effect.
-   `glow`: Pulsating box-shadow effect.
-   `spin-slow`: Slow rotation.

### Framer Motion Variants (`motionVariants.ts`)
-   `fadeUp`: Element fades and slides up into view.
-   `staggerContainer`: Wrapper for staggering animations of child elements.
-   `staggerItem`: Individual item animation for staggering.
-   `slideInLeft` / `slideInRight`: Element slides in from the side.
-   `hoverFloat`: Element gently floats up on hover.

### Timing
-   **Default Duration**: `300ms` for most transitions.
-   **Complex Animations**: `500ms` - `800ms`.
-   **Easing**: `ease-in-out` or `easeOut`.
