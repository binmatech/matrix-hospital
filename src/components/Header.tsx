import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, Menu, X, Stethoscope, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onBookClick: () => void;
}

export default function Header({ onNavigate, onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Departments', id: 'departments' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Banner Information (Lagos Specific) */}
      <div className="bg-[#0A3D91] text-white text-xs py-2 px-4 border-b border-blue-900/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#00A884]" />
              <span>Isheri-Igando Road, Alimosho, Lagos</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-[#00A884]" />
              <span className="font-semibold text-emerald-300">Open 24/7 for Emergencies</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+2348000000000" className="flex items-center space-x-1 hover:text-emerald-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#00A884]" />
              <span>Hotline: +234 815 600 7000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav
        className={`w-full py-4.5 px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Branding */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
            id="nav-logo"
            aria-label="Matrix Prime Hospital Home"
          >
            <div className="w-10 h-10 bg-[#0A3D91] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block font-display font-extrabold text-xl tracking-tight text-[#0A3D91]">
                MATRIX<span className="text-[#00A884]">PRIME</span>
              </span>
              <span className="block text-[10px] tracking-widest text-gray-500 font-mono -mt-1 uppercase">
                HOSPITAL LAGOS
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8" id="nav-desktop-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans font-medium text-sm transition-all relative hover:text-[#0A3D91] focus:outline-none cursor-pointer ${
                  scrolled ? 'text-gray-600' : 'text-gray-700 hover:text-[#0a3d91]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Emergency & Booking Action items */}
          <div className="hidden sm:flex items-center space-x-4" id="nav-actions">
            <a
              href="tel:+2348156007000"
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/80 px-4 py-2 rounded-lg font-sans font-semibold text-sm transition-all mr-2"
              id="header-emergency-btn"
            >
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Emergency Call</span>
            </a>
            <button
              onClick={onBookClick}
              className="bg-[#0A3D91] hover:bg-[#083075] text-white text-sm font-sans font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              id="header-booking-btn"
            >
              Book Appointment
            </button>
          </div>

          {/* Trigger Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700 focus:outline-none"
            id="mobile-menu-trigger"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col space-y-4 lg:hidden"
            id="mobile-drawer-menu"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-left font-sans font-semibold text-gray-700 hover:text-[#0A3D91] py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all text-sm focus:outline-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 flex flex-col space-y-3 sm:hidden">
              <a
                href="tel:+2348156007000"
                className="flex items-center justify-center space-x-2 w-full text-red-600 bg-red-50 hover:bg-red-100/80 py-3 rounded-lg font-sans font-semibold text-sm text-center"
              >
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Emergency: +234 815 600 7000</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-[#0A3D91] hover:bg-[#083075] text-white py-3 rounded-lg font-sans font-semibold text-sm text-center shadow-md focus:outline-none cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
            
            <div className="text-center text-[11px] text-gray-400 font-mono py-1">
              Matrix Prime Hospital — 24/7 Care
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
