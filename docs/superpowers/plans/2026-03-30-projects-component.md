# Projects 组件实施计划

> **给执行型 agent 的要求：** 必须使用 `superpowers:subagent-driven-development`（推荐）或 `superpowers:executing-plans` 按任务逐步执行。本计划使用 `- [ ]` 复选框跟踪步骤。

**目标：** 实现一个展示项目列表的 Projects 组件，让每个项目卡片都包含截图区域、标题、描述和技术栈标签，并与当前深色主题保持一致。

**架构：** 保持现有 `projects` 数据结构不变，在 `Projects.tsx` 内实现分栏信息卡布局。通过测试先行约束项目卡片的核心结构，再补充高质感占位截图块、深色卡片样式和响应式布局。只修改项目数据占位内容、Projects 组件和对应测试文件。

**技术栈：** React、TypeScript、Vite、Tailwind CSS v4、Vitest、Testing Library

---

## 文件结构映射

- 创建：`src/components/Projects.test.tsx`
- 修改：`src/components/Projects.tsx`
- 修改：`src/data/projects.ts`

### 任务 1：先写 Projects 结构测试

**文件：**
- 创建：`src/components/Projects.test.tsx`

- [ ] **步骤 1：编写失败测试，约束每张卡片的核心元素**

创建 `src/components/Projects.test.tsx`：

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

- [ ] **步骤 2：运行单测并确认先失败**

运行：`npm run test -- src/components/Projects.test.tsx`

预期：失败，原因是当前 `Projects.tsx` 还没有提供可访问的截图预览区域和项目卡片语义结构。

### 任务 2：实现项目列表与分栏卡片

**文件：**
- 修改：`src/components/Projects.tsx`
- 修改：`src/data/projects.ts`

- [ ] **步骤 1：补充更像“项目列表”的占位数据**

将 `src/data/projects.ts` 调整为至少 3 个项目项，但保持类型结构不变。示例：

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

- [ ] **步骤 2：实现分栏卡片与占位截图块**

将 `src/components/Projects.tsx` 调整为：

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

- [ ] **步骤 3：运行单测确认通过**

运行：`npm run test -- src/components/Projects.test.tsx`

预期：通过，说明每张项目卡片都已经具备截图区域、标题、描述、标签和链接。

### 任务 3：完整验证变更

**文件：**
- 验证：`src/components/Projects.tsx`
- 验证：`src/components/Projects.test.tsx`
- 验证：`src/data/projects.ts`

- [ ] **步骤 1：运行完整测试**

运行：`npm run test`

预期：全部测试通过。

- [ ] **步骤 2：运行 ESLint**

运行：`npm run lint`

预期：无 ESLint 报错。

- [ ] **步骤 3：运行生产构建**

运行：`npm run build`

预期：TypeScript 编译和 Vite 构建全部通过。

- [ ] **步骤 4：检查 Git 变更范围**

运行：`git status --short`

预期：只出现本次 Projects 组件及相关文档、测试、数据文件变更。
