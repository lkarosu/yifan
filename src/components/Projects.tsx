import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-medium tracking-[0.2em] text-violet-300">SELECTED WORK</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">近期项目</h2></div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">从需求梳理到功能落地的真实个人项目。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-violet-300/50">
              <img className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" src={project.image} alt={`${project.title} 项目封面`} loading="lazy" />
              <div className="p-6"><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-xs text-violet-200">{tag}</span>)}</div><div className="mt-6 flex gap-4"><a className="inline-flex text-sm font-medium text-white underline decoration-violet-400 underline-offset-4 transition hover:text-violet-300" href={project.liveHref} target="_blank" rel="noreferrer">在线体验 ↗</a><a className="inline-flex text-sm font-medium text-zinc-400 transition hover:text-white" href={project.href} target="_blank" rel="noreferrer">查看源码 →</a></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
