import ServiceIcon, { type IconName } from '../components/ServiceIcon'

export interface Service {
  icon: IconName
  title: string
  desc: string
}

export const services: Service[] = [
  {
    icon: 'clock',
    title: 'متاح 24/7 بدون توقف',
    desc: 'يجعل عملائك يجدون معلوماتك وخدماتك في أي وقت ومن أي مكان.',
  },
  {
    icon: 'shield',
    title: 'ثقة ومصداقية أكبر',
    desc: 'يمنح مشروعك هوية احترافية ويزيد ثقة العملاء بك قبل اتخاذ قرار الشراء.',
  },
  {
    icon: 'globe',
    title: 'الوصول إلى عملاء جدد',
    desc: 'يساعد العملاء الذين يبحثون عن خدماتك في Google على اكتشاف مشروعك بسهولة.',
  },
  {
    icon: 'home',
    title: 'امتلاكك لأصلك الرقمي الخاص',
    desc: 'بدل الاعتماد الكامل على منصات التواصل المتغيرة، امتلك مساحتك الخاصة باسم مشروعك.',
  },
  {
    icon: 'layers',
    title: 'واجهة واحدة تجمع كل شيء',
    desc: 'اعرض منتجاتك، خدماتك، صور أعمالك، موقعك، وطرق التواصل في صفحة واحدة منظمة.',
  },
  {
    icon: 'bolt',
    title: 'تجربة مستخدم سهلة وسريعة',
    desc: 'سرعة استجابة عالية وتصميم مريح يضمن بقاء الزائر وتحويله إلى زبون دائم.',
  },
]
