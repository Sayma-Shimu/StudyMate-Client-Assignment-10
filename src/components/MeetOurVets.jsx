import React from "react";

const vets = [
  {
    id: 1,
    name: "Dr. Amina Rahman",
    specialty: "Pet Nutritionist",
    image: "https://i.ibb.co.com/3yVCQqCs/vet2.jpg"
  },

  {
    id: 2,
    name: "Dr. Zubair Hossain",
    specialty: "Veterinary Surgeon",
    image: "https://i.ibb.co.com/VcFNDDhV/jb.jpg"
  },

  {
    id: 3,
    name: "Dr. Tanisha Alam",
    specialty: "Pet Grooming Expert",
    image: "https://i.ibb.co.com/XrMgCgMn/vet1.png"
  }

];


const MeetOurVets = () => {
  return (
    <section className="my-16 w-11/12 mx-auto bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Meet Our Expert Vets
      </h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {vets.map(vet => (
          <div key={vet.id} className="card bg-base-100 shadow-md text-center p-4 hover:shadow-lg">
            <img src={vet.image} alt={vet.name} className="w-40 h-40 mx-auto rounded-full object-cover mb-3" />
            <h3 className="text-xl font-semibold">{vet.name}</h3>
            <p className="text-gray-600">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurVets;
