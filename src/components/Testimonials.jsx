// components/Testimonials.jsx
import React from "react";

// Minimal testimonial card
const TestimonialCard = ({ t }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border">
    <div className="flex items-center gap-4 mb-3">
      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold">{t.name}</div>
        <div className="text-xs text-gray-500">{t.study}</div>
      </div>
    </div>
    <p className="text-gray-700 text-sm">“{t.message}”</p>
    <div className="mt-3 text-yellow-500 font-semibold">{Array.from({length: t.rating}).map((_,i)=>(<span key={i}>★</span>))}</div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rafi Ahmed",
      study: "Physics • Intermediate",
      avatar: "https://i.pravatar.cc/150?img=12",
      message: "Found a great partner for exam prep — we study twice a week and my grades improved.",
      rating: 5,
    },
    {
      name: "Maya Islam",
      study: "English • Beginner",
      avatar: "https://i.pravatar.cc/150?img=8",
      message: "Easy to use and I found a supportive study buddy quickly.",
      rating: 4,
    },
    {
      name: "Tarek Hasan",
      study: "Math • Advanced",
      avatar: "https://i.pravatar.cc/150?img=5",
      message: "The matching and request features worked perfectly — highly recommended.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">What Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
