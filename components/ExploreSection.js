import React from "react";
import Image from "next/image";

const ExploreSection = ({ destinations }) => {  // FIX: Destructure destinations
  return (
    <section className="px-10 py-16">
      {/* Section Title */}
      <h2 className="text-pink-500 font-semibold text-lg">
        CHOOSE YOUR NEXT DESTINATION
      </h2>
      <h1 className="text-3xl font-bold text-gray-900">Explore top destinations</h1>

<>
<div className="flex justify-center mt-4"> </div>
<div className="flex justify-center mt-4"></div>
</>
      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-transparent rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            {/* Destination Image */}
            <div className="relative">
              <Image
                src={destination.image}
                width={300}
                height={200}
                alt={destination.title}
                className="rounded-xl w-full h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg">
                ⭐ {destination.rating}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold mt-3">{destination.title}</h3>
            <p className="text-gray-500 text-sm">{destination.description}</p>
            <p className="text-gray-700 font-semibold mt-2">{destination.location}</p>

            {/* Price & Button */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-purple-600 font-bold text-lg">
                {destination.price}
              </span>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
