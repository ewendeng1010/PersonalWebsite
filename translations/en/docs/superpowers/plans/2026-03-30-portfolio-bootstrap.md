# Portfolio Project Initialization Implementation Plan

> **Requirements for execution‑type agents:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute the tasks step‑by‑step. This plan tracks steps with `- [ ]` checkboxes.

**Goal:** Initialize a React + TypeScript + Vite project in the current repository, integrate Tailwind CSS, and create the minimal directory structure and placeholder code needed for subsequent portfolio development.

**Architecture:** Use Vite’s official React + TypeScript template as the base, keep a single‑page‑application shape, and do **not** introduce routing or animation dependencies in this iteration. At the source level, only create the component, data, and minimal runnable placeholder implementations required by the documentation, ensuring the build pipeline runs successfully first.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS v4, `@tailwindcss/vite`

---

## File Structure Mapping

- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`
- Modify: `docs/superpowers/specs/2026-03-30-portfolio-bootstrap-design.md`

### Task 1: Initialize Vite React + TypeScript Project

**Files:**
- Create: `package.json`
- Create: `package-lock.json`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

- [ ] **Step 1: Verify that the repository does not already contain a usable Node project**

Run: `test -f package.json`

Expected: Exit code non‑zero, indicating that the current directory has not yet been initialized as a Node project.

- [ ] **Step 2: Run Vite’s official React + TypeScript template initialization**

Run: `npm create vite@latest . -- --template react-ts`

Expected: Generates `package.json`, TypeScript configuration, Vite configuration, and initial files under `src/` in the current directory.

- [ ] **Step 3: Inspect the generated entry file and scripts**

Run: `sed -n '1,220p' package.json`

Expected: Contains `dev`, `build`, `preview` scripts as well as React, TypeScript, and Vite‑related dependencies.

- [ ] **Step 4: Commit the scaffold**

```bash
git add package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css
git commit -m "feat: scaffold vite react typescript app"
```

### Task 2: Integrate Tailwind CSS Build Chain

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Modify: `src/index.css`
- Modify: `src/App.tsx`

- [ ] **Step 1: Verify that Tailwind is not yet installed**

Run: `npm ls tailwindcss`

Expected: Exit code non‑zero, indicating Tailwind is not installed in the current project.

- [ ] **Step 2: Install Tailwind v4 and the Vite plugin**

Run: `npm install -D tailwindcss @tailwindcss/vite`

Expected: `devDependencies` in `package.json` now include `tailwindcss` and `@tailwindcss/vite`; `package-lock.json` is updated.

- [ ] **Step 3: Add the Tailwind plugin to Vite**

Update `vite.config.ts` to:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Expected: Vite can recognize Tailwind during the build.

- [ ] **Step 4: Import Tailwind at the source entry point**

Update `src/index.css` to:

```css
@import "tailwindcss";

:root {
  color: #ffffff;
  background-color: #0a0a0a;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background-color: #0a0a0a;
}

#root {
  min-height: 100vh;
}
```

- [ ] **Step 5: Use a minimal Tailwind class to verify the style pipeline**

Temporarily change `src/App.tsx` to contain the following structure:

```tsx
export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio Bootstrap</h1>
      </div>
    </main>
  );
}
```

Expected: During the subsequent build, Tailwind correctly scans and generates the corresponding class styles.

- [ ] **Step 6: Commit the Tailwind integration**

```bash
git add package.json package-lock.json vite.config.ts src/index.css src/App.tsx
git commit -m "feat: add tailwind css setup"
```

### Task 3: Create the Documentation‑Required Base Directory and Placeholder Components

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`

- [ ] **Step 1: Verify that the components directory does not yet exist**

Run: `test -d src/components`

Expected: Exit code non‑zero, indicating the components directory has not been created.

- [ ] **Step 2: Create typed placeholder data**

`src/data/projects.ts`:

```ts
export interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Example Project",
    description: "Real project content will be added here later.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://via.placeholder.com/800x480?text=Project+Preview",
    link: "https://example.com",
  },
];
```

`src/data/skills.ts`:

```ts
export const skills: string[] = ["React", "TypeScript", "Tailwind CSS"];
```

- [ ] **Step 3: Create minimal reusable components**

`src/components/Header.tsx`:

```tsx
export function Header() {
  return <header className="border-b border-white/10 px-6 py-4">Header</header>;
}
```

`src/components/Hero.tsx`:

```tsx
export function Hero() {
  return <section className="px-6 py-12">Hero</section>;
}
```

`src/components/About.tsx`:

```tsx
import { skills } from "../data/skills";

export function About() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold">About</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border border-white/10 px-3 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

`src/components/Projects.tsx`:

```tsx
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-4 grid gap-4">
        {projects.map((project) => (
          <li key={project.name} className="rounded-2xl border border-white/10 p-4">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className="mt-2 text-sm text-white/70">{project.description}</p>
            <a className="mt-4 inline-block text-sm text-cyan-300" href={project.link}>
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

`src/components/Contact.tsx`:

```tsx
export function Contact() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <a className="mt-4 inline-block text-cyan-300" href="mailto:hello@example.com">
        hello@example.com
      </a>
    </section>
  );
}
```

`src/components/Footer.tsx`:

```tsx
export function Footer() {
  return <footer className="border-t border-white/10 px-6 py-4 text-sm text-white/60">Footer</footer>;
}
```

- [ ] **Step 4: Assemble the placeholder page in `App.tsx`**

Replace `src/App.tsx` with:

```tsx
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Commit the base structure**

```bash
git add src/App.tsx src/components/Header.tsx src/components/Hero.tsx src/components/About.tsx src/components/Projects.tsx src/components/Contact.tsx src/components/Footer.tsx src/data/projects.ts src/data/skills.ts
git commit -m "feat: add portfolio app structure"
```

### Task 4: Verify the Project Can Build

**Files:**
- Verify: `package.json`
- Verify: `src/**/*`

- [ ] **Step 1: Install all dependencies**

Run: `npm install`

Expected: Dependencies install successfully with no blocking errors.

- [ ] **Step 2: Run a production build for verification**

Run: `npm run build`

Expected: Exit code `0` and Vite reports a successful build.

- [ ] **Step 3: Check the final Git status**

Run: `git status --short`

Expected: Only changes related to this initialization appear; if commits were made step‑by‑step as planned, the working tree should contain only any remaining uncommitted modifications or be clean.

- [ ] **Step 4: Commit the final verified changes**

```bash
git add .
git commit -m "chore: verify portfolio bootstrap setup"
```