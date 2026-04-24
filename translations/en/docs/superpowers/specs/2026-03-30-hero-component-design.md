# Hero Component Design

## Background

The current project has completed the basic initialization of React + TypeScript + Vite + Tailwind CSS and has set up the placeholder structure for the portfolio homepage. This change focuses on the first round of visual upgrades for the homepage Hero component, elevating it from an "engineering placeholder" to a header display area closer to a real portfolio homepage.

## Goals

- Create a Hero component that includes a large title, a brief introduction, and an initial letter avatar.
- Implement a dark theme visual using Tailwind CSS.
- Add moderate gradient effects to the title and background to enhance homepage recognition.
- Maintain a clear component structure, leaving room for future population with real personal information and animations.

## Non-Goals

- Do not integrate real avatar image resources at this time.
- Do not add CTA buttons, complex scroll animations, or Framer Motion animations at this time.
- Do not modify the structure or copy of other sections such as About, Projects, or Contact at this time.
- Do not integrate real personal profile, project data, or social account information at this time.

## Recommended Solution

Adopt a two-column Hero layout: "text on the left, initial letter avatar card on the right." The left side is responsible for establishing the initial information hierarchy, while the right side complements the visual focus with a circular initial letter avatar featuring a glowing edge. This solution aligns with common reading habits for portfolio sites and facilitates the gradual replacement with real content without reorganizing the overall structure.

## Alternative Solutions

### 1. Left Text, Right Avatar Card

Recommended solution. Stable information structure, moderate implementation cost, and natural mobile adaptation, suitable as the first version of the Hero for the current site.

### 2. Large Title Above, Floating Avatar Below

More of a visual poster feel, with stronger initial impact, but the readability of the introduction and the connection with the sections below will be slightly weaker.

### 3. Centered Symmetrical Title with Avatar Embedded in Title Area

High recognition, but relies more on precise typography control and may exceed the "clean and modern" design requirements.

## Layout Design

- The Hero will maintain a two-column layout: text on the left and avatar on the right for desktop, collapsing into a single column for mobile.
- The left side will include:
  - A small tag to indicate identity or site type.
  - A main title, typeset in a large font size across 2 to 3 lines.
  - An introductory paragraph explaining personal positioning and website content direction.
- The right side will include:
  - A circular initial letter avatar container.
  - The avatar will use `EW` as default content.
  - The avatar container will feature a soft border, an inner gradient, and an outer glow.

## Visual Style

- Maintain the site-wide dark theme, with `#0a0a0a` as the base background.
- Overlay a dark blue-black gradient on the Hero area to give the initial screen a stronger sense of depth.
- Highlight only a segment of keywords in the title using a blue-cyan to purple-blue gradient text.
- Use a low-contrast off-white for the introductory text to emphasize the title hierarchy.
- Add two layers of subtle radial light spots to the background, one towards the upper left and one towards the right, to serve the visual focus of the title and avatar.

## Responsive Strategy

- Use a two-column layout on desktop to ensure visual balance between the text and avatar areas.
- Switch to a single-column stack for tablets and mobile devices, prioritizing the readability of the title and introduction.
- Appropriately reduce the title font size and avatar dimensions on smaller screens to avoid an overly crowded initial view.

## Component Boundaries

- Primarily modify `src/components/Hero.tsx`.
- Supplement with minimal global styles only when necessary; do not expand to refactor other sections.
- Do not add new image resources or modify data file structures.
- A few comments can be retained within the component to indicate that this is the initial skeleton implementation for the first screen.

## Verification Methods

- Run `npm run build` to confirm that the build passes after the Hero component update.
- Run `npm run lint` to confirm that there are no ESLint errors in Tailwind class names and component code.
- Manually check that the component structure includes the three core elements: large title, introduction, and initial letter avatar.

## Implementation Notes

- The current version of the Hero should prioritize establishing the visual direction rather than completing all final interactions at once.
- The initial letter avatar solution is intended to avoid blocking progress due to resource preparation, allowing for seamless replacement with real avatar images later.
- Upon completion, the Hero will be upgraded from an "engineering initialization placeholder" to a "core homepage display area that can be iterated upon."