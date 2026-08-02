export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1fr_auto]">
        <div className="animate-[fade-up_700ms_ease-out_both]">
          <p className="mb-5 text-sm font-medium tracking-[0.2em] text-violet-300">DESIGN · DEVELOPMENT · STORYTELLING</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            把想法，<span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">变成值得体验</span>的作品。
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            你好，我是杨艺帆，一名专注于数字产品与交互体验的全栈开发者。我喜欢用清晰的设计和可靠的代码解决真实问题。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-violet-100">查看作品</a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-violet-300 hover:text-violet-200">联系我</a>
          </div>
        </div>
        <div className="relative mx-auto animate-[fade-up_900ms_ease-out_150ms_both]">
          <div className="absolute -inset-5 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400 opacity-40 blur-2xl" />
          <img className="relative h-56 w-56 rounded-full border border-white/20 object-cover sm:h-72 sm:w-72" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=720&q=85" alt="林一的头像" />
        </div>
      </div>
    </section>
  )
}
