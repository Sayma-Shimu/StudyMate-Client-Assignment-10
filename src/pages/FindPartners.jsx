import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import axios from "axios";
import { FiSearch, FiSliders } from "react-icons/fi"; 

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    const delayDebounceFn = setTimeout(() => {
      fetchPartners();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, sortOrder]);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://study-mates-projects.vercel.app/partners", {
        params: {
          search: search,
          sort: sortOrder,
        },
      });
      setPartners(response.data.data || response.data || []);
    } catch (error) {
      console.error("Error fetching partners:", error);
      setPartners([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfa] dark:bg-gray-950 transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
            Find Your <span className="text-green-600">Perfect Study Match</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Browse through experts and peers ready to collaborate on your next big project.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 lg:p-10">
        {/* Controls: Search and Sort */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" />
            <input
              type="text"
              placeholder="Search by subject (e.g. React, Math)..."
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all dark:text-white shadow-sm"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Button */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-green-500 transition-all shadow-sm active:scale-95 group"
          >
            <FiSliders className="text-green-600" />
            <span className="font-bold text-gray-700 dark:text-gray-200">
              Sort: {sortOrder === "asc" ? "Exp. Low to High" : "Exp. High to Low"}
            </span>
          </button>
        </div>

        {/* Results Area */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
           
            <div className="w-12 h-12 border-4 border-green-100 border-t-green-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500 font-medium">Scanning for partners...</p>
          </div>
        ) : (
          <>
            {partners.length === 0 ? (
              <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">No Partners Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search terms or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner) => (
                  <div key={partner._id} className="hover:-translate-y-2 transition-transform duration-300">
                    <ServiceCard
                      service={partner}
                      showExperienceLevel={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FindPartners;