import React from "react";

const tips = [
  {
    id: 1,
    title: "Keep Paws Dry & Clean",
    description: "Wipe your pet’s paws after walks to avoid ice and salt irritation.",
    image: "https://i.ibb.co.com/5h2QnFfv/Keep-Paws-Dry-Clean.jpg"
  },

  {
    id: 2,
    title: "Provide Warm Bedding",
    description: "Use soft, warm blankets or heated beds to keep them cozy.",
    image: "https://i.ibb.co.com/DDK0NKHp/Provide-Warm-Bedding.jpg"
  },

  {
    id: 3,
    title: "Balanced Winter Diet",
    description: "Give them extra calories to stay energetic and warm in the cold.",
    image: "https://i.ibb.co.com/C3yRzWcR/Balanced-Winter-Diet.jpg"
  }

];


const WinterCareTips = () => {
  return (
    <section className="my-16 w-11/12 mx-auto bg-base-200 ">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Winter Care Tips for Pets
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map(tip => (
          <div key={tip.id} className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <img src={tip.image} alt={tip.title} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterCareTips;
