import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Stethoscope, 
  CheckCircle, 
  Printer, 
  Download, 
  Clock, 
  Trash2, 
  Award,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { Appointment } from '../types';

interface BookingFormProps {
  preselectedDoctor: string;
  preselectedDepartment: string;
  onClearPreselection: () => void;
}

export default function BookingForm({ 
  preselectedDoctor, 
  preselectedDepartment, 
  onClearPreselection 
}: BookingFormProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    timeSlot: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [latestAppointment, setLatestAppointment] = useState<Appointment | null>(null);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const departments = [
    { value: 'Internal Medicine', label: 'Internal Medicine (Chronic, General Adults)' },
    { value: 'Maternity, Obstetrics & Gynecology', label: 'Maternity, Obstetrics & Gynecology' },
    { value: 'General Surgery', label: 'General Surgery & Laparoscopy' },
    { value: 'Pediatrics & Child Health', label: 'Pediatrics & Child Health' },
    { value: 'Pharmacy Refill', label: 'Pharmacy & Drug Refill Consultation' },
    { value: 'Laboratory & Diagnostics', label: 'Laboratory & Diagnostic Assays' },
    { value: 'Optometry & Eye Clinic', label: 'Optometry & Eye Clinic' }
  ];

  const doctorsMap: { [key: string]: string[] } = {
    'Internal Medicine': ['Dr. Amara Eke-Alade', 'Dr. Jide Sowemimo (GP)', 'No preference (First available)'],
    'Maternity, Obstetrics & Gynecology': ['Dr. Chioma Nkem-Okoro', 'No preference (First available)'],
    'General Surgery': ['Dr. Afolabi Durosinmi', 'No preference (First available)'],
    'Pediatrics & Child Health': ['Dr. Babajide Sowemimo', 'No preference (First available)'],
    'Pharmacy Refill': ['On-Duty Chief Pharmacist'],
    'Laboratory & Diagnostics': ['Lead Laboratory Pathologist'],
    'Optometry & Eye Clinic': ['Senior Consultant Optometrist']
  };

  // Load appointments booked from localStorage on mount
  useEffect(() => {
    try {
      const cached = localStorage.getItem('matrix_prime_appointments');
      if (cached) {
        setAppointments(JSON.parse(cached));
      }
    } catch (e) {
      console.warn('Failed to parse cached appointments', e);
    }
  }, []);

  // Listen for pre-selections from other parts of the site
  useEffect(() => {
    if (preselectedDepartment) {
      setFormData(prev => ({
        ...prev,
        department: preselectedDepartment,
        doctor: preselectedDoctor || (doctorsMap[preselectedDepartment]?.[0] || '')
      }));
    }
  }, [preselectedDepartment, preselectedDoctor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // Reset doctor pre-selection if the department changes
      if (name === 'department') {
        updated.doctor = doctorsMap[value]?.[0] || '';
      }
      return updated;
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.department || !formData.date || !formData.timeSlot) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical dispatch processing
    setTimeout(() => {
      const newBooking: Appointment = {
        id: `MPH-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'patient@matrixprime.org',
        department: formData.department,
        doctor: formData.doctor || 'Assigned Duty Medical Specialist',
        date: formData.date,
        timeSlot: formData.timeSlot,
        message: formData.message,
        status: 'Confirmed',
        createdAt: new Date().toLocaleDateString('en-XG', { dateStyle: 'medium' })
      };

      const revisedList = [newBooking, ...appointments];
      setAppointments(revisedList);
      localStorage.setItem('matrix_prime_appointments', JSON.stringify(revisedList));

      setLatestAppointment(newBooking);
      setIsSubmitting(false);
      setShowSuccessCard(true);

      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: '',
        doctor: '',
        date: '',
        timeSlot: '',
        message: ''
      });
      onClearPreselection();
    }, 1200);
  };

  const cancelBooking = (id: string) => {
    if (confirm('Are you certain you wish to cancel this appointment slot reservation?')) {
      const rest = appointments.filter(a => a.id !== id);
      setAppointments(rest);
      localStorage.setItem('matrix_prime_appointments', JSON.stringify(rest));
      if (latestAppointment?.id === id) {
        setLatestAppointment(null);
        setShowSuccessCard(false);
      }
    }
  };

  const printAppointmentPass = () => {
    const printContent = printRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;
    if (printContent) {
      const win = window.open('', '', 'height=600,width=800');
      if (win) {
        win.document.write(`
          <html>
            <head>
              <title>Clinic Admission Pass - Matrix Prime Hospital</title>
              <style>
                body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #333; }
                .pass-card { border: 2px dashed #0A3D91; padding: 30px; border-radius: 16px; background: #fafafa; }
                .header-brand { text-align: center; border-bottom: 2px solid #00A884; padding-bottom: 20px; margin-bottom: 20px; }
                .header-brand h1 { color: #0A3D91; margin: 0; font-size: 24px; }
                .info-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
                .info-label { font-weight: bold; color: #555; }
                .warning-box { background: #fffcf0; border: 1px solid #f2cf43; padding: 15px; border-radius: 8px; margin-top: 20px; font-size: 12px; color: #856404; }
                .footer-notice { text-align: center; margin-top: 30px; font-size: 11px; color: #999; }
              </style>
            </head>
            <body>
              ${printContent}
              <script>window.print();</script>
            </body>
          </html>
        `);
        win.document.close();
      }
    }
  };

  return (
    <section id="appointments-section" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="booking-block-split">
          
          {/* Left Column: Form & Warnings */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Outpatient Scheduling
              </span>
              <h2 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                Schedule Your Digital Hospital Pass
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fill out the secure registration details below to reserve an appointment slot. Your safety, records integration, and medical guidance is our singular objective.
              </p>
            </div>

            {/* Form Box Container */}
            <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 md:p-8 relative">
              
              {/* Emergency indicator warning */}
              {formData.department === '24/7 Emergency Care' && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start space-x-3 text-xs md:text-sm">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <span className="font-bold block mb-0.5">EMERGENCY WARNING DETECTED</span>
                    If you are experiencing severe chest pains, rapid bleeding, trauma, or critical respiratory distress, do not wait for an appointment code! Call our 24h hotline immediately: <a href="tel:+2348156007000" className="underline font-bold">+234 815 600 7000</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5" id="appointment-form-element">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">Patient Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Kolawole Adeleke"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] outline-none transition-all placeholder:text-gray-300 font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">WhatsApp / Contact Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. +234 815 600 7000"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] outline-none transition-all placeholder:text-gray-300 font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">Patient Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. k.adeleke@gmail.com"
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] outline-none transition-all placeholder:text-gray-300 font-medium"
                      />
                    </div>
                  </div>

                  {/* Department Select */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">Select Department / Ward *</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] outline-none transition-all font-medium appearance-none"
                      >
                        <option value="">-- Choose department clinic --</option>
                        {departments.map(dept => (
                          <option key={dept.value} value={dept.value}>{dept.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Doctor Assignment */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">Preferred Specialist Doctor</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        disabled={!formData.department}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] outline-none transition-all font-medium disabled:bg-gray-100 disabled:text-gray-400 appearance-none"
                      >
                        {!formData.department ? (
                          <option value="">Select department first</option>
                        ) : (
                          doctorsMap[formData.department]?.map(doc => (
                            <option key={doc} value={doc}>{doc}</option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5 font-sans">
                      <label className="block text-[10px] md:text-xs font-bold text-gray-700 tracking-wide uppercase">Preference Date *</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs md:text-sm focus:border-[#0A3D91] outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-1.5 font-sans">
                      <label className="block text-[10px] md:text-xs font-bold text-gray-700 tracking-wide uppercase">Available Hour Slot *</label>
                      <select
                        name="timeSlot"
                        required
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs md:text-sm focus:border-[#0A3D91] outline-none transition-all font-medium appearance-none"
                      >
                        <option value="">Time Slot</option>
                        <option value="09:00 AM - 10:30 AM">09:00 AM</option>
                        <option value="11:00 AM - 12:30 PM">11:00 AM</option>
                        <option value="01:00 PM - 02:30 PM">01:00 PM</option>
                        <option value="03:00 PM - 04:30 PM">03:00 PM</option>
                        <option value="05:00 PM - 06:30 PM">05:00 PM (Lates)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">Symptoms Summary / Medical Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly state symptoms, previous prescriptions, or general questions..."
                      className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] outline-none transition-all placeholder:text-gray-300 font-medium"
                    />
                  </div>
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0A3D91] hover:bg-[#083075] text-white py-3.5 text-sm rounded-xl font-sans font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all disabled:bg-blue-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Registering Patient Code...</span>
                  ) : (
                    <>
                      <span>Submit Secure Appointment</span>
                      <Calendar className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Live Booking Outcomes / Receipts */}
          <div className="lg:col-span-5 space-y-8" id="live-outcome-block">
            <AnimatePresence mode="wait">
              {showSuccessCard && latestAppointment ? (
                /* Interactive Printable Receipt Pass Card */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50/50 border-2 border-dashed border-[#00A884] rounded-3xl p-6 md:p-8 space-y-6 shadow-md"
                  id="clinical-pass-card"
                >
                  <div className="flex items-center space-x-3 text-[#00A884]">
                    <CheckCircle className="w-8 h-8 text-[#00A884]" />
                    <div>
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider">APPOINTMENT VERIFIED</span>
                      <span className="block text-gray-900 font-bold text-lg">Hospital Reception Pass Generated</span>
                    </div>
                  </div>

                  {/* Printable layout node */}
                  <div ref={printRef} className="bg-white border border-gray-150 p-6 rounded-2xl shadow-xs space-y-4 text-left">
                    <div className="header-brand text-center pb-3 border-b-2 border-emerald-500 mb-4">
                      <h4 className="text-[#0A3D91] font-sans font-black text-base tracking-tight m-0">MATRIX PRIME HOSPITAL</h4>
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase block -mt-1">Isheri-Igando Road, Lagos</span>
                    </div>

                    <div className="space-y-2 font-sans text-xs text-gray-700">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400 font-mono uppercase">Appointment Code:</span>
                        <span className="font-mono font-bold text-gray-950 text-emerald-600 underline">{latestAppointment.id}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400 font-mono uppercase">Patient Name:</span>
                        <span className="font-bold text-gray-950">{latestAppointment.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400 font-mono uppercase">Department:</span>
                        <span className="font-bold text-gray-800">{latestAppointment.department}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400 font-mono uppercase">Consulting Specialist:</span>
                        <span className="font-bold text-[#0A3D91]">{latestAppointment.doctor}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                        <span className="text-gray-400 font-mono uppercase">Reserved Slot:</span>
                        <span className="font-bold text-gray-800">{latestAppointment.date} at {latestAppointment.timeSlot.split(' ')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-mono uppercase">Clinic Action Status:</span>
                        <span className="bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-sm uppercase tracking-wide text-[9px]">{latestAppointment.status}</span>
                      </div>
                    </div>

                    <div className="warning-box bg-amber-50/50 border border-amber-200 p-3.5 rounded-xl text-[10px] text-amber-800 font-sans leading-relaxed">
                      <span className="font-bold block uppercase text-amber-900 mb-1">🏥 ADMISSION PATIENT INSTRUCTIONS</span>
                      1. Please arrive 15 minutes before your slot to complete check-in protocols. <br />
                      2. Present this receipt code (<b className="font-mono select-all text-amber-900">{latestAppointment.id}</b>) on your smartphone at the front reception.
                    </div>
                  </div>

                  {/* Print / Save Trigger Options */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={printAppointmentPass}
                      className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 focus:outline-none cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Card Pass</span>
                    </button>
                    <button
                      onClick={() => setShowSuccessCard(false)}
                      className="flex-1 bg-[#0A3D91] hover:bg-[#083075] text-white font-bold py-2.5 rounded-xl text-xs text-center focus:outline-none cursor-pointer"
                    >
                      Book Another Set
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Static clinical assurance side panel */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-linear-to-b from-[#0A3D91] to-blue-950 text-white rounded-3xl p-6 md:p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase block">Matrix Support Core</span>
                    <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight leading-tight">
                      What happens after your reservation is launched?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-300 font-bold font-mono text-xs shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <span className="block font-bold text-sm tracking-tight text-[#00A884]">System Verification Check</span>
                        <p className="text-blue-100 text-xs leading-relaxed">
                          Your profile details are integrated on our hospital database registry to secure zero clinical scheduling conflicts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-300 font-bold font-mono text-xs shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <span className="block font-bold text-sm tracking-tight text-[#00A884]">SMS Registration Code Pin</span>
                        <p className="text-blue-100 text-xs leading-relaxed">
                          We dispatch a secure admission pass code in an SMS or WhatsApp block allowing quick physical access.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-300 font-bold font-mono text-xs shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <span className="block font-bold text-sm tracking-tight text-[#00A884]">Duty Nurse Greeting</span>
                        <p className="text-blue-100 text-xs leading-relaxed">
                          Upon entering Matrix Prime Hospital at Bus Stop Lane Isheri-Igando Road, Alimosho, show your booking ID for instantaneous triage routing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 text-xs text-blue-100">
                    <Sparkles className="w-5 h-5 text-emerald-300 shrink-0" />
                    <span>HMO networks coverage is fully supported automatically with your booking registration pass.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Historic Bookings tracking drawer box */}
            {appointments.length > 0 && (
              <div className="bg-gray-100/50 border border-gray-150 p-6 rounded-3xl space-y-4">
                <span className="block text-xs font-mono font-bold text-gray-500 uppercase">Your Saved Reservation History ({appointments.length})</span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1" id="appointment-history-scroll-panel">
                  {appointments.map((appt) => (
                    <div key={appt.id} className="bg-white border border-gray-150 rounded-xl p-3 flex justify-between items-center text-xs">
                      <div>
                        <span className="block font-bold text-gray-900 leading-tight truncate max-w-44">{appt.department}</span>
                        <span className="block text-gray-400 font-mono text-[9.5px]">ID Code: {appt.id} • {appt.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setLatestAppointment(appt);
                            setShowSuccessCard(true);
                          }}
                          className="bg-blue-50 text-[#0A3D91] text-[10px] font-bold px-2 py-1 rounded-md hover:bg-blue-100 transition-colors cursor-pointer"
                        >
                          View Pass
                        </button>
                        <button
                          onClick={() => cancelBooking(appt.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-md"
                          title="Cancel check-in code"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
