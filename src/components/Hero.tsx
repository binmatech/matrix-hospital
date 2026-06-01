import { motion } from 'motion/react';
import { ArrowRight, Phone, Award, Shield, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onEmergencyClick: () => void;
}

export default function Hero({ onBookClick, onEmergencyClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-36 bg-linear-to-br from-blue-50/50 via-white to-emerald-50/30 overflow-hidden flex items-center">
      {/* Visual background details */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A3D91_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-emerald-100/85 text-[#00A884] px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider self-start shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>EXCELLENCE IN NIGERIAN HEALTHCARE</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              Advanced <span className="text-[#0A3D91]">Healthcare</span> <br className="hidden md:inline" />
              You Can <span className="text-[#00A884] relative inline-block">
                Trust
                <span className="absolute bottom-1.5 left-0 w-full h-1.5 bg-[#00A884]/25 -z-10 rounded-xs" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg max-w-xl font-sans leading-relaxed"
            >
              Providing exceptional medical care, emergency services, diagnostics, and specialist treatments for individuals and families. Driven by top-tier medical experts right here in Lagos.
            </motion.p>
          </div>

          {/* Core clinical assurances badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-gray-100 py-5 w-full max-w-xl text-xs md:text-sm font-sans"
          >
            <div className="flex items-center space-x-2 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#00A884] shrink-0" />
              <span>Modern Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#00A884] shrink-0" />
              <span>Expert Specialists</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 font-medium col-span-2 md:col-span-1">
              <CheckCircle2 className="w-5 h-5 text-[#00A884] shrink-0" />
              <span>24/7 Priority Emergency</span>
            </div>
          </motion.div>

          {/* Action triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full"
            id="hero-actions"
          >
            <button
              onClick={onBookClick}
              className="bg-[#0A3D91] hover:bg-[#083075] text-white font-sans font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onEmergencyClick}
              className="border-2 border-red-200 hover:border-red-400 bg-red-50/50 hover:bg-red-50 text-red-700 font-sans font-bold text-base px-8 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5 text-red-600 animate-bounce" />
              <span>Emergency Support</span>
            </button>
          </motion.div>
        </div>

        {/* Right graphic column */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-right-graphic">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Soft decorative shadow frame */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#0a3d91]/15 to-transparent rounded-3xl -rotate-2 scale-102 blur-lg" />

            {/* Premium quality clinician photo */}
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative bg-[#0a3d91]">
              <img
                src="https://imgur.com/CVfhhKM.png"
                alt="Nigerian Medical Doctor Specialist at Matrix Prime Hospital Lagos"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay styling for trustworthy cinematic look */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

              {/* Patient satisfaction widget pinned over image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center space-x-4">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#00A884]" />
                </div>
                <div>
                  <span className="block text-gray-900 font-sans font-bold text-sm">CMD Assured Quality</span>
                  <span className="block text-gray-500 font-sans text-xs">Accredited private clinician guidelines</span>
                </div>
              </div>
            </div>

            {/* floating security/regulatory badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 hidden md:flex items-center space-x-3 border border-gray-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0A3D91]" />
              </div>
              <div className="pr-4">
                <span className="block text-[#0A3D91] font-sans font-black text-sm tracking-tight">ISO CERTIFIED</span>
                <span className="block text-gray-400 font-mono text-[9px] -mt-1 uppercase">LAGOS CLINICAL BOARD</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
