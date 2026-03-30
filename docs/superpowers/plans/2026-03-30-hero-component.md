# Hero 组件实施计划

> **给执行型 agent 的要求：** 必须使用 `superpowers:subagent-driven-development`（推荐）或 `superpowers:executing-plans` 按任务逐步执行。本计划使用 `- [ ]` 复选框跟踪步骤。

**目标：** 实现一个包含大标题、简介和字母头像的 Hero 组件，并用 Tailwind CSS 完成深色主题与渐变视觉。

**架构：** 先为当前 Vite + React 项目补上最小可用的组件测试链路，再通过测试先行约束 Hero 的核心结构，最后用 Tailwind 在组件内部完成首屏布局、渐变文字、发光头像与响应式排版。只修改 Hero 相关实现和必要的测试配置，不扩大到其他区块。

**技术栈：** React、TypeScript、Vite、Tailwind CSS v4、Vitest、Testing Library、jsdom

---

## 文件结构映射

- 修改：`package.json`
- 修改：`package-lock.json`
- 修改：`vite.config.ts`
- 创建：`src/test/setup.ts`
- 创建：`src/components/Hero.test.tsx`
- 修改：`src/components/Hero.tsx`

### 任务 1：补充 Hero 组件测试链路

**文件：**
- 修改：`package.json`
- 修改：`package-lock.json`
- 修改：`vite.config.ts`
- 创建：`src/test/setup.ts`

- [ ] **步骤 1：先验证当前项目还没有测试命令**

运行：`npm run test`

预期：失败并提示缺少 `test` 脚本。

- [ ] **步骤 2：安装测试依赖**

运行：`npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`

预期：`package.json` 中新增测试依赖。

- [ ] **步骤 3：为项目加入测试脚本**

将 `package.json` 的 `scripts` 调整为：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "test": "vitest run",
    "preview": "vite preview"
  }
}
```

- [ ] **步骤 4：在 Vite 配置中加入 Vitest 环境**

将 `vite.config.ts` 调整为：

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },
});
```

- [ ] **步骤 5：创建测试初始化文件**

创建 `src/test/setup.ts`：

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **步骤 6：运行测试命令确认环境已就绪**

运行：`npm run test`

预期：此时命令能启动 Vitest，并因为还没有测试文件而以 0 个测试结束，或准备进入下一步测试编写。

### 任务 2：先写 Hero 结构测试，再实现组件

**文件：**
- 创建：`src/components/Hero.test.tsx`
- 修改：`src/components/Hero.tsx`

- [ ] **步骤 1：先写 Hero 的失败测试**

创建 `src/components/Hero.test.tsx`：

```tsx
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders a headline, intro copy, and initial avatar", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /把想法、设计与前端实现组合成一个有记忆点的个人作品集/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/这里展示我的个人介绍、项目经验和持续打磨中的数字作品/i),
    ).toBeInTheDocument();

    expect(screen.getByText("EW")).toBeInTheDocument();
  });
});
```

- [ ] **步骤 2：运行单测并确认它先失败**

运行：`npm run test -- src/components/Hero.test.tsx`

预期：失败，原因是当前 `Hero.tsx` 还没有渲染这组新标题和简介。

- [ ] **步骤 3：用最小实现让测试通过**

将 `src/components/Hero.tsx` 调整为：

```tsx
export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.18),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Designer · Developer · Story Builder
          </p>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              把想法、设计与前端实现组合成一个
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                有记忆点的个人作品集
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              这里展示我的个人介绍、项目经验和持续打磨中的数字作品，也作为后续扩展案例、文章与实验页面的首页入口。
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-[0_0_120px_rgba(34,211,238,0.16)]">
            <div className="absolute inset-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
            <span className="relative text-6xl font-semibold tracking-[0.2em] text-white">
              EW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **步骤 4：运行单测确认通过**

运行：`npm run test -- src/components/Hero.test.tsx`

预期：通过，且只有该测试文件中的断言生效。

### 任务 3：完整验证 Hero 改动

**文件：**
- 验证：`src/components/Hero.tsx`
- 验证：`src/components/Hero.test.tsx`
- 验证：`vite.config.ts`
- 验证：`package.json`

- [ ] **步骤 1：运行完整测试**

运行：`npm run test`

预期：全部测试通过。

- [ ] **步骤 2：运行 ESLint**

运行：`npm run lint`

预期：无 ESLint 报错。

- [ ] **步骤 3：运行生产构建**

运行：`npm run build`

预期：Vite 构建成功，TypeScript 编译通过。

- [ ] **步骤 4：检查 Git 变更范围**

运行：`git status --short`

预期：只出现本次 Hero 和测试链路相关变更。
