import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '967779214736'
const PHONE_NUMBER = '+967779214736'
const EMAIL = 'top.web.ye@outlook.com'
const FACEBOOK_PAGE = 'https://www.facebook.com/'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#1B3A5F]/15 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="flex items-center gap-3">
            <img src="/top-web-logo.png" alt="TOP WEB" loading="lazy" className="h-[76px] w-auto object-contain" />
            <div>
              <h3 className="text-lg font-extrabold tracking-wider text-[#1E232C]">TOP WEB</h3>
              <p className="text-[10px] text-[#7B8598]">نصمم. نبتكر. ننجح معك</p>
            </div>
          </div>

          <p className="text-[#7B8598] text-sm text-center">
            تصميم وتطوير مواقع إلكترونية احترافية تعكس هوية مشروعك وترفع من مبيعاتك.
          </p>

          <div className="flex justify-center md:justify-end gap-4">
            {[
              { icon: 'whatsapp' as const, label: 'واتساب', href: `https://wa.me/${WHATSAPP_NUMBER}` },
              { icon: 'facebook' as const, label: 'فيسبوك', href: FACEBOOK_PAGE },
            ].map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl badge flex items-center justify-center text-[#7B8598] hover:text-[#1B3A5F] transition"
                aria-label={label}
              >
                <Icon name={icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-base rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="التواصل عبر واتساب" className="flex items-center gap-3 text-[#2D3540] hover:text-[#25D366] transition group">
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/10 transition">
              <Icon name="whatsapp" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#9CA8B8]">واتساب مباشر</p>
              <span dir="ltr" className="text-sm">+967 779 214 736</span>
            </div>
          </a>

          <a href={`mailto:${EMAIL}`} aria-label="إرسال بريد إلكتروني" className="flex items-center gap-3 text-[#2D3540] hover:text-[#1B3A5F] transition group">
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1B3A5F] shrink-0 group-hover:bg-[#1B3A5F]/10 transition">
              <Icon name="envelope" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#9CA8B8]">البريد الإلكتروني</p>
              <span dir="ltr" className="text-sm">{EMAIL}</span>
            </div>
          </a>

          <a href={`tel:${PHONE_NUMBER.replace('+', '')}`} aria-label="اتصال هاتفي" className="flex items-center gap-3 text-[#2D3540] hover:text-[#B86B38] transition group">
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#B86B38] shrink-0 group-hover:bg-[#B86B38]/10 transition">
              <Icon name="phone" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#9CA8B8]">اتصال هاتفي</p>
              <span dir="ltr" className="text-sm">+967 779 214 736</span>
            </div>
          </a>

          <a href={FACEBOOK_PAGE} target="_blank" rel="noopener noreferrer" aria-label="صفحة فيسبوك" className="flex items-center gap-3 text-[#2D3540] hover:text-[#1877F2] transition group">
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1877F2] shrink-0 group-hover:bg-[#1877F2]/10 transition">
              <Icon name="facebook" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#9CA8B8]">فيسبوك</p>
              <span className="text-sm">صفحتنا على فيسبوك</span>
            </div>
          </a>

          <div className="flex items-center gap-3 text-[#2D3540]">
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1B3A5F] shrink-0">
              <Icon name="location-dot" className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#9CA8B8]">العنوان</p>
              <span className="text-sm">اليمن</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#1B3A5F]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-[#9CA8B8] text-xs">
          © {new Date().getFullYear()} TOP WEB. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}

import Icon from './Icon'
