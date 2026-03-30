import { skills } from "../data/skills";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">关于我</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
          这里会放置更完整的个人介绍和技能概览。当前先用类型化数据和独立组件把信息结构搭好，方便后续继续扩展真实内容。
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
