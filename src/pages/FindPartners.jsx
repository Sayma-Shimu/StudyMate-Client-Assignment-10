import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { useLoaderData } from "react-router";

const FindPartners = () => {
  const data = useLoaderData(); 

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

 
  const filtered = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/*  Search + Sort Buttons */}
      <div className="flex justify-between mb-6">
        
        {/* Sort Button */}
        <button
          onClick={() =>
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search partners..."
          className="px-4 py-2 border rounded-lg w-60"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*  Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default FindPartners;
