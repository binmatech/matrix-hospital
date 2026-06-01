import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  Compass, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';

export default function ContactSection() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) {
      alert('Kindly fill in the required fields first.');
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setInquiryData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  const hours = [
    { service: 'Emergency Triage & Trauma Care', timing: '24/7 — Open Always', active: true },
    { service: 'Specialist General Consultations', timing: 'Mon - Sat (08:00 AM - 06:00 PM)', active: false },
    { service: 'In-House Laboratory & Diagnostic', timing: '24/7 — Fully Manned', active: true },
    { service: 'Pharmacy & Drug Dispensary', timing: '24/7 — Available Always', active: true },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50/50 relative overflow-hidden font-sans">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Contacts & Directions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#011438] tracking-tight">
            Get In Touch With Matrix Prime
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Have an enquiry, HMO registry request, or general question? Reach us through any of our secure channels below.
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-split-canvas">
          
          {/* Left Column: Coordinates details & Operating Hours */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-block">
            {/* Primary Contacts detail box */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-gray-950 font-bold text-lg tracking-tight mb-4 border-b border-gray-50 pb-3">
                Emergency & Clinical Directories
              </h3>

              <div className="space-y-4 font-sans text-sm text-gray-700">
                {/* Address block */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A3D91] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] font-mono uppercase">Hospital Physical Location</span>
                    <span className="block font-semibold text-gray-900 leading-tight">
                      Isheri-Igando Road, Lane Bus Stop, Alimosho, Lagos, Nigeria
                    </span>
                  </div>
                </div>

                {/* Phones block */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] font-mono uppercase">Hotline & Booking Lines</span>
                    <a href="tel:+2348156007000" className="block font-bold text-gray-900 leading-snug hover:underline">
                      +234 815 600 7000
                    </a>
                    <a href="tel:+2348102221111" className="block font-semibold text-gray-500 text-xs hover:underline">
                      General Outpatient: +234 815 600 7100
                    </a>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00A884] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] font-mono uppercase">Secure Care Emails</span>
                    <a href="mailto:info@matrixprime.org" className="block font-semibold text-gray-950 hover:underline">
                      info@matrixprime.org
                    </a>
                    <a href="mailto:contact@matrixprime.org" className="block text-gray-500 text-xs hover:underline">
                      appointments@matrixprime.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Live WhatsApp chat launcher anchor */}
              <div className="pt-4 border-t border-gray-50">
                <a
                  href="https://wa.me/2348156007000"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-5 rounded-2xl w-full flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 text-sm cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Operating Hours card */}
            <div className="bg-linear-to-b from-[#0A3D91] to-blue-950 text-white rounded-3xl p-6 md:p-8 space-y-4">
              <h3 className="font-bold text-base md:text-lg font-sans tracking-tight flex items-center space-x-2">
                <Clock className="w-5 h-5 text-emerald-300" />
                <span>Clinical Ward Opening Hours</span>
              </h3>
              <div className="space-y-3 font-sans text-xs" id="opening-hours-timings-list">
                {hours.map((hr) => (
                  <div key={hr.service} className="flex justify-between items-center border-b border-white/5 pb-2.5">
                    <div className="space-y-0.5">
                      <span className="block font-semibold text-white tracking-tight">{hr.service}</span>
                      <span className="block text-blue-200 text-[11px] font-medium">{hr.timing}</span>
                    </div>
                    {hr.active && (
                      <span className="bg-emerald-400/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded-sm tracking-wide text-[9px] uppercase border border-emerald-400/10">
                        24h Open
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiries Form & Custom Coordinates Map */}
          <div className="lg:col-span-7 space-y-8" id="contact-interactive-block">
            {/* Contact Inquiry form */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 relative">
              <h3 className="text-gray-950 font-bold text-lg tracking-tight mb-6">
                Send Matrix Prime A Direct Message
              </h3>

              {success ? (
                <div className="p-10 text-center space-y-3 bg-emerald-50/50 rounded-2xl border border-emerald-200">
                  <CheckCircle className="w-12 h-12 text-[#00A884] mx-auto animate-bounce" />
                  <span className="block font-bold text-gray-950 text-base">Inquiry Sent Securely</span>
                  <p className="text-gray-500 text-xs">Our clinical operators will respond within 2 hours. Keep track of your inbox or contact phone.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-direct-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Kolawole Adeleke"
                        className="w-full bg-gray-50 border border-gray-150 rounded-xl py-3 px-4 text-xs md:text-sm focus:border-[#0A3D91] outline-none font-medium transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="k.adeleke@gmail.com"
                        className="w-full bg-gray-50 border border-gray-150 rounded-xl py-3 px-4 text-xs md:text-sm focus:border-[#0A3D91] outline-none font-medium transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase">Subject Topic</label>
                    <input
                      type="text"
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="e.g. HMO Corporate Registry, Vaccine Scheduling"
                      className="w-full bg-gray-50 border border-gray-150 rounded-xl py-3 px-4 text-xs md:text-sm focus:border-[#0A3D91] outline-none font-medium transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase">Message Body *</label>
                    <textarea
                      rows={4}
                      required
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Clearly state your details, HMO numbers, or general inquiry metrics..."
                      className="w-full bg-gray-50 border border-gray-150 rounded-xl py-3 px-4 text-xs md:text-sm focus:border-[#0A3D91] outline-none font-medium transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#0A3D91] hover:bg-[#083075] text-white py-3.5 rounded-xl font-sans font-bold text-xs flex items-center justify-center space-x-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <span>{sending ? 'Sending Message...' : 'Submit Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Custom Interactive Map Card with exact Lagos Directions vector details */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-4 shadow-xs hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[#0A3D91]">
                  <Compass className="w-5 h-5 text-[#00A884]" />
                  <span className="text-gray-900 font-bold text-sm tracking-tight">Interactive Lagos Direction Map</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Isheri-Igando+Road,+Alimosho,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0A3D91] hover:text-[#00A884] font-bold flex items-center space-x-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Beautiful interactive location block layout */}
              <div className="aspect-[16/6] bg-blue-50/50 rounded-2xl border border-blue-105 p-6 flex items-center justify-center relative overflow-hidden" id="custom-vector-map-frame">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#0A3D91_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                
                <div className="text-center space-y-2 relative z-10 w-full max-w-md">
                  <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-900 font-sans font-extrabold text-sm tracking-tight leading-none mb-1">
                      Matrix Prime Hospital Lagos
                    </span>
                    <span className="block text-gray-500 font-sans text-xs max-w-xs mx-auto leading-normal">
                      Isheri-Igando Road, Lane Bus Stop, Alimosho Local Government, Lagos, Nigeria.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-400 bg-white border border-gray-100 px-3 py-1 rounded-full uppercase inline-block">
                    Beside major public landmarks
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
