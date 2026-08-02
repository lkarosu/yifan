export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: '潮汐 · 旅行灵感平台',
    description: '以沉浸式内容帮助旅行者发现下一段值得出发的旅程。',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    href: 'https://github.com/',
  },
  {
    title: 'Forms · 团队协作工具',
    description: '为创意团队打造的任务、文档与进度管理工作台。',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    tags: ['Next.js', 'PostgreSQL', 'Motion'],
    href: 'https://github.com/',
  },
  {
    title: 'Echo · 音乐探索应用',
    description: '用个性化推荐与可视化播放列表，让发现音乐变得轻松。',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85',
    tags: ['React', 'API Design', 'UI/UX'],
    href: 'https://github.com/',
  },
]
