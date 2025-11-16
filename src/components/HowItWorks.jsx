// components/HowItWorks.jsx
import React from "react";
import { FaSearch, FaUserPlus, FaHandshake } from "react-icons/fa";

const Step = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">How StudyMate Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step
            icon={<FaSearch />}
            title="Find Partners"
            desc="Search partners by subject, skill level, or location. Use filters and sorting to discover the best matches."
          />

          <Step
            icon={<FaUserPlus />}
            title="Connect & Request"
            desc="Send a partner request to start collaborating. Each request increases the partner’s connections count."
          />

          <Step
            icon={<FaHandshake />}
            title="Study Together"
            desc="Chat, plan sessions, and learn together. Leave ratings and feedback to help others find the right partners."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
