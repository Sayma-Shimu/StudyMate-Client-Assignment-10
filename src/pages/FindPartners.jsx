import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import axios from "axios";

const FindPartners = () => {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:3000/partners", {
          params: {
            search: search,
            sort: sortOrder,
          },
        });

        setPartners(response.data.data || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [search, sortOrder]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </button>

        <input
          type="text"
          placeholder="Search by subject..."
          className="px-4 py-2 border rounded-lg w-60"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

   
      {loading && (
        <p className="text-center text-lg font-semibold">Loading...</p>
      )}

     
      {!loading && partners.length === 0 && (
        <p className="text-center text-red-500 text-lg font-semibold">
          No partners found 
        </p>
      )}

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <ServiceCard
            key={partner._id}
            service={partner}
            showExperienceLevel={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FindPartners;
