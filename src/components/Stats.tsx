import { motion } from 'motion/react';
import { UserCheck, ShieldAlert, Heart, ClipboardCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 'stat-patients',
      number: '10,000+',
      label: 'Patients Treated',
      desc: 'Trusted by families in Alimosho & beyond',
      icon: UserCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'stat-emergency',
      number: '24/7',
      label: 'Emergency Support',
      desc: 'Always ready with rapid standby trauma care',
      icon: ShieldAlert,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      id: 'stat-professionals',
      number: '50+',
      label: 'Medical Experts',
      desc: 'Highly qualified doctors, consultants & nurses',
      icon: Heart,
      color: 'text-emerald-300',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'stat-satisfaction',
      number: '98%',
      label: 'Patient Satisfaction',
      desc: 'Raving patient feedback on care Quality',
      icon: ClipboardCheck,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="relative py-12 bg-white border-b border-gray-100" id="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-linear-to-b from-gray-50/50 to-white border border-gray-100/80 p-6 rounded-2xl relative overflow-hidden group hover:border-[#00A884]/30 hover:shadow-lg transition-all"
              id={stat.id}
            >
              {/* background micro pattern widget */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#0A3D91_1px,transparent_1px)] [background-size:12px_12px] opacity-5 pointer-events-none group-hover:scale-105 transition-transform" />
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} transition-transform group-hover:scale-110`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight leading-none mb-1">
                    {stat.number}
                  </span>
                  <span className="block font-sans font-bold text-sm text-gray-800 tracking-wide mb-1">
                    {stat.label}
                  </span>
                  <span className="block font-sans text-xs text-gray-500 leading-normal">
                    {stat.desc}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
