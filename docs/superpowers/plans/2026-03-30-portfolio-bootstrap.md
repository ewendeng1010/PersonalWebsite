# 作品集项目初始化实施计划

> **给执行型 agent 的要求：** 必须使用 `superpowers:subagent-driven-development`（推荐）或 `superpowers:executing-plans` 按任务逐步执行。本计划使用 `- [ ]` 复选框跟踪步骤。

**目标：** 在当前仓库中初始化 React + TypeScript + Vite 工程，接入 Tailwind CSS，并建立后续作品集开发所需的最小目录结构与占位代码。

**架构：** 以 Vite 官方 React + TypeScript 模板作为基础，保留单页应用形态，不在本次引入路由和动画依赖。源码层只创建文档要求的组件目录、数据目录和最小可运行占位实现，确保构建链路先跑通。

**技术栈：** React、TypeScript、Vite、Tailwind CSS v4、`@tailwindcss/vite`

---

## 文件结构映射

- 创建：`package.json`
- 创建：`package-lock.json`
- 创建：`tsconfig.json`
- 创建：`tsconfig.app.json`
- 创建：`tsconfig.node.json`
- 创建：`vite.config.ts`
- 创建：`index.html`
- 创建：`src/main.tsx`
- 创建：`src/App.tsx`
- 创建：`src/index.css`
- 创建：`src/components/Header.tsx`
- 创建：`src/components/Hero.tsx`
- 创建：`src/components/About.tsx`
- 创建：`src/components/Projects.tsx`
- 创建：`src/components/Contact.tsx`
- 创建：`src/components/Footer.tsx`
- 创建：`src/data/projects.ts`
- 创建：`src/data/skills.ts`
- 修改：`docs/superpowers/specs/2026-03-30-portfolio-bootstrap-design.md`

### 任务 1：初始化 Vite React + TypeScript 工程

**文件：**
- 创建：`package.json`
- 创建：`package-lock.json`
- 创建：`tsconfig.json`
- 创建：`tsconfig.app.json`
- 创建：`tsconfig.node.json`
- 创建：`vite.config.ts`
- 创建：`index.html`
- 创建：`src/main.tsx`
- 创建：`src/App.tsx`
- 创建：`src/index.css`

- [ ] **步骤 1：先验证仓库当前还没有可用的 Node 工程**

运行：`test -f package.json`

预期：退出码非 0，说明当前目录尚未初始化 Node 项目。

- [ ] **步骤 2：执行 Vite 官方 React + TypeScript 模板初始化**

运行：`npm create vite@latest . -- --template react-ts`

预期：在当前目录生成 `package.json`、TypeScript 配置、Vite 配置与 `src/` 初始文件。

- [ ] **步骤 3：检查生成的入口文件和脚本**

运行：`sed -n '1,220p' package.json`

预期：包含 `dev`、`build`、`preview` 脚本，以及 React、TypeScript、Vite 相关依赖。

- [ ] **步骤 4：提交初始化骨架**

```bash
git add package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css
git commit -m "feat: scaffold vite react typescript app"
```

### 任务 2：接入 Tailwind CSS 构建链路

**文件：**
- 修改：`package.json`
- 修改：`package-lock.json`
- 修改：`vite.config.ts`
- 修改：`src/index.css`
- 修改：`src/App.tsx`

- [ ] **步骤 1：先验证 Tailwind 依赖当前尚未接入**

运行：`npm ls tailwindcss`

预期：退出码非 0，说明当前工程尚未安装 Tailwind。

- [ ] **步骤 2：安装 Tailwind v4 和 Vite 插件**

运行：`npm install -D tailwindcss @tailwindcss/vite`

预期：`package.json` 的 `devDependencies` 中新增 `tailwindcss` 和 `@tailwindcss/vite`，`package-lock.json` 更新。

- [ ] **步骤 3：把 Tailwind 插件接入 Vite**

将 `vite.config.ts` 调整为：

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

预期：Vite 构建时能够识别 Tailwind。

- [ ] **步骤 4：把 Tailwind 接入源码入口**

将 `src/index.css` 调整为：

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

- [ ] **步骤 5：使用一个最小 Tailwind 类名验证样式链路**

将 `src/App.tsx` 临时调整为包含如下结构：

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

预期：后续构建时 Tailwind 能正确扫描并生成对应类样式。

- [ ] **步骤 6：提交 Tailwind 接入**

```bash
git add package.json package-lock.json vite.config.ts src/index.css src/App.tsx
git commit -m "feat: add tailwind css setup"
```

### 任务 3：建立文档要求的基础目录与占位组件

**文件：**
- 修改：`src/App.tsx`
- 创建：`src/components/Header.tsx`
- 创建：`src/components/Hero.tsx`
- 创建：`src/components/About.tsx`
- 创建：`src/components/Projects.tsx`
- 创建：`src/components/Contact.tsx`
- 创建：`src/components/Footer.tsx`
- 创建：`src/data/projects.ts`
- 创建：`src/data/skills.ts`

- [ ] **步骤 1：先验证当前组件目录尚未建立**

运行：`test -d src/components`

预期：退出码非 0，说明组件目录尚未创建。

- [ ] **步骤 2：创建类型化占位数据**

`src/data/projects.ts`：

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
    name: "示例项目",
    description: "后续将在这里补充真实项目内容。",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://via.placeholder.com/800x480?text=Project+Preview",
    link: "https://example.com",
  },
];
```

`src/data/skills.ts`：

```ts
export const skills: string[] = ["React", "TypeScript", "Tailwind CSS"];
```

- [ ] **步骤 3：创建最小可复用组件**

`src/components/Header.tsx`：

```tsx
export function Header() {
  return <header className="border-b border-white/10 px-6 py-4">Header</header>;
}
```

`src/components/Hero.tsx`：

```tsx
export function Hero() {
  return <section className="px-6 py-12">Hero</section>;
}
```

`src/components/About.tsx`：

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

`src/components/Projects.tsx`：

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
              查看项目
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

`src/components/Contact.tsx`：

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

`src/components/Footer.tsx`：

```tsx
export function Footer() {
  return <footer className="border-t border-white/10 px-6 py-4 text-sm text-white/60">Footer</footer>;
}
```

- [ ] **步骤 4：用 `App.tsx` 装配占位页面**

将 `src/App.tsx` 调整为：

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

- [ ] **步骤 5：提交基础结构**

```bash
git add src/App.tsx src/components/Header.tsx src/components/Hero.tsx src/components/About.tsx src/components/Projects.tsx src/components/Contact.tsx src/components/Footer.tsx src/data/projects.ts src/data/skills.ts
git commit -m "feat: add portfolio app structure"
```

### 任务 4：验证工程可构建

**文件：**
- 验证：`package.json`
- 验证：`src/**/*`

- [ ] **步骤 1：安装全部依赖**

运行：`npm install`

预期：依赖安装成功，无阻塞性错误。

- [ ] **步骤 2：执行生产构建验证**

运行：`npm run build`

预期：命令退出码为 0，并输出 Vite 构建成功信息。

- [ ] **步骤 3：检查最终 Git 状态**

运行：`git status --short`

预期：只包含本次初始化相关变更；如果按计划逐步提交，则工作区应仅剩未提交的补充改动或为空。

- [ ] **步骤 4：提交验证后的最终变更**

```bash
git add .
git commit -m "chore: verify portfolio bootstrap setup"
```
