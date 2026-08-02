const contacts = [
  { label: 'Email', value: 'aliez.yang@foxmail.com', href: 'mailto:aliez.yang@foxmail.com' },
  { label: 'GitHub', value: 'github.com/lkarosu/', href: 'https://github.com/lkarosu' },
  { label: 'LinkedIn', value: 'linkedin.com/in/linyi', href: 'https://www.linkedin.com/' },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-cyan-500/10 p-8 sm:p-14">
        <p className="text-sm font-medium tracking-[0.2em] text-violet-200">LET'S WORK TOGETHER</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">有一个想法？让我们一起把它做出来。</h2><p className="mt-5 max-w-xl text-zinc-300">无论是全新产品、品牌网站，还是一次有趣的合作，欢迎随时和我聊聊。</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">{contacts.map((contact) => <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-white/30 hover:bg-black/30"><span className="block text-xs uppercase tracking-wider text-zinc-500">{contact.label}</span><span className="mt-1 block text-sm text-white">{contact.value}</span></a>)}</div>
      </div>
    </section>
  )
}
