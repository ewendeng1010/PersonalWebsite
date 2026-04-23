# Hero Component Design

## Background

The current project has completed the basic initialization of React + TypeScript + Vite + Tailwind CSS and set up a placeholder structure for the portfolio home page. This change focuses on the first visual upgrade of the home page Hero component, elevating it from an “engineering placeholder block” to a header display area that is closer to a real portfolio home page.

## Goals

- Create a Hero component that includes a large title, a brief introduction, and a letter avatar.
- Use Tailwind CSS to achieve a dark‑theme visual.
- Add moderate gradient effects to the title and background to improve home‑page recognizability.
- Keep the component structure clear, leaving space for later insertion of real personal information and animations.

## Non‑Goals

- No integration of real avatar image assets at this time.
- No addition of CTA buttons, complex scroll animations, or Framer Motion effects.
- No modifications to the structure or copy of the About, Projects, Contact, or other sections.
- No integration of real personal data, project data, or social‑media account information.

## Recommended Solution

Adopt a two‑column Hero layout: “text on the left, letter‑avatar card on the right.” The left side establishes the first‑glance information hierarchy, while the right side provides a circular letter avatar with a glowing edge to balance the visual weight. This approach matches common reading habits on portfolio sites and makes it easy to replace the placeholder with real content later without reorganizing the overall structure.

## Alternative Solutions

### 1. Text Left, Avatar Card Right

The recommended solution. Information hierarchy is stable, implementation cost is moderate, and mobile adaptation is natural, making it suitable for the first version of the site’s Hero.

### 2. Oversized Title on Top, Floating Avatar Below

More poster‑like, delivering stronger first‑screen impact, but the readability of the introduction and the connection to the sections below may be weaker.

### 3. Symmetrical Central Title with Avatar Embedded in Title Area

Highly recognizable, but relies more on precise typographic control and may exceed the “clean modern” design requirements.

## Layout Design

- The Hero maintains a two‑column layout: left text, right avatar on desktop; collapses to a single column on mobile.
- **Left side includes:**
  - A small tag indicating the role or site type.
  - The main heading, laid out in 2–3 lines with a large font size.
  - An introductory paragraph describing personal positioning and site content direction.
- **Right side includes:**
  - A circular letter‑avatar container.
  - The avatar displays `EW` as the default content.
  - The container uses a soft border, an inner gradient, and an outer glow.

## Visual Style

- Keep a site‑wide dark theme, using `#0a0a0a` as the base background.
- The Hero area overlays a deep‑blue‑black gradient to give the first screen stronger depth.
- Within the title, only a keyword segment is highlighted with a cyan‑to‑purple gradient text.
- Introductory text uses a low‑contrast gray‑white color to let the title stand out.
- The background adds two subtle radial light spots: one toward the top‑left, the other toward the right, serving the visual focus of the title and avatar.

## Responsive Strategy

- Desktop uses a two‑column layout to ensure visual balance between the title area and the avatar area.
- Tablet and mobile switch to a single‑column stack, prioritizing readability of the title and introduction.
- On small screens, reduce the title font size and avatar dimensions appropriately to avoid an overcrowded first screen.

## Component Scope

- Primary changes are in `src/components/Hero.tsx`.
- Only add a small amount of global styles when necessary; do not expand the scope to other sections.
- No new image assets; do not modify the data file structure.
- The component may retain a few comments explaining that this is the initial skeleton implementation.

## Verification

- Run `npm run build` and confirm that the build succeeds after the Hero component update.
- Run `npm run lint` and confirm that Tailwind class names and component code have no ESLint errors.
- Manually check that the component structure contains the three core elements: large title, introduction, and letter avatar.

## Implementation Notes

- The current version of the Hero should prioritize establishing visual direction rather than completing final interactions in one go.
- The letter‑avatar approach avoids blocking on asset preparation; it can later be swapped seamlessly for a real avatar image.
- After this work, the Hero will upgrade from an “engineered placeholder” to a “core home‑page showcase ready for further iteration.”