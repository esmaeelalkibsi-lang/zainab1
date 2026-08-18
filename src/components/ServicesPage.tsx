import { Link } from 'react-router-dom'
import NeonIcon, { type IconName } from './NeonIcon'

type Service = { icon: IconName; title: string; desc: string }

const services: Service[] = [
  {
    icon: 'design',
    title: 'تصميم واجهات المستخدم',
    desc: 'تصاميم عصرية وجذابة تعكس هوية علامتك التجارية وترتّب المحتوى لتجربة استخدام سلسة.',
  },
  {
    icon: 'code',
    title: 'تطوير المواقع',
    desc: 'برمجة مواقع سريعة وأمنة بأحدث التقنيات مع توافق كامل مع جميع المتصفحات والأجهزة.',
  },
  {
    icon: 'responsive',
    title: 'تصميم متجاوب',
    desc: 'مواقع تتكيف بشكل مثالي مع الجوال والتابلت والحاسوب لتقديم تجربة موحّدة ومريحة.',
  },
  {
    icon: 'store',
    title: 'متاجر إلكترونية',
    desc: 'بناء متاجر متكاملة مع بوابات دفع آمنة ولوحة تحكم سهلة لإدارة منتجاتك ومبيعاتك.',
  },
  {
    icon: 'seo',
    title: 'تحسين محركات البحث',
    desc: 'تحسين بنية الموقع ومحتواه ليظهر في النتائج الأولى على Google ويجذب المزيد من الزوار.',
  },
  {
    icon: 'hosting',
    title: 'استضافة وصيانة',
    desc: 'استضافة مستقرة وآمنة مع صيانة دورية ونسخ احتياطي يحافظ على عمل موقعك دون انقطاع.',
  },
]

export default function ServicesPage() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
      <div className="text-center mb-14 space-y-3">
        <span className="text-[#0066FF] text-sm font-bold tracking-widest uppercase">خدماتنا</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A]">حلول رقمية متكاملة لنمو مشروعك</h2>
        <p className="text-[#64748B] max-w-2xl mx-auto">نقدّم باقة شاملة من الخدمات الرقمية التي تغطّي رحلتك من الفكرة حتى الإطلاق وما بعده.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card-base card-hover rounded-2xl p-6 flex items-start gap-4">
            <NeonIcon name={s.icon} size="md" />
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-[#0F172A]">{s.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/"
          className="btn-outline px-7 py-3.5 rounded-xl font-bold text-[#1E293B] hover:text-[#0066FF] transition inline-flex items-center gap-2"
        >
          <i className="fa-solid fa-arrow-right text-xs"></i>
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </section>
  )
}
