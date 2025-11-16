import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../components/ServiceCard";

const FindPartners = () => {
  const data = useLoaderData();

  // Search (Subject ভিত্তিক)
  const [search, setSearch] = useState("");

  // Sort (Experience ভিত্তিক)
  const [sortOrder, setSortOrder] = useState("asc"); // asc = low → high

  // Filter by subject
  const filtered = data.filter((p) =>
    p.subject.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by experience level
  const sorted = [...filtered].sort((a, b) => {
    const expA = Number(a.experienceLevel || 0);
    const expB = Number(b.experienceLevel || 0);

    return sortOrder === "asc" ? expA - expB : expB - expA;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search + Sort */}
      <div className="flex justify-between mb-6">

        {/* Sort Button */}
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sort by Experience: {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by subject..."
          className="px-4 py-2 border rounded-lg w-60"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map((partner) => (
          <ServiceCard key={partner._id} service={partner} />
        ))}
      </div>
    </div>
  );
};

export default FindPartners;
