import { Stethoscope, Heart, Shield, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookClick: () => void;
}

export default function Footer({ onNavigate, onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-linear-to-b from-gray-950 to-[#020d21] text-gray-300 font-sans pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-gray-900">
        
        {/* Hospital Branding block */}
        <div className="lg:col-span-4 space-y-6">
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#0A3D91] rounded-lg flex items-center justify-center border border-blue-900/30">
              <Stethoscope className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <span className="block font-bold text-xl tracking-tight text-white">
                MATRIX<span className="text-[#00A884]">PRIME</span>
              </span>
              <span className="block text-[10px] tracking-widest text-[#00A884] font-mono -mt-1 uppercase">
                HOSPITAL LAGOS
              </span>
            </div>
          </button>

          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
            Matrix Prime Hospital is Lagos’ premium private medical center. We unite accredited, board-certified clinicians with modern trauma diagnostic configurations to secure quality care close to home.
          </p>

          <div className="space-y-2 border-l-2 border-[#00A884] pl-4">
            <span className="block text-white text-[10.5px] font-mono uppercase tracking-wider font-bold">Clinical Reg Clearance</span>
            <span className="block text-gray-400 text-[11px]">HEFAMAA Registered: Reg Code MPH/2024/79B</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">
            Navigation Index
          </h4>
          <ul className="space-y-2 text-xs md:text-sm">
            {['Home', 'About Us', 'Services', 'Doctors', 'Departments', 'Contact'].map((link) => {
              const id = link.toLowerCase().replace(' ', '');
              return (
                <li key={link}>
                  <button
                    onClick={() => handleLinkClick(id === 'aboutus' ? 'about' : id)}
                    className="hover:text-emerald-300 transition-colors cursor-pointer focus:outline-none text-gray-400 font-medium text-left"
                  >
                    {link}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">
            Medical Services
          </h4>
          <ul className="space-y-2 text-xs text-gray-400 font-medium">
            <li>Internal Medicine Specialist</li>
            <li>24/7 Emergency Care Bay</li>
            <li>Maternity, OBGYN & Delivery</li>
            <li>General & Minimally Invasive Surgery</li>
            <li>Pediatrics Infant Healthcare</li>
            <li>Fully Automated Lab diagnostics</li>
            <li>Pharmacy Formulary (Genuine Drugs)</li>
            <li>Eye Clinic & Custom Frames</li>
          </ul>
        </div>

        {/* Contact Information Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase font-mono">
            Emergency Contacts
          </h4>
          <div className="space-y-3.5 text-xs text-gray-400">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#00A884] shrink-0 mt-0.5" />
              <span>Isheri-Igando Road, Alimosho Local Government, Lagos</span>
            </div>
            <div className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-[#00A884] shrink-0 mt-0.5" />
              <div>
                <a href="tel:+2348156007000" className="block text-white font-bold hover:underline">
                  +234 815 600 7000
                </a>
                <span className="block text-[10px]">24h Emergency Triage Line</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Mail className="w-4 h-4 text-[#00A884] shrink-0 mt-0.5" />
              <a href="mailto:info@matrixprime.org" className="text-gray-300 hover:text-white hover:underline">
                info@matrixprime.org
              </a>
            </div>
          </div>
          
          <button
            onClick={onBookClick}
            className="w-full bg-[#0A3D91] hover:bg-[#00A884] text-white py-2 rounded-lg font-sans font-semibold text-xs transition-colors cursor-pointer uppercase tracking-wider"
          >
            Schedule Slot
          </button>
        </div>

      </div>

      {/* Bottom copyrights notices */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
        <div className="space-y-1 text-center md:text-left">
          <span>
            © {currentYear} Matrix Prime Hospital. All rights reserved.
          </span>
          <span className="block text-[10.5px] text-gray-600">
            Registered with HEFAMAA, Lagos State Ministry of Health.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center space-x-1 hover:text-emerald-300 transition-colors">
            <Shield className="w-4 h-4 text-[#00A884]" />
            <span>Privacy Guidelines</span>
          </span>
          <span className="flex items-center space-x-1 hover:text-emerald-300 transition-colors">
            <Award className="w-4 h-4 text-[#00A884]" />
            <span>HMO Accreditations</span>
          </span>
          <span className="flex items-center space-x-1 hover:text-[#00A884] transition-colors">
            <Globe className="w-4 h-4 text-[#0A3D91]" />
            <span>Patient Portal</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
