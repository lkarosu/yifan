const navigation = [
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="主导航">
        <a href="#home" className="text-lg font-bold tracking-tight">杨艺帆 · Portfolio</a>
        <div className="flex items-center gap-5 text-sm text-zinc-400 sm:gap-7">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
