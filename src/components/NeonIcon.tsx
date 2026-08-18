export type IconName = 'design' | 'code' | 'responsive' | 'store' | 'seo' | 'hosting' | 'chat' | 'rocket' | 'layers' | 'bolt' | 'shield' | 'support' | 'chart' | 'clock' | 'star' | 'lock' | 'sparkles'

type NeonIconProps = {
  name: IconName
  size?: 'sm' | 'md'
}

const paths: Record<IconName, JSX.Element> = {
  design: <><path d="M5 19 19 5" /><path d="m7 5 12 12" /><path d="m4 20 3-1 10-10-2-2L5 17l-1 3Z" /><path d="m14 6 2-2 4 4-2 2" /></>,
  code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
  responsive: <><rect x="3" y="4" width="14" height="10" rx="1.5" /><path d="M7 20h6M10 14v6M19 8h2v9h-5V8h3Z" /><path d="M18 10h2" /></>,
  store: <><path d="M4 10v9h16v-9" /><path d="M3 10 5 4h14l2 6" /><path d="M3 10a3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 2 0" /><path d="M8 19v-5h8v5" /></>,
  seo: <><path d="M4 19V9M9 19V5M14 19v-8M19 19V3" /><path d="m4 7 5-3 5 4 5-5" /></>,
  hosting: <><rect x="4" y="3" width="16" height="6" rx="1" /><rect x="4" y="15" width="16" height="6" rx="1" /><path d="M8 6h.01M8 18h.01M12 6h5M12 18h5" /></>,
  chat: <><path d="M20 11a7 7 0 0 1-7 7H8l-4 3v-6a7 7 0 1 1 16-4Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
  rocket: <><path d="M14 4c3-2 6-1 6-1s1 3-1 6l-6 6-4-4 5-7Z" /><path d="m9 11-3 1-2 3 5-1M13 15l-1 5 3-2 1-3" /><circle cx="16" cy="7" r="1" /></>,
  layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
  bolt: <><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13H3a2 2 0 0 0 2 2h1v-5H4M20 13h1a2 2 0 0 1-2 2h-1v-5h2M12 19h4" /></>,
  chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 3-4 3 2 5-7" /><circle cx="7" cy="15" r="1" /><circle cx="10" cy="11" r="1" /><circle cx="13" cy="13" r="1" /><circle cx="18" cy="6" r="1" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star: <><path d="m12 3 2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5l6.5-.5L12 3Z" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15" r="1" /></>,
  sparkles: <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /><path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" /></>,
}

export default function NeonIcon({ name, size = 'md' }: NeonIconProps) {
  return (
    <span className={`icon-box icon-box-${size}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  )
}
