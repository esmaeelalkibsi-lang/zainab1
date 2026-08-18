const WHATSAPP_NUMBER = '967779214736'
const PHONE_NUMBER = '+967779214736'
const EMAIL = 'top.web.ye@outlook.com'
const FACEBOOK_PAGE = 'https://www.facebook.com/'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#0066FF]/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <img src="/top-web-logo.webp" alt="TOP WEB" width={400} height={267} loading="lazy" className="h-[76px] w-auto object-contain" />
            <div>
              <h3 className="text-lg font-extrabold tracking-wider text-[#0F172A]">TOP WEB</h3>
              <p className="text-[10px] text-[#64748B]">نصمم. نبتكر. ننجح معك</p>
            </div>
          </div>

          <p className="text-[#64748B] text-sm text-center">
            تصميم وتطوير مواقع إلكترونية احترافية تعكس هوية مشروعك وترفع من مبيعاتك.
          </p>

          <div className="flex justify-center md:justify-end gap-3">
            {[
              { icon: 'fa-instagram', label: 'إنستغرام' },
              { icon: 'fa-x-twitter', label: 'إكس (تويتر)' },
              { icon: 'fa-linkedin-in', label: 'لينكدإن' },
              { icon: 'fa-whatsapp', label: 'واتساب' },
              { icon: 'fa-facebook-f', label: 'فيسبوك', href: FACEBOOK_PAGE },
            ].map(({ icon, label, href = '#' }) => (
              <a
                key={icon}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#64748B] hover:text-[#0066FF] transition"
                aria-label={label}
              >
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="card-base rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="التواصل عبر واتساب"
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

          <a
            href={`mailto:${EMAIL}`}
            aria-label="إرسال بريد إلكتروني"
            className="flex items-center gap-3 text-[#1E293B] hover:text-[#0066FF] transition group"
          >
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#0066FF] shrink-0 group-hover:bg-[#0066FF]/10 transition">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8]">البريد الإلكتروني</p>
              <span dir="ltr" className="text-sm">{EMAIL}</span>
            </div>
          </a>

          <a
            href={`tel:${PHONE_NUMBER.replace('+', '')}`}
            aria-label="اتصال هاتفي على الرقم +967 779 214 736"
            className="flex items-center gap-3 text-[#1E293B] hover:text-[#14B8A6] transition group"
          >
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#14B8A6] shrink-0 group-hover:bg-[#14B8A6]/10 transition">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8]">اتصال هاتفي</p>
              <span dir="ltr" className="text-sm">+967 779 214 736</span>
            </div>
          </a>

          <a
            href={FACEBOOK_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="صفحة فيسبوك"
            className="flex items-center gap-3 text-[#1E293B] hover:text-[#1877F2] transition group"
          >
            <div className="w-10 h-10 rounded-xl badge flex items-center justify-center text-[#1877F2] shrink-0 group-hover:bg-[#1877F2]/10 transition">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </div>
            <div>
              <p className="text-xs text-[#94A3B8]">فيسبوك</p>
              <span className="text-sm">صفحتنا على فيسبوك</span>
            </div>
          </a>

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
      </div>

      <div className="border-t border-[#0066FF]/5">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-[#94A3B8] text-xs">
          © {new Date().getFullYear()} TOP WEB. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
