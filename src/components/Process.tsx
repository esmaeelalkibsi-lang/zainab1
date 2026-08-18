const steps = [
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'الاستكشاف والتحليل الرقمي',
    desc: 'نستمع لأفكارك وأهدافك بتمعن، ونحلل متطلبات السوق لبناء خارطة طريق استراتيجية وواضحة لمشروعك.',
  },
  {
    icon: 'fa-pen-ruler',
    title: 'التصميم وتجربة المستخدم',
    desc: 'نبتكر واجهات تفاعلية تعكس هوية علامتك التجارية، ونشاركك معاينة حية للتصميم واختبار تجربة المستخدم قبل التنفيذ.',
  },
  {
    icon: 'fa-code',
    title: 'التطوير والبرمجة الحديثة',
    desc: 'نترجم التصاميم إلى موقع حي وتفاعلي بأحدث التقنيات البرمجية، مع مراعاة أقصى درجات السرعة، الأداء، والأمان.',
  },
  {
    icon: 'fa-rocket',
    title: 'الإطلاق والدعم المستمر',
    desc: 'نطلق موقعك للعالم بثقة، ونوفر دعماً فنياً مستمراً وصيانة دورية لضمان استمرارية نجاح وتطور مشروعك.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#0066FF] text-sm font-bold tracking-widest uppercase">كيف نعمل</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">رحلة تحويل أفكارك إلى واقع رقمي</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">أربع خطوات واضحة نقودك فيها من الفكرة الأولى حتى إطلاق مشروعك ونموّه.</p>
        </div>

        <div className="relative pr-8 md:pr-14">
          {/* Vertical glowing line on the right */}
          <div
            className="absolute top-3 bottom-3 right-2 md:right-3 w-[3px] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #0066FF 0%, #00B8D9 50%, #0066FF 100%)',
              boxShadow: '0 0 8px rgba(0, 102, 255, 0.4), 0 0 18px rgba(0, 184, 217, 0.35)',
            }}
          />

          <ol className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <li key={idx} className="relative pr-6 md:pr-10 animate-fade-up" style={{ animationDelay: `${idx * 120}ms` }}>
                <div className="card-base card-hover rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
