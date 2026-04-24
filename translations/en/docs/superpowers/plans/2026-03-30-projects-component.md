# Projects Component Implementation Plan

> **Requirement for Executing Agent:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute tasks step-by-step. This plan uses `- [ ]` checkboxes to track steps.

**Goal:** Implement a Projects component that displays a list of projects. Each project card should include a screenshot area, title, description, and tech stack tags, consistent with the current dark theme.

**Architecture:** Keep the existing `projects` data structure unchanged. Implement a multi-column information card layout within `Projects.tsx`. Use test-driven development to constrain the core structure of the project cards first, then add high-fidelity placeholder screenshots, dark card styling, and responsive layout. Only modify placeholder project data, the Projects component, and the corresponding test file.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS v4, Vitest, Testing Library

---

## File Structure Mapping

- Create: `src/components/Projects.test.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/data/projects.ts`

### Task 1: Write Projects Structure Tests First

**File:**
- Create: `src/components/Projects.test.tsx`

- [ ] **Step 1: Write failing tests to constrain the core elements of each card**

Create `src/components/Projects.test.tsx`:

```tsx
import { render, screen, within } from "@testing-library/react";
import { projects } from "../data/projects";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders every project card with preview, title, description, tags, and link", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        name: "项目展示",
      }),
    ).toBeInTheDocument();

    for (const project of projects) {
      const article = screen.getByRole("article", { name: project.name });

      expect(
        within(article).getByRole("img", {
          name: `${project.name} 项目截图预览`,
        }),
      ).toBeInTheDocument();

      expect(
        within(article).getByRole("heading", {
          name: project.name,
        }),
      ).toBeInTheDocument();

      expect(within(article).getByText(project.description)).toBeInTheDocument();

      for (const tag of project.techStack) {
        expect(within(article).getByText(tag)).toBeInTheDocument();
      }

      expect(
        within(article).getByRole("link", {
          name: `查看 ${project.name}`,
        }),
      ).toHaveAttribute("href", project.link);
    }
  });
});
```

- [ ] **Step 2: Run tests and confirm they fail initially**

Run: `npm run test -- src/components/Projects.test.tsx`

Expected: Failure, because the current `Projects.tsx` does not yet provide an accessible screenshot preview area and project card semantic structure.

### Task 2: Implement Project List and Column Cards

**Files:**
- Modify: `src/components/Projects.tsx`
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Populate Placeholder Data for "Project List"**

Adjust `src/data/projects.ts` to include at least 3 project items, maintaining the same type structure. Example:

```ts
export const projects: ProjectItem[] = [
  {
    name: "Personal Portfolio Website",
    description: "A portfolio entry page to host personal introductions, project showcases, and contact information.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "",
    link: "https://example.com/portfolio",
  },
  {
    name: "Creator Toolbox",
    description: "A prototype personal workbench for organizing content production workflows, capturing inspiration, and managing publishing schedules.",
    techStack: ["React", "Node.js", "Design System"],
    image: "",
    link: "https://example.com/toolkit",
  },
  {
    name: "Brand Campaign Landing Page",
    description: "A concept design for a brand marketing page emphasizing visual rhythm, information conversion, and mobile experience.",
    techStack: ["Vite", "Tailwind CSS", "Motion"],
    image: "",
    link: "https://example.com/campaign",
  },
];
```

- [ ] **Step 2: Implement Column Cards and Placeholder Screenshot Blocks**

Adjust `src/components/Projects.tsx` as follows:

```tsx
import { projects } from "../data/projects";

function ProjectPreview({ name }: { name: string }) {
  return (
    <div
      aria-label={`${name} project screenshot preview`}
      className="relative min-h-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(15,23,42,0.88),rgba(14,116,144,0.28))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_rgba(2,8,23,0.34)]"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="relative flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-cyan-200/80">
          <span>Preview</span>
          <span>UI Study</span>
        </div>
        <div className="mt-4 grid flex-1 gap-3">
          <div className="h-24 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-sky-400/10 to-transparent" />
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5" />
            <div className="rounded-2xl border border-white/10 bg-white/5" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
            <div className="h-12 rounded-2xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
```

<p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Selected Projects</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Project Showcase</h2>
        </div>
      </div>

      <ul className="mt-8 grid gap-6">
        {projects.map((project) => (
          <li key={project.name}>
            <article
              aria-label={project.name}
              className="group grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_60px_rgba(2,8,23,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06] md:grid-cols-[1.05fr_0.95fr] md:p-6"
            >
              <ProjectPreview name={project.name} />

              <div className="flex min-h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Live Project</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>
                </div>

                <div className="mt-8">
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    aria-label={`View ${project.name}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200"
                    href={project.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 3: Run Unit Tests to Confirm Success**

Run: `npm run test -- src/components/Projects.test.tsx`

Expected: Pass, indicating that each project card has a screenshot area, title, description, tags, and link.

### Task 3: Full Verification of Changes

**Files:**
- Verify: `src/components/Projects.tsx`
- Verify: `src/components/Projects.test.tsx`
- Verify: `src/data/projects.ts`

- [ ] **Step 1: Run Full Tests**

Run: `npm run test`

Expected: All tests pass.

- [ ] **Step 2: Run ESLint**

Run: `npm run lint`

Expected: No ESLint errors.

- [ ] **Step 3: Run Production Build**

Run: `npm run build`

Expected: TypeScript compilation and Vite build complete successfully.

- [ ] **Step 4: Check Git Change Scope**

Run: `git status --short`

Expected: Only changes to the Projects component and related documentation, test, and data files appear.