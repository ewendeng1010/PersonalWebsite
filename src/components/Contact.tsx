const contactLinks = [
  { label: "邮箱", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "社交媒体", href: "https://x.com" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">联系方式</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
          当前先提供可点击的占位联系方式，后续可以直接替换为你的真实邮箱、GitHub 和社交主页。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300 hover:text-cyan-200"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
