import React from "react";
import { Link } from "react-router";
const About = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">

      <section className="relative py-24 px-6 overflow-hidden bg-green-700">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h4 className="text-green-300 font-bold uppercase tracking-[0.3em] text-xs mb-4">Empowering Students</h4>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Building the Future of <br />
            <span className="text-green-300">Collaborative Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto font-light leading-relaxed">
            StudyMate isn't just a platform; it's a movement to ensure no student ever has to tackle a difficult subject alone. We bridge the gap between curiosity and mastery.
          </p>
        </div>
      </section>

      
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-green-600 font-bold text-sm uppercase tracking-widest mb-2">Our Origins</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Born in a Library, Built for the <span className="text-green-600">Digital Age</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              StudyMate started as a simple idea: why is it so hard to find someone who wants to study "Node.js" at 8 PM on a Tuesday? We realized that students perform 40% better when collaborating.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Using the **MERN Stack**, we built a real-time solution that allows students to find partners based on specific subjects, shared availability, and skill levels.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240715632-99045506af5b?q=80&w=800&auto=format&fit=crop" 
              alt="Students collaborating" 
              className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision - Card Layout */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-2xl mb-6 shadow-lg shadow-green-200 dark:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To eliminate academic isolation by providing an intuitive, secure, and goal-oriented platform where every student finds their perfect study match.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 flex items-center justify-center rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We envision a world where physical distance is no longer a barrier to education, and peer-to-peer learning becomes the global standard for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Floating Effect */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Students", val: "1.2k+" },
            { label: "Partner Matches", val: "850+" },
            { label: "Global Subjects", val: "40+" },
            { label: "Success Rate", val: "98%" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <h3 className="text-4xl font-black text-green-600 mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                {stat.val}
              </h3>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional CTA */}
      <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
            Ready to Find Your <span className="text-green-600 italic">Perfect Match?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Join thousands of students who are already learning faster and better together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-xl shadow-green-200 dark:shadow-none transition-all hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              to="/find-partners"
              className="px-10 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold transition-all"
            >
              Browse Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;