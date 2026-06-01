import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail, Stethoscope, ChevronRight, Award, BadgeAlert, Sparkles } from 'lucide-react';
import { doctorsData } from '../data/hospitalData';
import { Doctor } from '../types';

interface DoctorsProps {
  onDoctorSelect: (doctorName: string, departmentName: string) => void;
}

export default function Doctors({ onDoctorSelect }: DoctorsProps) {
  const [filterDept, setFilterDept] = useState<string>('all');

  const categories = [
    { name: 'All Specialties', id: 'all' },
    { name: 'Surgery', id: 'Surgery' },
    { name: 'Maternity / OBGYN', id: 'Maternity' },
    { name: 'Pediatrics', id: 'Pediatrics' },
    { name: 'Internal Medicine', id: 'Internal' },
  ];

  const filteredDoctors = filterDept === 'all'
    ? doctorsData
    : doctorsData.filter(doc => doc.department.includes(filterDept) || doc.specialty.includes(filterDept));

  const handleConsultTrigger = (doctor: Doctor) => {
    // Determine target department string based on doctor metadata
    let targetDept = 'General Outpatient (GP)';
    if (doctor.department.includes('Surgery')) targetDept = 'General Surgery';
    if (doctor.department.includes('Maternity')) targetDept = 'Maternity, Obstetrics & Gynecology';
    if (doctor.department.includes('Pediatrics')) targetDept = 'Pediatrics & Child Health';
    if (doctor.department.includes('Internal')) targetDept = 'Internal Medicine';

    onDoctorSelect(doctor.name, targetDept);
  };

  return (
    <section id="doctors" className="py-20 bg-gray-50/50 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#00A884] uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            Clinical Panel
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#011438] tracking-tight">
            Meet Our World-Class Specialists
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Our medical experts combine decades of local and international training to deliver clinical excellence with deep empathy.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12" id="doctor-dept-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterDept(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all focus:outline-none cursor-pointer ${
                filterDept === cat.id
                  ? 'bg-[#0A3D91] text-white shadow-md shadow-blue-900/10'
                  : 'bg-white text-gray-600 border border-gray-100/80 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Doctors Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="doctors-list-grid">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc) => (
              <motion.div
                layout
                key={doc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 rounded-3xl p-5 hover:shadow-2xl hover:border-blue-950/15 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image container frame */}
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative bg-gray-50 border border-gray-150 shadow-xs">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating experience tag */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#0A3D91] shadow-xs flex items-center space-x-1 border border-gray-10/50">
                      <Award className="w-3.5 h-3.5 text-[#00A884]" />
                      <span>{doc.experience.split(' ')[0]} Clinical Experience</span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs text-[#00A884] font-semibold">
                      <Stethoscope className="w-3.5 h-3.5" />
                      <span className="truncate">{doc.department.split('/')[0]}</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-950 text-base font-sans group-hover:text-[#0A3D91] transition-colors">
                      {doc.name}
                    </h3>
                    
                    <span className="block text-gray-500 font-mono text-[10px] leading-tight select-all">
                      {doc.qualifications}
                    </span>

                    <span className="block text-gray-600 font-sans text-xs italic leading-snug">
                      "{doc.bio}"
                    </span>
                  </div>
                </div>

                {/* Bottom Interactive Block: Availability + Schedules */}
                <div className="mt-6 pt-5 border-t border-gray-50 space-y-4">
                  {/* Availability schedule grid */}
                  <div>
                    <span className="block text-gray-400 text-[10px] font-mono uppercase mb-2">Clinic Consulting Days</span>
                    <div className="flex flex-wrap gap-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => {
                        const isAvailable = doc.availability.includes(day);
                        return (
                          <span
                            key={day}
                            className={`w-7.5 h-7 rounded-md text-[10.5px] font-bold flex items-center justify-center font-sans tracking-tight transition-all uppercase select-none ${
                              isAvailable
                                ? 'bg-[#00A884]/10 text-[#00A884] shadow-xs'
                                : 'bg-gray-50 text-gray-300'
                            }`}
                            title={isAvailable ? `${doc.name} is consulting on ${day}` : 'Off clinic duty'}
                          >
                            {day.substring(0,2)}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action core trigger */}
                  <button
                    onClick={() => handleConsultTrigger(doc)}
                    className="w-full bg-[#0A3D91] hover:bg-[#083075] text-white py-2.5 rounded-xl font-sans font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition-all cursor-pointer group-hover:shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Direct Triage Bot suggestion highlight prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-xs md:text-sm font-sans">
            Have a complicated symptom list? Try our interactive{' '}
            <button
              onClick={() => {
                const companionEl = document.getElementById('matrix-companion-triage');
                if (companionEl) {
                  companionEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#0A3D91] hover:text-[#00A884] font-bold underline cursor-pointer"
            >
              Virtual Triage Assistant
            </button>{' '}
            at the bottom to find the right department immediately.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
