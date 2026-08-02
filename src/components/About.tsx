import { skills } from '../data/skills'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-violet-300">ABOUT ME</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">好的体验，始于对细节的认真。</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-zinc-400">我相信技术的价值不止是实现功能，更在于让人们更自然地完成目标。从策略、视觉到前端落地，我一直在寻找简洁、好用且有温度的表达方式。</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
