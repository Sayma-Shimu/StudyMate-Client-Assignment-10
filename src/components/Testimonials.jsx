import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ t }) => (
  <div className="min-w-[320px] max-w-[320px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 mx-4 flex flex-col group">
    {/* Quote Icon */}
    <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
      <FaQuoteLeft className="text-green-600 dark:text-green-400 group-hover:text-white text-sm" />
    </div>

    {/* Message */}
    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
      “{t.message}”
    </p>

    <div className="flex-grow"></div>

    {/* User Info */}
    <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-gray-800">
      <div className="relative">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-12 h-12 rounded-2xl object-cover border-2 border-green-100 dark:border-gray-700"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
          {t.name}
        </h4>
        <p className="text-[10px] uppercase tracking-widest font-semibold text-green-600 dark:text-green-400">
          {t.study}
        </p>
      </div>
    </div>

    {/* Rating */}
    <div className="mt-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar 
          key={i} 
          className={`text-[10px] ${i < t.rating ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-700'}`} 
        />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    { name: "Rafi Ahmed", study: "Physics", avatar: "https://i.pravatar.cc/150?img=12", message: "Found a great partner for exam prep. My grades improved significantly!", rating: 5 },
    { name: "Maya Islam", study: "English", avatar: "https://i.pravatar.cc/150?img=8", message: "Very easy platform, I found a study buddy in less than 24 hours.", rating: 4 },
    { name: "Tarek Hasan", study: "Mathematics", avatar: "https://i.pravatar.cc/150?img=5", message: "Perfect matching system. It's much better than studying alone.", rating: 5 },
    { name: "Nusrat Jahan", study: "Biology", avatar: "https://i.pravatar.cc/150?img=32", message: "The UI is clean and finding partners is super easy and safe.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-100 dark:bg-green-900/10 rounded-full blur-3xl -translate-y-1/2 -ml-32"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">Success Stories</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            What Students <span className="text-green-600">Say</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Continuous Marquee Wrapper */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
          
          {/* Shadow Fades for professional look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent"></div>
        </div>
      </div>

      <style>
        {`
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;