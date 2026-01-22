import React, { useState } from "react";
import { motion } from "framer-motion"; 

const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Study Partner",
    snippet: "Learn tips and strategies to find a study partner who matches your learning style and goals.",
    author: "Rafi Ahmed",
    date: "Jan 10, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5 Tips for Effective Online Learning",
    snippet: "Maximize your productivity and learning outcomes when studying online with these proven tips.",
    author: "Maya Islam",
    date: "Feb 5, 2026",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Benefits of Group Study Sessions",
    snippet: "Discover how group study sessions can help you retain information better and stay motivated.",
    author: "Tarek Hasan",
    date: "Mar 3, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Time Management for Students",
    snippet: "Learn how to plan your study schedule effectively to achieve better results with less stress.",
    author: "Sadia Rahman",
    date: "Apr 12, 2026",
    category: "Success",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop",
  },
];

const BlogCard = ({ blog }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
  >
    <div className="relative overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          {blog.category}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
        <span className="font-semibold text-green-600 dark:text-green-400">{blog.author}</span>
        <span>•</span>
        <span>{blog.date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
        {blog.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {blog.snippet}
      </p>

      <button className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-green-600 hover:text-white text-green-700 dark:text-green-300 font-bold rounded-xl transition-all duration-300 group/btn">
        Read Full Insight
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </motion.div>
);

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Education", "Tips", "Success"];

  const filteredBlogs = filter === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === filter);

  return (
    <section className="bg-[#fcfdfa] dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs">StudyMate Resources</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Knowledge <span className="text-green-600 underline decoration-green-200">Hub</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base">
            Expert strategies to help you find the right study partners and master your academic goals.
          </p>
        </div>

        {/* Category Tabs - Matches the 'Filter' logic requirement */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? "bg-green-600 text-white shadow-md scale-105" 
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-green-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;