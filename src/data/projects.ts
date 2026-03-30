export interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

// 占位项目数据，后续可以直接替换为真实作品。
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
