# Portfolio Bootstrap Design

## Context

This repository currently contains the requirement documents `PRD.md`, `TECH_DESIGN.md`, and `AGENT.md`, plus a previous static-site implementation in git history. The approved scope for this change is limited to project initialization only: scaffold a React + TypeScript + Vite application, install and configure Tailwind CSS, and create the baseline source structure required by the documents. This change does not include implementing the actual portfolio page content or migrating the old static site.

## Goals

- Initialize the project with React, TypeScript, and Vite in the current repository root.
- Install and configure Tailwind CSS for use in the app.
- Create the baseline `src/components` and `src/data` structure described in `TECH_DESIGN.md`.
- Add minimal placeholder components and data files so the project builds cleanly and future page work has stable entry points.

## Non-Goals

- Building the final portfolio UI.
- Migrating the previous `index.html`, `script.js`, or `styles.css` implementation into React.
- Adding routing unless a later requirement makes it necessary.
- Installing optional runtime libraries such as Framer Motion before they are used.

## Recommended Approach

Use the official Vite React + TypeScript template as the application base, then manually install and configure Tailwind CSS. This keeps the project close to the documented stack, minimizes unnecessary dependencies, and gives us a clean foundation for the later design and animation work.

## Alternatives Considered

### 1. Initialize Vite + React + TypeScript and add Tailwind manually

Recommended. This is the simplest path that directly matches the current technical design and keeps the repository easy to understand.

### 2. Initialize Vite and also install React Router now

Not recommended for this phase. The current PRD describes a portfolio landing experience, so adding routing now would introduce extra files and decisions before they provide value.

### 3. Convert the previous static site into React during bootstrap

Not recommended for this phase. That would mix two concerns, project setup and UI migration, and make verification less clear.

## Project Structure

The initialized project should include these source-level additions:

```text
src/
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    projects.ts
    skills.ts
  App.tsx
  main.tsx
```

`App.tsx` should assemble the placeholder sections in order. Each component should be a simple function component with a small explanatory comment where useful. The data files should export typed arrays that are intentionally minimal but valid.

## Styling Strategy

- Tailwind CSS will be configured as the primary styling approach.
- The initial implementation only needs enough styles to confirm Tailwind is wired correctly.
- The deeper dark-theme treatment from `PRD.md` and `AGENT.md` will be implemented in a later UI-focused change, rather than during bootstrap.

## Data Flow

- `src/data/projects.ts` will hold placeholder project records.
- `src/data/skills.ts` will hold placeholder skills.
- Presentational components can import these arrays directly for now.
- This keeps data editing simple while matching the requirement to store content in TypeScript files.

## Error Handling

- There is little runtime risk in the bootstrap phase.
- The main failure points are dependency installation, Tailwind configuration, and TypeScript import errors.
- These will be caught through a production build after scaffolding.

## Testing And Verification

- Install dependencies successfully.
- Run a production build with `npm run build`.
- Confirm the generated code compiles with TypeScript and Vite using the Tailwind-enabled source tree.

## Implementation Notes

- The repository currently shows deleted legacy static files in git status. The bootstrap work should not try to restore or migrate them.
- New work should be additive and focused on the React project scaffold.
- Keep the generated structure small and easy to extend in later changes.
