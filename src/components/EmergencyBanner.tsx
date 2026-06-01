import { motion } from 'motion/react';
import { ShieldAlert, AlertCircle, Phone, ArrowUpRight, Ambulance } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section className="bg-linear-to-r from-red-600 via-red-700 to-rose-600 text-white py-12 px-6 relative overflow-hidden font-sans border-y-4 border-red-500">
      {/* visual graphic ripple waves */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)" />
      <div className="absolute top-1/2 -right-16 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left text column */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-5 text-center md:text-left max-w-3xl">
          <div className="w-14 h-14 bg-white/10 border-2 border-white/25 rounded-full flex items-center justify-center shrink-0 shadow-lg animate-pulse">
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <span className="inline-flex items-center space-x-1 bg-white/15 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
              <Ambulance className="w-3.5 h-3.5 mr-1" />
              <span>Matrix Emergency Standby</span>
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans text-white leading-tight">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-red-50 text-xs md:text-sm leading-relaxed font-sans font-medium">
              Our trauma center is fully functional 24 hours a day, 7 days a week. We maintain an open emergency bay with standby surgeons, pediatricians, obstetricians, and oxygen-loaded ambulances.
            </p>
          </div>
        </div>

        {/* Right CTA button column */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row sm:items-center justify-center gap-4 shrink-0">
          <a
            href="tel:+2348156007000"
            className="bg-white hover:bg-red-50 text-red-700 font-bold px-8 py-3.5 rounded-xl text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all font-sans"
          >
            <Phone className="w-5 h-5 text-red-600 animate-bounce" />
            <span>Call Hotline: +234 815 600 7000</span>
          </a>
          <a
            href="https://wa.me/2348156007000"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all font-sans"
          >
            <span>WhatsApp Dispatcher</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
