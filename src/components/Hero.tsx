export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.18),transparent_32%)]"
      />
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
