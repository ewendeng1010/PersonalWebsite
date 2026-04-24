# Portfolio Project Initialization Implementation Plan

> **Requirement for Executing Agent:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute tasks step-by-step. This plan uses `- [ ]` checkboxes to track progress.

**Goal:** Initialize a React + TypeScript + Vite project in the current repository, integrate Tailwind CSS, and establish the minimal directory structure and placeholder code required for subsequent portfolio development.

**Architecture:** Based on the official Vite React + TypeScript template, maintaining a single-page application structure. Routing and animation dependencies will not be introduced at this stage. The source code layer will only create the component directory, data directory, and minimal runnable placeholder implementations as required by the documentation, ensuring the build pipeline functions correctly.

**Technology Stack:** React, TypeScript, Vite, Tailwind CSS v4, `@tailwindcss/vite`

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

### Task 1: Initialize Vite React + TypeScript Project

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

- [ ] **Step 1: Verify that no Node project is currently available in the repository**

Run: `test -f package.json`

Expected: Non-zero exit code, indicating that the current directory has not yet been initialized as a Node project.

- [ ] **Step 2: Execute initialization with the official Vite React + TypeScript template**

Run: `npm create vite@latest . -- --template react-ts`

Expected: Generation of `package.json`, TypeScript configurations, Vite configuration, and initial `src/` files in the current directory.

- [ ] **Step 3: Inspect the generated entry file and scripts**

Run: `sed -n '1,220p' package.json`

Expected: Inclusion of `dev`, `build`, and `preview` scripts, along with dependencies related to React, TypeScript, and Vite.

- [ ] **Step 4: Commit the initialized skeleton**

```bash
git add package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css
git commit -m "feat: scaffold vite react typescript app"
```

### Task 2: Integrate Tailwind CSS Build Chain

**Files:**
- Modified: `package.json`
- Modified: `package-lock.json`
- Modified: `vite.config.ts`
- Modified: `src/index.css`
- Modified: `src/App.tsx`

- [ ] **Step 1: Verify Tailwind Dependency is Not Yet Integrated**

Run: `npm ls tailwindcss`

Expected: Exit code is non-zero, indicating Tailwind is not yet installed in the current project.

- [ ] **Step 2: Install Tailwind v4 and Vite Plugin**

Run: `npm install -D tailwindcss @tailwindcss/vite`

Expected: `tailwindcss` and `@tailwindcss/vite` are added to `devDependencies` in `package.json`, and `package-lock.json` is updated.

- [ ] **Step 3: Integrate Tailwind Plugin into Vite**

Modify `vite.config.ts` as follows:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Expected: Vite build process can recognize Tailwind.

- [ ] **Step 4: Integrate Tailwind into Source Code Entry Point**

Modify `src/index.css` as follows:

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

- [ ] **Step 5: Use a Minimal Tailwind Class to Verify Style Chain**

Temporarily modify `src/App.tsx` to include the following structure:

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

Expected: Tailwind can correctly scan and generate corresponding class styles during subsequent builds.

- [ ] **Step 6: Commit Tailwind Integration**

```bash
git add package.json package-lock.json vite.config.ts src/index.css src/App.tsx
git commit -m "feat: add tailwind css setup"
```

### Task 3: Establish Base Directory and Placeholder Components for Documentation Requirements

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

- [ ] **Step 1: First, verify that the current component directory has not yet been established**

Run: `test -d src/components`

Expected: Non-zero exit code, indicating the components directory has not been created.

- [ ] **Step 2: Create typed placeholder data**

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
    name: "Sample Project",
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

- [ ] **Step 3: Create minimally reusable components**

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

- [ ] **Step 4: Assemble the placeholder page with `App.tsx`**

Adjust `src/App.tsx` to:

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

- [ ] **Step 5: Commit the basic structure**

```bash
git add src/App.tsx src/components/Header.tsx src/components/Hero.tsx src/components/About.tsx src/components/Projects.tsx src/components/Contact.tsx src/components/Footer.tsx src/data/projects.ts src/data/skills.ts
git commit -m "feat: add portfolio app structure"
```

### Task 4: Verify Project Buildability

**Files:**
- Verify: `package.json`
- Verify: `src/**/*`

- [ ] **Step 1: Install All Dependencies**

Run: `npm install`

Expected: Dependencies are installed successfully without blocking errors.

- [ ] **Step 2: Execute Production Build Verification**

Run: `npm run build`

Expected: The command exits with a status code of 0 and outputs Vite build success information.

- [ ] **Step 3: Check Final Git Status**

Run: `git status --short`

Expected: Only changes related to this initialization are present; if changes are committed incrementally as planned, the working directory should only contain uncommitted supplementary changes or be empty.

- [ ] **Step 4: Commit Verified Final Changes**

```bash
git add .
git commit -m "chore: verify portfolio bootstrap setup"
```