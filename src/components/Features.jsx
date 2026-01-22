import React from "react";
import { 
  FaUserFriends, 
  FaFilter, 
  FaComments, 
  FaLock, 
  FaMobileAlt, 
  FaClock,
  FaStar,
  FaSyncAlt,
  FaCheckCircle
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaUserFriends />,
    title: "Verified Study Partners",
    desc: "All users are authenticated to ensure a safe and trusted learning environment."
  },
  {
    id: 2,
    icon: <FaFilter />,
    title: "Advanced Filtering",
    desc: "Filter partners by subject, availability, study level, and preferences."
  },
  {
    id: 3,
    icon: <FaComments />,
    title: "Real-Time Chat",
    desc: "Chat instantly with your study partners and collaborate effectively."
  },
  {
    id: 4,
    icon: <FaLock />,
    title: "Secure Platform",
    desc: "Your data is protected with industry-standard security practices."
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    desc: "Use StudyMate seamlessly on mobile, tablet, and desktop devices."
  },
  {
    id: 6,
    icon: <FaClock />,
    title: "Smart Scheduling",
    desc: "Plan and manage your study sessions without conflicts."
  },
  {
    id: 7,
    icon: <FaStar />,
    title: "Rating & Reviews",
    desc: "Rate your partners and read reviews before connecting."
  },
  {
    id: 8,
    icon: <FaSyncAlt />,
    title: "Real-Time Updates",
    desc: "Get instant notifications on requests, approvals, and messages."
  }
];

const Features = () => {
  return (
    <div className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h4 className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">Core Capabilities</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Platform <span className="text-green-600">Features</span>
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            StudyMate is packed with powerful features that make finding and collaborating with study partners easier than ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-gray-50 dark:bg-gray-900 border border-transparent dark:border-gray-800 p-8 rounded-3xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/30 transition-all duration-500 flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Highlight Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-gray-800 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
              Why StudyMate is <span className="text-green-600 italic">Different?</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              Unlike traditional study groups, StudyMate uses smart matching and secure authentication to build meaningful learning partnerships.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Intelligent Suggestions",
                "Fast Connection Process",
                "Modern React UI",
                "Firebase Authentication"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-semibold">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Build Better Study Habits
            </h4>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Consistency and collaboration are the keys to success. Join thousands of students achieving their goals today.
            </p>
            <button className="w-full sm:w-auto px-10 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
              Explore Partners Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;