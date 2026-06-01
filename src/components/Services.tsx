import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Activity, 
  Baby, 
  Scissors, 
  Heart, 
  Pill, 
  FlaskConical, 
  Eye, 
  X, 
  ArrowRight,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { servicesData } from '../data/hospitalData';
import { Service } from '../types';

interface ServicesProps {
  onServiceSelect: (departmentName: string) => void;
}

// Map service icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
    case 'Activity': return <Activity className="w-6 h-6" />;
    case 'Baby': return <Baby className="w-6 h-6" />;
    case 'Scissors': return <Scissors className="w-6 h-6" />;
    case 'Heart': return <Heart className="w-6 h-6" />;
    case 'Pill': return <Pill className="w-6 h-6" />;
    case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
    case 'Eye': return <Eye className="w-6 h-6" />;
    default: return <Stethoscope className="w-6 h-6" />;
  }
};

export default function Services({ onServiceSelect }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookShortcut = (serviceTitle: string) => {
    onServiceSelect(serviceTitle);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Medical Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#011438] tracking-tight">
              Comprehensive Health Solutions
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Equipped with elite diagnostics, highly experienced medical personnel, and state-of-the-art facilities, we provide peerless diagnostic, preventative, treatment, and trauma-care coverage.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-2 bg-emerald-50 text-[#00A884] px-4 py-2.5 rounded-xl border border-emerald-100 text-xs font-mono font-bold">
            <HelpCircle className="w-4 h-4 text-[#00A884]" />
            <span>Click any service to see details</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6" id="services-grid-block">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-50/50 hover:bg-white border border-gray-100/80 hover:border-[#0A3D91]/20 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group h-full cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Custom Styled Dynamic Icon wrapper */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#0A3D91]/10 text-[#0A3D91] group-hover:bg-[#00A884] group-hover:text-white mb-6 transition-all shadow-xs">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#0A3D91] transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-semibold text-[#011438] group-hover:text-[#00A884] transition-colors pt-2 border-t border-gray-100/50 self-start">
                <span>Learn More Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Interactive Modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
              {/* Backing Dark Glass dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative z-10 border border-gray-100"
                id="service-detail-modal"
              >
                {/* Header graphic header */}
                <div className="bg-linear-to-r from-[#0A3D91] to-blue-800 p-6 md:p-8 text-white relative shrink-0">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 bg-black/15 hover:bg-black/30 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                      {getIcon(selectedService.icon)}
                    </div>
                    <span className="text-xs font-mono uppercase bg-[#00A884]/90 text-white px-3 py-1 rounded-full font-bold">
                      MATRIX PRIME ADVANTAGE
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {selectedService.title} Services
                  </h3>
                </div>

                {/* Patient-facing clinical metrics */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider">
                      Clinical Operational Profile
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  {/* Benefit Items */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider">
                      Patient Benefits & Inclusion Indicators
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start space-x-2.5 bg-gray-50 border border-gray-100/50 p-3 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-[#00A884] shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Direct Action Triggers */}
                  <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <span className="block text-gray-400 text-[10px] font-mono uppercase">Lagos Medical Consultation Status</span>
                      <span className="block font-bold text-gray-800 text-sm">Priority Booking Slot Available Today</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch gap-3">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="border border-gray-200 hover:bg-gray-50 text-gray-500 font-semibold px-5 py-2.5 rounded-xl text-center text-sm transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => handleBookShortcut(selectedService.title)}
                        className="bg-[#0A3D91] hover:bg-[#083075] text-white font-bold px-6 py-2.5 rounded-xl text-center text-sm shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>Schedule Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
