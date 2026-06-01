import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { galleryData } from '../data/hospitalData';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { name: 'All Spaces', value: 'all' },
    { name: 'Reception & Access', value: 'Reception Area' },
    { name: 'Consultations', value: 'Consultation Rooms' },
    { name: 'Clinical Wards', value: 'Maternity Ward,Pediatric Unit,Operating Theatre' },
    { name: 'Diagnostic Labs / Tech', value: 'Laboratory,Pharmacy' }
  ];

  const filterItem = (item: GalleryItem) => {
    if (activeFilter === 'all') return true;
    const values = activeFilter.split(',');
    return values.includes(item.category);
  };

  const filteredGallery = galleryData.filter(filterItem);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
  };

  return (
    <section className="py-20 bg-gray-50/50 relative font-sans" id="gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-[#0A3D91] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Hospital Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011438] tracking-tight">
              Hospital Facilities Gallery
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Empowering recovery through highly sanitary, beautifully constructed, and air-conditioned private medical centers. Take a virtual facility tour below.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-1.5 bg-sky-50 text-sky-800 px-3.5 py-2 rounded-xl border border-sky-100 text-xs font-mono font-bold">
            <HelpCircle className="w-4 h-4 text-sky-700" />
            <span>Click any image to enter walkthrough</span>
          </div>
        </div>

        {/* Filters Panel bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-1.5" id="gallery-tabs">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setActiveFilter(f.value);
                setLightboxIndex(null);
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all focus:outline-none cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-[#00A884] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="gallery-grid-canvas">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(index)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#0A3D91]/20 hover:shadow-2xl transition-all cursor-pointer group"
              >
                {/* Image panel Container */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 border-b border-gray-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Category tag bubble */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0A3D91] border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold shadow-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base tracking-tight mb-2 group-hover:text-[#0A3D91] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs lines-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Walkthrough Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
            <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
              {/* Back dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-gray-950/90 backdrop-blur-md"
              />

              {/* Close Button above */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Exit walkthrough"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Controller Navigation left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Expanded Image Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10 flex flex-col items-stretch"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Visual container frame */}
                <div className="aspect-[16/10] md:aspect-[16/9] w-full relative bg-gray-900">
                  <img
                    src={filteredGallery[lightboxIndex].image}
                    alt={filteredGallery[lightboxIndex].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info board section content */}
                <div className="bg-white p-6 md:p-8 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono tracking-wider text-[#00A884] bg-emerald-50 px-2.5 py-1 rounded-md font-bold uppercase">
                      {filteredGallery[lightboxIndex].category}
                    </span>
                    <span className="text-gray-300 font-mono text-xs">|</span>
                    <span className="text-gray-400 text-xs font-mono font-medium">Matrix Walkthrough index {lightboxIndex + 1} of {filteredGallery.length}</span>
                  </div>
                  <h3 className="text-gray-950 font-bold text-base md:text-lg tracking-tight">
                    {filteredGallery[lightboxIndex].title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {filteredGallery[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Controller Navigation right */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
