import { useState } from 'react'
import { Link } from 'react-router-dom'

type Status = 'idle' | 'loading' | 'success' | 'error'

const WHATSAPP_NUMBER = '779214736'
const CONTACT_EMAIL = 'top.web.ye@outlook.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildWhatsAppLink = () => {
    const lines = [
      `الاسم: ${form.name.trim()}`,
      `الواتساب: ${form.phone.trim()}`,
      `تفاصيل المشروع: ${form.message.trim()}`,
    ].filter(Boolean)
    const text = encodeURIComponent(lines.join('\n'))
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  }

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`طلب جديد من ${form.name.trim()}`)
    const body = encodeURIComponent(
      [
        `الاسم: ${form.name.trim()}`,
        `الواتساب: ${form.phone.trim()}`,
        `تفاصيل المشروع: ${form.message.trim()}`,
      ].join('\n')
    )
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const formValid = form.name.trim() && form.phone.trim() && form.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValid) return
    setStatus('loading')
    setErrorMsg('')
    window.open(buildWhatsAppLink(), '_blank')
    setStatus('success')
  }

  const handleEmailSubmit = () => {
    if (!formValid) return
    window.location.href = buildMailtoLink()
  }

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10 space-y-3">
        <span className="text-[#0066FF] text-sm font-bold tracking-widest uppercase">تواصل معنا</span>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] leading-snug max-w-3xl mx-auto">
          املأ النموذج واضغط تواصل عبر الواتساب ليصلك رد سريع مباشرة على هاتفك
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <form onSubmit={handleSubmit} className="lg:col-span-2 card-base rounded-2xl p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[#1E293B] font-medium">الاسم الكامل</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك"
              className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#1E293B] font-medium">
              رقم الواتساب <span className="text-[#14B8A6]">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+967 ..."
              className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition"
            />
            <p className="text-xs text-[#94A3B8]">سنستخدم هذا الرقم للتواصل معك مباشرة عبر الواتساب.</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#1E293B] font-medium">تفاصيل المشروع</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="أخبرنا عن فكرتك وأهدافك..."
              className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 bg-[#25D366] hover:bg-[#1ebe57] text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <><i className="fa-solid fa-spinner fa-spin"></i> جارٍ الإرسال...</>
              ) : (
                <><i className="fa-brands fa-whatsapp text-lg"></i> تواصل عبر الواتساب</>
              )}
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              disabled={!formValid}
              className="flex-1 btn-primary text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-envelope text-xs"></i> إرسال الطلب عبر البريد
            </button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-[#14B8A6] text-sm bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-xl px-4 py-3">
              <i className="fa-solid fa-circle-check"></i>
              <span>تم فتح محادثة الواتساب بنجاح! تواصل معنا مباشرة لإكمال طلبك.</span>
            </div>
          )}
        </form>

        <div className="card-base rounded-2xl p-6 space-y-5 flex flex-col justify-center">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#1E293B] hover:text-[#25D366] transition group"
            >
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/10 transition">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8]">واتساب مباشر</p>
                <span dir="ltr" className="text-sm">+967 779 214 736</span>
              </div>
            </a>
            <div className="flex items-center gap-3 text-[#1E293B]">
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#0066FF] shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8]">البريد الإلكتروني</p>
                <span dir="ltr" className="text-sm">top.web.ye@outlook.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#1E293B]">
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#0066FF] shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs text-[#94A3B8]">العنوان</p>
                <span className="text-sm">اليمن</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-l from-transparent via-[#0066FF]/20 to-transparent"></div>

          <div className="flex gap-2 justify-center">
            {[
              { icon: 'fa-instagram', label: 'إنستغرام' },
              { icon: 'fa-x-twitter', label: 'إكس (تويتر)' },
              { icon: 'fa-linkedin-in', label: 'لينكدإن' },
              { icon: 'fa-whatsapp', label: 'واتساب' },
            ].map(({ icon, label }) => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 rounded-xl badge flex items-center justify-center text-[#64748B] hover:text-[#0066FF] transition"
                aria-label={label}
              >
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0066FF] hover:text-[#0050CC] font-bold transition"
        >
          <i className="fa-solid fa-arrow-right text-xs"></i>
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </section>
  )
}
