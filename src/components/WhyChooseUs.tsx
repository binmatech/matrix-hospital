import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  UserCheck, 
  Cpu, 
  FlaskConical, 
  Smile, 
  DollarSign, 
  ShieldCheck, 
  Award,
  CircleCheck 
} from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      title: '24/7 Emergency Care',
      desc: 'Our trauma and emergency doors never close. Staffed by dynamic emergency consultants and fully-equipped resuscitation equipment.',
      icon: HeartHandshake,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      title: 'Experienced Medical Specialists',
      desc: 'Our medical panel comprises highly trained consultants representing general surgery, internal medicine, OBGYN, and pediatric fields.',
      icon: UserCheck,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      title: 'Modern Medical Equipment',
      desc: 'Investments in high-resolution obstetric scans, digitized electrocardiogram monitors, sterile surgical suites, and advanced diagnostics.',
      icon: Cpu,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Fast Laboratory Results',
      desc: 'Our automated diagnostic lab features high-precision assay devices that deliver secure, rapid, and flawless test assessments.',
      icon: FlaskConical,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Patient-Centered Care',
      desc: 'We map outpatient and inpatient programs around your comfort, respecting privacy, feedback, and safe physical recovery.',
      icon: Smile,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Affordable Healthcare',
      desc: 'Transparent medical accounts and consultation costs with complete coverage supported by major national HMO networks.',
      icon: DollarSign,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      title: 'Safe & Comfortable Environment',
      desc: 'Hospital rooms features comfortable layouts, strict hygiene controls, security cameras, and constant standby backup power grid.',
      icon: ShieldCheck,
      color: 'bg-violet-50 text-violet-600 border-violet-100',
    },
    {
      title: 'Trusted Medical Professionals',
      desc: 'Every doctor, nurse, and scientist on our team is certified by respective Nigerian and international professional medical boards.',
      icon: Award,
      color: 'bg-sky-50 text-sky-600 border-sky-100',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 relative overflow-hidden font-sans">
      {/* Visual subtle accents */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#00A884] uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            About Matrix Prime
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#011438] tracking-tight leading-tight">
            Advanced Clinical Care Mapped Close To Home
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Matrix Prime Hospital is Alimosho’s premier private hospital, dedicated to raising the standard of medical care in Lagos with reliable clinical excellence, swift triage, and strict safety guidelines.
          </p>
        </div>

        {/* Bento style card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#0A3D91]/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 mb-6 ${item.color} group-hover:scale-105 transition-all`}>
                  <item.icon className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#0A3D91] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-1.5 text-[#00A884] opacity-0 group-hover:opacity-100 transition-opacity">
                <CircleCheck className="w-4 h-4" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Quality Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Statement banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-linear-to-r from-[#0A3D91] to-[#0d4cb5] rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight">
              Approved by HEFAMAA & Major HMO Networks
            </h3>
            <p className="text-blue-100 text-xs md:text-sm font-sans leading-relaxed">
              We operate under full registration with the Lagos State Health Facility Monitoring and Accreditation Agency (HEFAMAA) and provide seamless clinical pathways for major private, corporate, and national insurance tiers.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 bg-white/10 p-4 rounded-2xl border border-white/15">
            <span className="text-xs font-mono bg-white/10 text-emerald-300 font-bold px-3 py-1.5 rounded-lg border border-white/10">AVON APPROVED</span>
            <span className="text-xs font-mono bg-white/10 text-emerald-300 font-bold px-3 py-1.5 rounded-lg border border-white/10">AXA MANSARD</span>
            <span className="text-xs font-mono bg-white/10 text-emerald-300 font-bold px-3 py-1.5 rounded-lg border border-white/10">HYGEIA PREFERRED</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
