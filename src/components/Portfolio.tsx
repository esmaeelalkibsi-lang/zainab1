const projects = [
  {
    title: 'موقع متجر مستلزمات تجميل وعناية',
    tag: '',
    img: '/z2 copy copy.webp',
    width: 800,
    height: 1624,
    href: 'https://share.google/9xsEJEsWDNhRQloEG'
  },
  {
    title: 'موقع صيدلية',
    tag: '',
    img: '/z1.webp',
    width: 800,
    height: 1624,
    href: 'https://web-page-generation-tsmu.bolt.host/',
  },
  {
    title: 'موقع متجر خدمات إلكترونية',
    tag: '',
    img: '/83af8b62-f44d-4a8c-9248-7222f43fea7f copy.webp',
    width: 800,
    height: 1781,
    href: 'https://corporate-it-solutio-nzuo.bolt.host',
  },
]

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-5 max-w-[400px] mx-auto w-full">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 no-underline"
        >
          <div className="w-full h-[220px] overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              width={p.width}
              height={p.height}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 text-right space-y-1">
            {p.tag && <span className="block text-[#0066FF] text-sm font-semibold">{p.tag}</span>}
            <h3 className="text-xl font-bold text-[#1a1a1a] my-2">{p.title}</h3>
          </div>
        </a>
      ))}
    </div>
  )
}
