# Hero Component Implementation Plan

> **Requirement for execution agents:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute tasks step‑by‑step. This plan tracks steps with `- [ ]` checkboxes.

**Goal:** Implement a Hero component that includes a main heading, an introduction, and an alphabet avatar, and style it with Tailwind CSS for a dark theme and gradient visuals.

**Architecture:** First add the minimal usable component test pipeline to the current Vite + React project, then use tests to constrain the core structure of the Hero component, and finally use Tailwind inside the component to achieve the above‑the‑fold layout, gradient text, glowing avatar, and responsive typography. Only modify Hero‑related implementation and the necessary test configuration; do not affect other parts of the codebase.

**Tech stack:** React, TypeScript, Vite, Tailwind CSS v4, Vitest, Testing Library, jsdom

---

## File‑Structure Mapping

- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/components/Hero.test.tsx`
- Modify: `src/components/Hero.tsx`

### Task 1: Add the Hero Component Test Pipeline

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Verify that the current project has no test command**

Run: `npm run test`

Expected: Failure with a message that the `test` script is missing.

- [ ] **Step 2: Install testing dependencies**

Run: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`

Expected: Testing dependencies are added to `package.json`.

- [ ] **Step 3: Add a test script to the project**

Update the `scripts` section of `package.json` to:

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

- [ ] **Step 4: Add Vitest configuration to Vite**

Modify `vite.config.ts` to:

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

- [ ] **Step 5: Create the test setup file**

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 6: Run the test command to confirm the environment is ready**

Run: `npm run test`

Expected: The command starts Vitest and finishes with 0 tests (since no test files exist yet), or is ready for the next test writing step.

### Task 2: Write Hero Structure Tests First, Then Implement the Component

**Files:**
- Create: `src/components/Hero.test.tsx`
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Write a failing test for Hero**

Create `src/components/Hero.test.tsx`:

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

- [ ] **Step 2: Run the test and confirm it fails**

Run: `npm run test -- src/components/Hero.test.tsx`

Expected: Failure because the current `Hero.tsx` does not render the new heading and introduction.

- [ ] **Step 3: Implement the minimal code to make the test pass**

Update `src/components/Hero.tsx` to:

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

- [ ] **Step 4: Run the test again to confirm it passes**

Run: `npm run test -- src/components/Hero.test.tsx`

Expected: Pass, with only the assertions in this test file being evaluated.

### Task 3: Full Verification of Hero Changes

**Files:**
- Verify: `src/components/Hero.tsx`
- Verify: `src/components/Hero.test.tsx`
- Verify: `vite.config.ts`
- Verify: `package.json`

- [ ] **Step 1: Run the full test suite**

Run: `npm run test`

Expected: All tests pass.

- [ ] **Step 2: Run ESLint**

Run: `npm run lint`

Expected: No ESLint errors.

- [ ] **Step 3: Run a production build**

Run: `npm run build`

Expected: Vite builds successfully and TypeScript compiles without errors.

- [ ] **Step 4: Check the Git change scope**

Run: `git status --short`

Expected: Only changes related to the Hero component and its test pipeline appear.