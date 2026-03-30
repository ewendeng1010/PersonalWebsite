# 作品集项目初始化设计

## 背景

当前仓库已经包含需求文档 `PRD.md`、`TECH_DESIGN.md` 和 `AGENT.md`，同时 Git 历史中还保留了一版旧的静态网站实现。本次变更的批准范围仅限于项目初始化：在当前仓库中搭建 React + TypeScript + Vite 工程，安装并配置 Tailwind CSS，并按文档要求建立基础源码结构。本次不包含作品集页面内容实现，也不包含旧静态站点向 React 的迁移。

## 目标

- 在当前仓库根目录初始化 React、TypeScript 与 Vite 项目。
- 安装并配置 Tailwind CSS，使其可直接用于应用开发。
- 建立 `TECH_DESIGN.md` 中定义的 `src/components` 与 `src/data` 基础目录结构。
- 添加最小可运行的占位组件和数据文件，确保项目可以顺利构建，并为后续页面开发提供稳定入口。

## 非目标

- 不实现最终作品集页面 UI。
- 不将原有 `index.html`、`script.js`、`styles.css` 迁移到 React。
- 当前阶段不引入路由，除非后续需求明确需要。
- 当前阶段不安装 `Framer Motion` 之类尚未使用的可选运行时依赖。

## 推荐方案

使用 Vite 官方 React + TypeScript 模板作为项目基础，再手动安装和配置 Tailwind CSS。这样既能与当前技术设计保持一致，也能避免引入不必要的依赖，为后续页面设计和动画扩展保留干净、易维护的起点。

## 备选方案

### 1. 使用 Vite 初始化 React + TypeScript，并手动接入 Tailwind

推荐方案。它与当前技术设计最一致，结构简单清晰，也最适合作为后续作品集开发的基础工程。

### 2. 初始化 Vite 时顺便安装 React Router

当前阶段不推荐。现有 PRD 更接近单页作品集体验，过早加入路由会增加额外文件、依赖和决策成本，但暂时没有实际收益。

### 3. 初始化时同步把旧静态站点改造成 React

当前阶段不推荐。这样会把“项目搭建”和“界面迁移”两件事混在一起，增加验证成本，也会模糊本次交付边界。

## 项目结构

初始化后的源码层级应至少包含以下内容：

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

`App.tsx` 负责按顺序装配这些占位区块。各组件使用简单的函数式组件形式实现，并在必要处添加简短注释。数据文件导出最小但合法的类型化数组，确保后续扩展方便且项目当前可正常构建。

## 样式策略

- 使用 Tailwind CSS 作为主要样式方案。
- 初始化阶段只需提供足以验证 Tailwind 已正确接入的基础样式。
- `PRD.md` 和 `AGENT.md` 中要求的深色主题视觉细节，放到后续专门的 UI 实现阶段处理，而不是在本次初始化中完成。

## 数据流

- `src/data/projects.ts` 用于存放项目占位数据。
- `src/data/skills.ts` 用于存放技能占位数据。
- 当前阶段由展示组件直接导入这些数组即可。
- 这种方式既符合“数据存储在 TypeScript 文件中”的要求，也方便后续快速增删内容。

## 错误处理

- 初始化阶段运行时风险较低。
- 主要风险集中在依赖安装、Tailwind 配置和 TypeScript 导入错误。
- 这些问题可以通过初始化后的生产构建快速暴露出来。

## 测试与验证

- 依赖安装成功。
- 运行 `npm run build`。
- 确认生成的代码在接入 Tailwind 后仍能通过 TypeScript 和 Vite 构建。

## 实施说明

- 当前仓库的 Git 状态里仍显示旧静态文件已被删除，本次初始化不尝试恢复或迁移这些文件。
- 本次工作应以新增 React 工程脚手架为主，保持变更范围清晰。
- 生成的初始结构应尽量轻量，便于后续继续扩展。
