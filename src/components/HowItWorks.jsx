import React from "react";
import { FaSearch, FaUserPlus, FaHandshake } from "react-icons/fa";

const Step = ({ icon, title, desc, step }) => (
  <div className="relative group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 text-center flex flex-col h-full z-10">
    
    {/* Step Badge */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg z-20">
      STEP {step}
    </div>

    {/* Animated Icon Circle */}
    <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-3xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
      {icon}
    </div>

    {/* Content */}
    <h3 className="font-extrabold text-xl text-gray-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
      {desc}
    </p>

    <div className="flex-grow"></div>
    
    {/* Decorative Bottom Line */}
    <div className="w-12 h-1 bg-green-100 dark:bg-gray-700 mx-auto mt-6 rounded-full group-hover:w-24 group-hover:bg-green-500 transition-all duration-500"></div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 dark:bg-green-900/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -ml-36 -mb-36"></div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h4 className="text-green-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">Simple Process</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            How <span className="text-green-600">StudyMate</span> Works
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Only visible on MD screens) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-green-200 dark:border-gray-800 -translate-y-1/2 z-0"></div>

          <Step
            step="01"
            icon={<FaSearch />}
            title="Search Subject"
            desc="Explore our vast community and find partners by subjects like Programming, Math, or Languages."
          />

          <Step
            step="02"
            icon={<FaUserPlus />}
            title="Send Request"
            desc="Send a collaboration request with one click. Our platform notifies the partner instantly to connect."
          />

          <Step
            step="03"
            icon={<FaHandshake />}
            title="Collaborate"
            desc="Start your session, share knowledge, and boost your learning outcomes through group efforts."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;