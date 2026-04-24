# Hero Component Implementation Plan

> **Requirements for Executing Agent:** Must use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute step-by-step tasks. This plan uses `- [ ]` checkboxes to track steps.

**Goal:** Implement a Hero component featuring a large heading, a brief introduction, and an alphabetical avatar, styled with Tailwind CSS for a dark theme and gradient visuals.

**Architecture:** First, set up the minimal viable component testing pipeline for the current Vite + React project. Then, use tests to constrain the core structure of the Hero component. Finally, use Tailwind CSS within the component to achieve the initial screen layout, gradient text, glowing avatar, and responsive typography. Only modify Hero-related implementations and necessary test configurations; do not expand to other sections.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS v4, Vitest, Testing Library, jsdom

---

## File Structure Mapping

- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/components/Hero.test.tsx`
- Modify: `src/components/Hero.tsx`

### Task 1: Supplement Hero Component Testing Pipeline

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Verify the current project lacks a test command**
  Run: `npm run test`
  Expected: Failure with a message indicating the missing `test` script.

- [ ] **Step 2: Install testing dependencies**
  Run: `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`
  Expected: Testing dependencies added to `package.json`.

- [ ] **Step 3: Add a test script to the project**
  Adjust `package.json`'s `scripts` to:
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

- [ ] **Step 4: Integrate Vitest environment into Vite configuration**
  Adjust `vite.config.ts` to:
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

- [ ] **Step 5: Create test initialization file**
  Create `src/test/setup.ts`:
  ```ts
  import "@testing-library/jest-dom/vitest";
  ```

- [ ] **Step 6: Run the test command to confirm the environment is ready**
  Run: `npm run test`
  Expected: The command should now launch Vitest. It will either finish with 0 tests due to the absence of test files or be ready for the next step of test writing.

### Task 2: Write Hero Structure Tests First, Then Implement the Component

**Files:**
- Create: `src/components/Hero.test.tsx`
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Write Failing Tests for Hero First**

Create `src/components/Hero.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders a headline, intro copy, and initial avatar", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /Combine ideas, designs, and front-end implementation into a memorable personal portfolio/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Showcasing my personal introduction, project experience, and continuously refined digital works/i),
    ).toBeInTheDocument();

    expect(screen.getByText("EW")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run Unit Tests and Confirm They Fail Initially**

Run: `npm run test -- src/components/Hero.test.tsx`

Expected: Failure, because the current `Hero.tsx` does not yet render this new set of headline and introductory copy.

- [ ] **Step 3: Make the Tests Pass with Minimal Implementation**

Adjust `src/components/Hero.tsx` to:

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
              Combine ideas, designs, and front-end implementation into a
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                memorable personal portfolio
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Showcasing my personal introduction, project experience, and continuously refined digital works, this also serves as the homepage entry for future case studies, articles, and experimental pages.
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

- [ ] **Step 4: Run Unit Tests and Confirm They Pass**

Run: `npm run test -- src/components/Hero.test.tsx`

Expected: Pass, with only the assertions within this test file being effective.

### Task 3: Full Verification of Hero Changes

**Files:**
- Verify: `src/components/Hero.tsx`
- Verify: `src/components/Hero.test.tsx`
- Verify: `vite.config.ts`
- Verify: `package.json`

- [ ] **Step 1: Run Full Tests**

Run: `npm run test`

Expected: All tests pass.

- [ ] **Step 2: Run ESLint**

Run: `npm run lint`

Expected: No ESLint errors.

- [ ] **Step 3: Run Production Build**

Run: `npm run build`

Expected: Vite build succeeds, TypeScript compilation passes.

- [ ] **Step 4: Check Git Change Scope**

Run: `git status --short`

Expected: Only changes related to the current Hero and test pipeline appear.