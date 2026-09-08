import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'
import Icon from './Icon'
import type { IconName } from './Icon'

type Status = 'idle' | 'loading' | 'success' | 'error'

const WHATSAPP_NUMBER = '779214736'
const CONTACT_EMAIL = 'top.web.ye@outlook.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const submitMagnetic = useMagnetic<HTMLButtonElement>(0.3)
  const emailMagnetic = useMagnetic<HTMLButtonElement>(0.3)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildWhatsAppLink = () => {
    const lines = [`الاسم: ${form.name.trim()}`, `الواتساب: ${form.phone.trim()}`, `تفاصيل المشروع: ${form.message.trim()}`].filter(Boolean)
    const text = encodeURIComponent(lines.join('\n'))
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  }

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`طلب جديد من ${form.name.trim()}`)
    const body = encodeURIComponent([`الاسم: ${form.name.trim()}`, `الواتساب: ${form.phone.trim()}`, `تفاصيل المشروع: ${form.message.trim()}`].join('\n'))
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const formValid = form.name.trim() && form.phone.trim() && form.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValid) return
    setStatus('loading')
    window.open(buildWhatsAppLink(), '_blank')
    setStatus('success')
  }

  const handleEmailSubmit = () => {
    if (!formValid) return
    window.location.href = buildMailtoLink()
  }

  return (
    <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 space-y-3"
      >
        <span className="section-label">تواصل معنا</span>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1E232C] leading-snug max-w-3xl mx-auto">
          املأ النموذج واضغط تواصل عبر الواتساب ليصلك رد سريع مباشرة على هاتفك
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 card-base rounded-2xl p-6 space-y-4"
        >
          <div className="space-y-1.5">
            <label className="text-sm text-[#2D3540] font-medium">الاسم الكامل</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="أدخل اسمك" className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#2D3540] font-medium">رقم الواتساب <span className="text-[#B86B38]">*</span></label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+967 ..." className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition" />
            <p className="text-xs text-[#9CA8B8]">سنستخدم هذا الرقم للتواصل معك مباشرة عبر الواتساب.</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-[#2D3540] font-medium">تفاصيل المشروع</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="أخبرنا عن فكرتك وأهدافك..." className="w-full input-base rounded-xl px-4 py-3 focus:outline-none transition resize-none" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="submit" disabled={status === 'loading'} ref={submitMagnetic.ref} onMouseMove={submitMagnetic.onMouseMove} onMouseLeave={submitMagnetic.onMouseLeave} className="flex-1 btn-accent text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 disabled:opacity-60 magnetic-btn">
              {status === 'loading' ? (
                <><Icon name="spinner" spin className="w-4 h-4" /> جارٍ الإرسال...</>
              ) : (
                <><Icon name="whatsapp" className="w-4 h-4" /> تواصل عبر الواتساب</>
              )}
            </button>
            <button type="button" onClick={handleEmailSubmit} disabled={!formValid} ref={emailMagnetic.ref} onMouseMove={emailMagnetic.onMouseMove} onMouseLeave={emailMagnetic.onMouseLeave} className="flex-1 btn-primary text-white py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed magnetic-btn">
              <Icon name="envelope" className="w-3 h-3" /> إرسال الطلب عبر البريد
            </button>
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-[#B86B38] text-sm bg-[#B86B38]/10 border border-[#B86B38]/30 rounded-xl px-4 py-3">
              <Icon name="circle-check" className="w-4 h-4 shrink-0" />
              <span>تم فتح محادثة الواتساب بنجاح! تواصل معنا مباشرة لإكمال طلبك.</span>
            </div>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-base rounded-2xl p-6 space-y-5 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <a href="https://wa.me/967779214736" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#2D3540] hover:text-[#25D366] transition group">
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/10 transition">
                <Icon name="whatsapp" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#9CA8B8]">واتساب مباشر</p>
                <span dir="ltr" className="text-sm">+967 779 214 736</span>
              </div>
            </a>
            <div className="flex items-center gap-3 text-[#2D3540]">
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1B3A5F] shrink-0">
                <Icon name="envelope" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#9CA8B8]">البريد الإلكتروني</p>
                <span dir="ltr" className="text-sm">top.web.ye@outlook.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[#2D3540]">
              <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1B3A5F] shrink-0">
                <Icon name="location-dot" className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#9CA8B8]">العنوان</p>
                <span className="text-sm">اليمن</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-l from-transparent via-[#1B3A5F]/20 to-transparent"></div>

          <div className="flex gap-2 justify-center">
            {[
              { icon: 'instagram' as IconName, label: 'إنستغرام' },
              { icon: 'x-twitter' as IconName, label: 'إكس (تويتر)' },
              { icon: 'linkedin' as IconName, label: 'لينكدإن' },
              { icon: 'whatsapp' as IconName, label: 'واتساب' },
              { icon: 'facebook' as IconName, label: 'فيسبوك', href: 'https://www.facebook.com/' },
            ].map(({ icon, label, href = '#' }) => (
              <a key={icon} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="w-9 h-9 rounded-xl badge flex items-center justify-center text-[#7B8598] hover:text-[#1B3A5F] transition" aria-label={label}>
                <Icon name={icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-[#1B3A5F] hover:text-[#B86B38] font-bold transition underline-grow">
          <Icon name="arrow-right" className="w-3 h-3" />
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </section>
  )
}
