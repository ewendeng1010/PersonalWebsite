import { projects } from "../data/projects";

function ProjectPreview({ name }: { name: string }) {
  return (
    <div
      aria-label={`${name} 项目截图预览`}
      className="relative min-h-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(15,23,42,0.88),rgba(14,116,144,0.28))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_rgba(2,8,23,0.34)]"
      role="img"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.16),transparent_30%)]"
      />

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
