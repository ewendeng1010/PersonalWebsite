# Projects Component Implementation Plan

> **Requirement for execution‑type agents:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute tasks step‑by‑step. This plan tracks steps with `- [ ]` checkboxes.

**Goal:** Implement a **Projects** component that displays a list of projects. Each project card should contain a screenshot area, title, description, and technology‑stack tags, and it must match the current dark theme.

**Architecture:** Keep the existing `projects` data structure unchanged. Implement a column‑based information‑card layout inside `Projects.tsx`. First, write tests that constrain the core structure of each project card, then add high‑quality placeholder screenshot blocks, dark‑card styling, and responsive layout. Only modify the placeholder project data, the Projects component, and the corresponding test file.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS v4, Vitest, Testing Library

---

## File‑Structure Mapping

- **Create:** `src/components/Projects.test.tsx`
- **Modify:** `src/components/Projects.tsx`
- **Modify:** `src/data/projects.ts`

### Task 1 – Write the Projects Structure Test First

**File:**  
- **Create:** `src/components/Projects.test.tsx`

- [ ] **Step 1: Write a failing test that constrains each card’s core elements**

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

- [ ] **Step 2: Run the test and confirm it fails**

Run: `npm run test -- src/components/Projects.test.tsx`

**Expected result:** Failure, because the current `Projects.tsx` does not yet provide an accessible screenshot preview area or the required semantic structure for project cards.

### Task 2 – Implement the Project List with Column Cards

**Files:**  
- **Modify:** `src/components/Projects.tsx`  
- **Modify:** `src/data/projects.ts`

- [ ] **Step 1: Add placeholder data that looks more like a “project list”**

Adjust `src/data/projects.ts` to contain at least three project items while keeping the type structure unchanged. Example:

```ts
export const projects: ProjectItem[] = [
  {
    name: "个人作品集网站",
    description: "用于承载个人介绍、项目展示与联系方式的作品集入口页面。",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "",
    link: "https://example.com/portfolio",
  },
  {
    name: "创作者工具箱",
    description: "一个用于整理内容生产流程、灵感记录和发布节奏的个人工作台原型。",
    techStack: ["React", "Node.js", "Design System"],
    image: "",
    link: "https://example.com/toolkit",
  },
  {
    name: "品牌活动落地页",
    description: "强调视觉节奏、信息转化和移动端体验的品牌营销页面概念稿。",
    techStack: ["Vite", "Tailwind CSS", "Motion"],
    image: "",
    link: "https://example.com/campaign",
  },
];
```

- [ ] **Step 2: Implement column cards with a placeholder screenshot block**

Replace `src/components/Projects.tsx` with the following:

```tsx
import { projects } from "../data/projects";

function ProjectPreview({ name }: { name: string }) {
  return (
    <div
      aria-label={`${name} 项目截图预览`}
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
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Selected Projects</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">项目展示</h2>
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
                    aria-label={`查看 ${project.name}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200"
                    href={project.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    查看项目
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

- [ ] **Step 3: Run the test to confirm it passes**

Run: `npm run test -- src/components/Projects.test.tsx`

**Expected result:** Pass, indicating that each project card now includes a screenshot area, title, description, tags, and link.

### Task 3 – Full Verification of Changes

**Files:**  
- Verify: `src/components/Projects.tsx`  
- Verify: `src/components/Projects.test.tsx`  
- Verify: `src/data/projects.ts`

- [ ] **Step 1: Run the full test suite**

Run: `npm run test`

**Expected result:** All tests pass.

- [ ] **Step 2: Run ESLint**

Run: `npm run lint`

**Expected result:** No ESLint errors.

- [ ] **Step 3: Run a production build**

Run: `npm run build`

**Expected result:** TypeScript compilation and Vite build succeed.

- [ ] **Step 4: Check the Git change scope**

Run: `git status --short`

**Expected result:** Only the changes to the Projects component and its related test, data, and documentation files appear.