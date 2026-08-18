import NeonIcon, { type IconName } from './NeonIcon'

const features: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'layers', title: 'تصميم فريد 100%', desc: 'كل مشروع مصمّم خصيصاً ليعكس هويتك دون قوالب جاهزة.' },
  { icon: 'bolt', title: 'أداء فائق السرعة', desc: 'مواقع محسّنة للسرعة تفتح في أقل من ثانيتين.' },
  { icon: 'shield', title: 'حماية وأمان', desc: 'حماية متقدمة من الاختراقات وشهادات SSL مجانية.' },
  { icon: 'support', title: 'دعم فني متواصل', desc: 'فريق دعم متاح للإجابة على استفساراتك في أي وقت.' },
  { icon: 'responsive', title: 'متجاوب تماماً', desc: 'تجربة استخدام مثالية على كل الأجهزة والشاشات.' },
  { icon: 'chart', title: 'تحسين SEO', desc: 'مواقع جاهزة لمحركات البحث لتتصدر نتائج Google.' },
]

const stats = [
  { value: '+120', label: 'مشروع منجز' },
  { value: '+95', label: 'عميل سعيد' },
  { value: '5★', label: 'تقييم العملاء' },
  { value: '+5', label: 'سنوات خبرة' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14 space-y-3">
        <span className="text-[#0066FF] text-sm font-bold tracking-widest uppercase">لماذا نحن؟</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">أسباب تجعلنا خيارك الأول</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto">نفرق عن غيرنا بالاهتمام بأدق التفاصيل والالتزام التام بتحقيق أهدافك.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {features.map((f) => (
          <div key={f.title} className="card-base card-hover rounded-2xl p-6 flex items-start gap-4">
            <NeonIcon name={f.icon} size="sm" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0F172A]">{f.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="card-base card-hover rounded-2xl p-6 text-center">
            <div className="text-3xl lg:text-4xl font-extrabold gradient-text">{s.value}</div>
            <div className="text-[#64748B] text-sm mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
