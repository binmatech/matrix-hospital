import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Stethoscope, ArrowRight, CornerDownRight, Check, CheckCircle } from 'lucide-react';
import { symptomTriageData } from '../data/hospitalData';

interface PatientPortalProps {
  onSuggestRoute: (doctor: string, department: string) => void;
}

export default function PatientPortal({ onSuggestRoute }: PatientPortalProps) {
  const [typedSymptom, setTypedSymptom] = useState('');
  const [matchResult, setMatchResult] = useState<{
    dept: string;
    suggestion: string;
    matchedKeys: string[];
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const predefinedSymptoms = [
    { label: 'Child fever / Immunization', keys: ['child', 'baby', 'fever', 'vaccination'] },
    { label: 'High BP / Heart Palpitaions', keys: ['pressure', 'bp', 'heart', 'dizziness', 'headache'] },
    { label: 'Pregnancy scans (OBGYN)', keys: ['pregnancy', 'labor', 'pregnant', 'periods', 'obstetric'] },
    { label: 'General Surgery consults', keys: ['appendicitis', 'hernia', 'surgical', 'wound'] },
    { label: 'Breathing tightness (Emergency)', keys: ['chest', 'breathing', 'blood', 'unconscious'] },
  ];

  const handleSymptomSearch = (text: string) => {
    const cleanWord = text.toLowerCase().trim();
    if (!cleanWord) {
      setMatchResult(null);
      return;
    }

    // Dynamic symptoms matching loop
    let matchedGroup = null;
    let matchedKeys: string[] = [];

    for (const item of symptomTriageData) {
      const intersections = item.symptoms.filter((sym) => cleanWord.includes(sym) || sym.includes(cleanWord));
      if (intersections.length > 0) {
        matchedGroup = item;
        matchedKeys = intersections;
        break;
      }
    }

    if (matchedGroup) {
      // Map matching keys
      let resolvedDoc = '';
      if (matchedGroup.dept === 'dept-internal') resolvedDoc = 'Dr. Amara Eke-Alade';
      else if (matchedGroup.dept === 'dept-emergency') resolvedDoc = 'No preference (First available)';
      else if (matchedGroup.dept === 'dept-maternity') resolvedDoc = 'Dr. Chioma Nkem-Okoro';
      else if (matchedGroup.dept === 'dept-pediatrics') resolvedDoc = 'Dr. Babajide Sowemimo';

      let resolvedDeptName = 'Internal Medicine';
      if (matchedGroup.dept === 'dept-emergency') resolvedDeptName = 'Laboratory & Diagnostics'; // custom switch
      else if (matchedGroup.dept === 'dept-maternity') resolvedDeptName = 'Maternity, Obstetrics & Gynecology';
      else if (matchedGroup.dept === 'dept-pediatrics') resolvedDeptName = 'Pediatrics & Child Health';

      setMatchResult({
        dept: resolvedDeptName,
        suggestion: matchedGroup.suggestion,
        matchedKeys: matchedKeys,
      });
    } else {
      setMatchResult({
        dept: 'Internal Medicine',
        suggestion: 'General Outpatient Clinic — Dr. Amara Eke-Alade of Internal Medicine',
        matchedKeys: [],
      });
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTypedSymptom(text);
    startTransition(() => {
      handleSymptomSearch(text);
    });
  };

  const selectPredefined = (keys: string[]) => {
    setTypedSymptom(keys.join(', '));
    handleSymptomSearch(keys[0]);
  };

  const applySuggestions = () => {
    if (!matchResult) return;
    let fallbackDoc = 'No preference (First available)';
    if (matchResult.dept.includes('Internal')) fallbackDoc = 'Dr. Amara Eke-Alade';
    if (matchResult.dept.includes('Maternity')) fallbackDoc = 'Dr. Chioma Nkem-Okoro';
    if (matchResult.dept.includes('Pediatrics')) fallbackDoc = 'Dr. Babajide Sowemimo';

    onSuggestRoute(fallbackDoc, matchResult.dept);

    // Smooth scroll down to appointment container
    const appointmentEl = document.getElementById('appointments-section');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50/50 to-white relative overflow-hidden font-sans border-t border-b border-gray-100/50" id="matrix-companion-triage">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Banner header title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center space-x-1 bg-[#0A3D91]/10 text-[#0A3D91] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-blue-100">
            <Brain className="w-3.5 h-3.5 mr-1" />
            <span>Smart Companion Triage Router</span>
          </span>
          <h2 className="text-3xl font-display font-extrabold text-[#011438] tracking-tight">
            Virtual Symptoms Checker Assistant
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Unsure of which specialist to consult? Type in how you or your child are feeling to locate the authorized clinical department immediately.
          </p>
        </div>

        {/* Search Assistant Console */}
        <div className="bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-xl space-y-8" id="triage-main-console">
          
          {/* Quick predefined chips layout */}
          <div className="space-y-3">
            <span className="block text-gray-400 text-[10px] font-mono uppercase tracking-wide">
              Select key clinical indicator tags
            </span>
            <div className="flex flex-wrap gap-2">
              {predefinedSymptoms.map((pre) => (
                <button
                  key={pre.label}
                  onClick={() => selectPredefined(pre.keys)}
                  className="bg-gray-50 text-gray-600 hover:text-white hover:bg-[#0A3D91] px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all border border-gray-10/70 cursor-pointer select-none"
                >
                  {pre.label}
                </button>
              ))}
            </div>
          </div>

          {/* Typing Search Input */}
          <div className="space-y-1.5 relative">
            <label className="block text-xs font-bold text-gray-700 font-sans tracking-wide uppercase">
              Or describe how you feel in your own words
            </label>
            <div className="relative">
              <input
                type="text"
                value={typedSymptom}
                onChange={handleTyping}
                placeholder="Describe: 'coughing with infant high temperature' or 'severe head pressure and vertigo'..."
                className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl py-4.5 pl-5 pr-12 text-sm md:text-base focus:border-[#0A3D91] outline-none transition-all placeholder:text-gray-400 font-medium"
              />
              <div className="absolute right-4 top-4">
                <Sparkles className="w-6 h-6 text-[#00A884] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Search match outcome rendering */}
          <AnimatePresence mode="wait">
            {typedSymptom && matchResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-blue-50/50 border border-blue-105 p-6 rounded-2xl space-y-4"
                id="triage-match-outcome"
              >
                <div className="flex items-center space-x-2 text-[#0A3D91]">
                  <CheckCircle className="w-5.5 h-5.5 text-[#00A884]" />
                  <span className="font-sans font-bold text-sm tracking-tight text-gray-900">
                    Matrix Triage Guidance Verdict
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2 text-xs md:text-sm text-gray-700">
                    <CornerDownRight className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <span>Suggested Clinical Ward: </span>
                      <strong className="text-gray-950 font-sans text-emerald-700 font-bold">{matchResult.dept}</strong>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-xs md:text-sm text-gray-700">
                    <CornerDownRight className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <span>Direct Specialization Pathway: </span>
                      <strong className="text-gray-950 font-sans">{matchResult.suggestion}</strong>
                    </div>
                  </div>
                </div>

                {/* Submit routing button action */}
                <div className="pt-2 border-t border-blue-100/40 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4">
                  <span className="text-[10px] text-gray-400 font-mono uppercase">
                    Matching symptoms: [{matchResult.matchedKeys.join(', ') || 'General query'}]
                  </span>
                  
                  <button
                    onClick={applySuggestions}
                    className="bg-[#0A3D91] hover:bg-[#00A884] text-white py-2.5 px-5 rounded-xl font-sans font-bold text-xs flex items-center justify-center space-x-2 shadow-xs hover:shadow-md transition-all self-end cursor-pointer"
                  >
                    <span>Load Ward in Booking Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
