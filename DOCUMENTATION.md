# Project Documentation — Loop Landing Page

## 1. Overview

Loop is a landing page for a fictional async-collaboration SaaS product. The
project's goal was to demonstrate animation, responsiveness, and component
architecture skills using React, Tailwind CSS, and Framer Motion — not to
ship a real product.

## 2. Architecture decisions

**Why Framer Motion over GSAP**
Framer Motion integrates natively with React state and hooks (`useScroll`,
`useTransform`, `useInView`, `useSpring`), so animations stay declarative and
co-located with the components they animate — no separate imperative
timeline setup, no manual cleanup on unmount.

**Why a `data/content.js` file instead of hardcoding copy in components**
Every section pulls its copy, stats, and list items from one file. This
means updating pricing, testimonials, or feature copy never requires editing
JSX — a pattern that scales cleanly if this were handed to a
non-developer/content editor, or swapped for a CMS fetch later.

**Why `Reveal` and `AnimatedCounter` are separate reusable components**
Both wrap common Framer Motion patterns (scroll-triggered fade/slide,
spring-driven count-up) so every section gets consistent, once-only
animation behavior without repeating `whileInView`/`useInView` boilerplate
six times across the codebase.

**Theme persistence without a flash of the wrong theme**
Dark/light state is normally set after React mounts, which causes a
visible flash if the stored preference differs from the default. A small
inline `<script>` in `index.html` runs before any React code, reads
`localStorage`, and applies the `dark` class to `<html>` immediately —
`ThemeContext` then just reads that existing class as its initial state.

## 3. Component breakdown

| Component | Responsibility |
|---|---|
| `ScrollProgress` | Fixed top bar bound to `scrollYProgress`, spring-smoothed for a natural feel rather than a linear snap |
| `Navbar` | Sticky, becomes translucent/blurred after 12px of scroll; mobile menu animates height rather than toggling display |
| `Hero` | Word-by-word headline animation via a `variants` stagger; two background orbs move at different parallax speeds tied to scroll progress within the section only (not the whole page) |
| `Features` | Six cards in a responsive grid; hover state combines translateY, shadow, and icon scale for a tactile "interactive card" feel |
| `Process` | Timeline connector line height is bound to scroll progress through the section, so it visually "draws in" as the reader scrolls past each step |
| `Testimonials` | Static 3-up grid, each card reveals independently with a staggered delay |
| `Pricing` | Local `useState` toggle between monthly/yearly; middle tier visually highlighted and slightly scaled up on desktop |
| `Contact` | Fully controlled form; validation runs on blur (per-field) and on submit (all fields), with inline error messages and a distinct success state |
| `Footer` | Static, minimal |

## 4. Validation logic (Contact form)

- **Name**: required, non-empty after trim
- **Email**: required, checked against a standard email-shape regex
- **Company**: optional, no validation
- **Message**: required, minimum 10 characters after trim

Validation re-runs on every keystroke *only* after a field has been blurred
once, so users aren't shown errors while still typing their first pass
through a field — errors only appear after they've had a chance to finish
it.

## 5. Responsiveness approach

Built mobile-first with Tailwind breakpoints (`sm`, `md`, `lg`). Key
adaptations:
- Navbar collapses to a hamburger + slide-down menu under `md`
- Hero headline scales from `text-4xl` (mobile) to `text-7xl` (desktop)
- Feature/testimonial grids go 1 → 2 → 3 columns
- Pricing cards stack vertically on mobile, 3-up with the middle tier
  scaled up on `md+`

## 6. Known limitations / things not implemented

- No backend — the contact form does not send data anywhere; it only
  validates and shows a local success state.
- No CMS — content lives in a static JS file, not fetched from an API.
- No automated tests were included given the project scope.

## 7. Possible extensions

- Wire the contact form to a real endpoint (e.g. Formspree, a serverless
  function, or an email API)
- Add a blog/changelog section using the same `Reveal` pattern
- Add page transitions if additional routes are introduced
