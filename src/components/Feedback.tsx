import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, Award, User, CheckCircle, Heart } from 'lucide-react';
import { testimonialsData } from '../data/hospitalData';
import { Testimonial } from '../types';

export default function Feedback() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Lagos Resident',
    content: '',
    rating: 5
  });
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const cached = localStorage.getItem('matrix_prime_reviews');
      if (cached) {
        setReviews(JSON.parse(cached));
      } else {
        setReviews(testimonialsData);
        localStorage.setItem('matrix_prime_reviews', JSON.stringify(testimonialsData));
      }
    } catch (e) {
      setReviews(testimonialsData);
    }
  }, []);

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) {
      alert('Kindly fill in all fields to record your review.');
      return;
    }

    const reviewObj: Testimonial = {
      id: `REV-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Patient Care Member',
      content: newReview.content,
      rating: newReview.rating,
      date: 'Just now'
    };

    const updated = [reviewObj, ...reviews];
    setReviews(updated);
    localStorage.setItem('matrix_prime_reviews', JSON.stringify(updated));

    setSuccess(true);
    setNewReview({
      name: '',
      role: 'Lagos Resident',
      content: '',
      rating: 5
    });

    setTimeout(() => {
      setSuccess(false);
      setShowForm(false);
    }, 2000);
  };

  const filteredReviews = filterRating === 'all'
    ? reviews
    : reviews.filter(rev => rev.rating === filterRating);

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50/50 relative overflow-hidden font-sans" id="testimonials">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-[#00A884] uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
              Patient Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#011438] tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Real opinions, patient feedback, and review summaries submitted by families seeking recovery in our clinic.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="shrink-0 bg-[#0A3D91] hover:bg-[#083075] text-white py-2.5 px-6 rounded-xl font-sans font-bold text-xs shadow-md transition-all cursor-pointer select-none"
          >
            {showForm ? 'View All Stories' : 'Submit Your Feedback'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showForm ? (
            /* Submittal Review panel Form */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white border border-gray-150 rounded-3xl p-6 md:p-8 max-w-xl mx-auto shadow-xl"
              id="feedback-form-card"
            >
              <h3 className="text-gray-900 font-bold text-lg mb-6 flex items-center space-x-2">
                <MessageSquareCode className="w-5 h-5 text-[#00A884]" />
                <span>Write Your Patient Review</span>
              </h3>

              {success ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-[#00A884] mx-auto animate-bounce" />
                  <span className="block font-bold text-gray-900 text-base">Feedback Saved Successfully</span>
                  <p className="text-gray-500 text-xs">Thank you for sharing your experience. Your story inspires our clinical staff!</p>
                </div>
              ) : (
                <form onSubmit={submitReview} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 tracking-wide uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Samuel Okon"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-2.5 px-4 text-xs md:text-sm focus:border-[#011438] outline-none font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-700 tracking-wide uppercase">Your Location / Title</label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview(prev => ({ ...prev, role: e.target.value }))}
                        placeholder="e.g. Isheri Resident"
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-2.5 px-4 text-xs md:text-sm focus:border-[#011438] outline-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Rating Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 tracking-wide uppercase">Rate Your Medical Experience</label>
                    <div className="flex items-center space-x-2.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-7 h-7 cursor-pointer ${
                              star <= newReview.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-200'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase ml-2">({newReview.rating} Stars Approved)</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700 tracking-wide uppercase">Clinical Experience Story *</label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.content}
                      onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Describe the medical consultation, triage speed, nurses friendliness, and treatment outcomes..."
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-2.5 px-4 text-xs md:text-sm focus:border-[#011438] outline-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00A884] hover:bg-[#009171] text-white py-3 rounded-lg font-sans font-bold text-xs select-none shadow-md cursor-pointer text-center"
                  >
                    Post Patient Story
                  </button>
                </form>
              )}
            </motion.div>
          ) : (
            /* Testimonial cards grid loop */
            <div className="space-y-10" id="reviews-board">
              {/* Filter controls by Rating */}
              <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-4 filter-selector">
                <span className="text-xs font-bold text-gray-400 font-mono uppercase tracking-wide">Filter Star Rating:</span>
                <div className="flex items-center gap-1.5">
                  {['all', 5, 4, 3].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setFilterRating(rate as any)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold font-sans transition-all cursor-pointer ${
                        filterRating === rate
                          ? 'bg-amber-100 text-amber-800 border-amber-200 border'
                          : 'bg-white text-gray-500 border border-gray-100/80 hover:bg-gray-50'
                      }`}
                    >
                      {rate === 'all' ? 'All Reviews' : `${rate} ★`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid cards content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredReviews.map((rev, idx) => (
                    <motion.div
                      layout
                      key={rev.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="bg-white border border-gray-100/80 p-6 rounded-2xl shadow-xs flex flex-col justify-between hover:border-[#00A884]/20 transition-all group"
                    >
                      <div>
                        {/* Rating stars display */}
                        <div className="flex items-center space-x-1 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4.5 h-4.5 ${
                                i < rev.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-gray-150'
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-gray-600 text-xs md:text-sm font-sans leading-relaxed italic mb-6">
                          "{rev.content}"
                        </p>
                      </div>

                      <div className="border-t border-gray-50 pt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 text-[#0A3D91] font-bold text-xs">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block font-bold text-gray-900 text-xs leading-none mb-1">{rev.name}</span>
                            <span className="block text-gray-400 text-[10px] font-mono leading-none">{rev.role}</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold uppercase">{rev.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
