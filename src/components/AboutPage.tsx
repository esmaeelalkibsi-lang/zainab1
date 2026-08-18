import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

function CoinsGrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="8" cy="8" r="5" />
      <path d="M18.5 5.5 15 9l-2-2" />
      <path d="M18.5 5.5v4h-4" />
      <path d="M8 13v3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1" opacity="0" />
    </svg>
  )
}

function PuzzleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 2 12c0-.617.236-1.234.706-1.704L4.317 8.685a.982.982 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.878.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.463.18-.893.527-.967 1.02Z" />
    </svg>
  )
}

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 14h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a9 9 0 0 1 18 0v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2" />
    </svg>
  )
}

const reasons: { title: string; desc: string; icon: ReactNode }[] = [
  {
    icon: <CoinsGrowthIcon />,
    title: 'أسعار تنافسية',
    desc: 'نقدم أفضل قيمة مقابل تكلفة تناسب ميزانيتك دون المساومة على الجودة.',
  },
  {
    icon: <PuzzleIcon />,
    title: 'حلول متكاملة',
    desc: 'مواقع متجاوبة وسريعة تبرز علامتك التجارية وتجذب عملاءك المستهدفين.',
  },
  {
    icon: <HeadphonesIcon />,
    title: 'دعم وتواصل مباشر',
    desc: 'نرافقك خطوة بخطوة من الفكرة وحتى إطلاق موقعك بنجاح.',
  },
]

export default function AboutPage() {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight">من نحن</h2>
      </div>

      <div className="card-base rounded-2xl p-8">
        <p className="text-[#1E293B] leading-loose text-base lg:text-lg text-center">
          نحن في Top Web فريق متخصص في تصميم وتطوير مواقع الويب الحديثة والمتاجر الرقمية. انطلقنا برؤية جديدة تهدف إلى مساعدة أصحاب المشاريع والشركات على بناء حضور رقمي قوي واحترافي.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] text-center mb-8">لماذا تختارنا؟</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="card-base rounded-2xl p-6 space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl badge flex items-center justify-center text-[#0066FF] mx-auto">
                {r.icon}
              </div>
              <h4 className="text-lg font-bold text-[#0F172A]">{r.title}</h4>
              <p className="text-[#64748B] leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="btn-primary text-white px-8 py-4 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <i className="fa-solid fa-arrow-right text-xs"></i>
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </section>
  )
}
