export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  liveHref: string
}

export const projects: Project[] = [
  {
    title: 'TodoFlow · 待办管理应用',
    description: '一个用于清晰安排、专注完成的待办管理应用，支持任务统计、搜索筛选、优先级、分类与截止日期管理。',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=85',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vitest'],
    href: 'https://github.com/lkarosu/TodoFlow',
    liveHref: 'https://todo-flow-beta.vercel.app',
  },
  {
    title: '天气查询 · OpenWeather',
    description: '基于 OpenWeather 的天气查询工具，支持城市搜索、当前位置定位、常用地点收藏，以及天气预报查看。',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=85',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS', 'Vitest'],
    href: 'https://github.com/lkarosu/weather-openweather',
    liveHref: 'https://weather-openweather.vercel.app',
  },
]
