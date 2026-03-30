const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于我", href: "#about" },
  { label: "项目", href: "#projects" },
  { label: "联系", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="text-sm font-semibold tracking-[0.3em] text-white" href="#hero">
          EWEN
        </a>
        <nav className="flex flex-wrap justify-end gap-4 text-sm text-white/70">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
