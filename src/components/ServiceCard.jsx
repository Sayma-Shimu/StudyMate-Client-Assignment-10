import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";


const ServiceCard = ({ service }) => {
  // const { image, serviceName, rating, price } = service;
 
  
 
  

  return (
   <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all p-5 border border-gray-200 dark:border-gray-700 flex gap-5 items-start">


{/* LEFT SIDE — IMAGE */}
<div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
<img
src={service.profileImage}
alt={service.name}
className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
/>
</div>


{/* RIGHT SIDE — ALL DETAILS */}
<div className="flex flex-col justify-between flex-grow">


{/* Name */}
<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
{service.name}
</h3>


{/* Subject */}
<p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
Subject: <span className="font-medium text-gray-800 dark:text-gray-200">{service.subject}</span>
</p>


{/* Study Mode + Experience */}
<div className="flex gap-3 mb-3">
<div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-lg font-medium">
{service.studyMode}
</div>
<div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-lg font-medium">
{service.experienceLevel}
</div>
</div>


{/* Rating */}
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<Star size={18} fill="currentColor" />
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
{service.rating}
</span>
</div>


{/* View Profile Button */}
<button className="mt-auto w-full py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow hover:opacity-90 transition">
View Profile
</button>
</div>
</div>


  );
};

export default ServiceCard;
