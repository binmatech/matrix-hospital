import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Departments from './components/Departments';
import Gallery from './components/Gallery';
import PatientPortal from './components/PatientPortal';
import BookingForm from './components/BookingForm';
import Feedback from './components/Feedback';
import EmergencyBanner from './components/EmergencyBanner';
import FAQs from './components/FAQs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const [preselectedDepartment, setPreselectedDepartment] = useState('');

  const scrollIntoSection = (id: string) => {
    // Standard section scrolling tracker
    let targetId = id;
    if (id === 'aboutus' || id === 'about') {
      targetId = 'about';
    } else if (id === 'appointment') {
      targetId = 'appointments-section';
    } else if (id === 'home') {
      targetId = 'home';
    }

    const anchor = document.getElementById(targetId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookTrigger = () => {
    scrollIntoSection('appointments-section');
  };

  const handleEmergencyTrigger = () => {
    scrollIntoSection('contact');
  };

  const handleDoctorSelection = (doctorName: string, departmentName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedDepartment(departmentName);

    // Scroll to form smoothly
    setTimeout(() => {
      scrollIntoSection('appointments-section');
    }, 50);
  };

  const handleServiceSelection = (departmentName: string) => {
    setPreselectedDoctor('No preference (First available)');
    setPreselectedDepartment(departmentName);

    // Scroll to form smoothly
    setTimeout(() => {
      scrollIntoSection('appointments-section');
    }, 50);
  };

  const handleTriageSuggestion = (doctorName: string, departmentName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedDepartment(departmentName);
  };

  const handleClearPreselections = () => {
    setPreselectedDoctor('');
    setPreselectedDepartment('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#0A3D91]/10 selection:text-[#0A3D91] antialiased">
      {/* 1. Header Navigation BAR */}
      <Header 
        onNavigate={scrollIntoSection} 
        onBookClick={handleBookTrigger} 
      />

      {/* 2. Full-Screen Interactive Hero Slider */}
      <Hero 
        onBookClick={handleBookTrigger} 
        onEmergencyClick={handleEmergencyTrigger} 
      />

      {/* 3. Success Statistics Indicators */}
      <Stats />

      {/* 4. Core Pitch Section: Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Medical Services Module Canvas */}
      <Services onServiceSelect={handleServiceSelection} />

      {/* 6. Medical Specialists Profiling Card Grid */}
      <Doctors onDoctorSelect={handleDoctorSelection} />

      {/* 7. Corporate Hospital Departments Grid Layout */}
      <Departments onDeptSelect={handleServiceSelection} />

      {/* 8. Virtual Facilities Walkthrough Gallery Tour */}
      <Gallery />

      {/* 9. Smart Symptoms Triage Diagnoses Router Assistant */}
      <PatientPortal onSuggestRoute={handleTriageSuggestion} />

      {/* 10. Outpatient Booking Pass Reservations Form Panel */}
      <BookingForm 
        preselectedDoctor={preselectedDoctor} 
        preselectedDepartment={preselectedDepartment} 
        onClearPreselection={handleClearPreselections}
      />

      {/* 11. Patient Care Testimonial Critiques */}
      <Feedback />

      {/* 12. Urgent Attention Emergency Banner */}
      <EmergencyBanner />

      {/* 13. Helpful Patients Inquiries FAQs */}
      <FAQs />

      {/* 14. Contact Directory & Direction Vector Placement Map */}
      <ContactSection />

      {/* 15. Hospital Footer Core Information index */}
      <Footer 
        onNavigate={scrollIntoSection} 
        onBookClick={handleBookTrigger} 
      />
    </div>
  );
}
