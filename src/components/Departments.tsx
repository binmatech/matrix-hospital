import { motion } from 'motion/react';
import { Stethoscope, ShieldAlert, Baby, HeartHandshake, ArrowRight, UserCheck, Star } from 'lucide-react';
import { departmentsData } from '../data/hospitalData';

interface DepartmentsProps {
  onDeptSelect: (deptName: string) => void;
}

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Baby': return <Baby className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    default: return <Stethoscope className={className} />;
  }
};

export default function Departments({ onDeptSelect }: DepartmentsProps) {
  return (
    <section id="departments" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Departments Grid
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[#011438] tracking-tight">
            Specialized Hospital Departments
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Our fully accredited, custom clinical wards are designed to manage general, critical, maternal, and pediatric care under sterile and supportive protocols.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="dept-grid-container">
          {departmentsData.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50/50 hover:bg-white border border-gray-100/85 hover:border-[#0A3D91]/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all grid grid-cols-1 md:grid-cols-12 group"
            >
              {/* Left Column Image */}
              <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto bg-[#0a3d91]">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                  <span className="text-emerald-300 text-xs font-mono font-bold">Matrix Prime Lagos</span>
                </div>
              </div>

              {/* Right Column details */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0A3D91] text-white flex items-center justify-center shrink-0">
                      {getIcon(dept.icon, 'w-5 h-5')}
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 font-mono tracking-wide uppercase">
                      Clinical Department
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-950 text-lg md:text-xl tracking-tight leading-tight">
                    {dept.name}
                  </h3>

                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Included sub-services bullet checklists */}
                  <div className="space-y-2">
                    <span className="block text-gray-400 text-[10px] font-mono uppercase tracking-wider">
                      Specialist Ward Inclusions
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.servicesIncluded.map((srv) => (
                        <span key={srv} className="bg-white border border-gray-100/80 text-gray-600 text-[11px] px-2.5 py-1 rounded-md font-medium">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer clinical leader segment */}
                <div className="border-t border-gray-100/70 pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4 text-[#0A3D91]" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 font-mono uppercase">Head of Department</span>
                      <span className="block text-gray-800 text-xs font-semibold">{dept.headOfDepartment}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onDeptSelect(dept.name)}
                    className="w-10 h-10 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#0A3D91] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-xs"
                    title={`Schedule in ${dept.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
