import React from "react";
import Image from "next/image";

export const SecondHero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white container mx-auto">
      {/* Left Side Content */}
      <div className="max-w-lg">
        <span className="text-pink-500 font-semibold text-lg uppercase tracking-wider">
          Our Experience
        </span>

        <h1 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
          Crafting <br />
          <span className="text-pink-500">Unforgettable</span> <br />
          Adventures
        </h1>

        <p className="text-gray-600 mt-4">
          We excel in curating remarkable journeys, specializing in outdoor
          destinations around the globe. With a wealth of experience, we bring
          adventures to life and invite you to embark on your own.
        </p>

        {/* Stats */}
        <div className="flex mt-6 space-x-6">
          {[
            { value: "1,000+", label: "outdoor destinations" },
            { value: "98%", label: "customer satisfaction" },
            { value: "15+", label: "Years Of Experience" },
          ].map(({ value, label }) => (
            <div key={value} className="text-center">
              <p className="text-pink-500 text-3xl font-bold">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side (Image with Floating Elements) */}
      <div className="relative mt-10 md:mt-0 w-[450px] flex items-center justify-center">
        {/* Circular Background */}
        <div className="absolute w-[350px] h-[350px] bg-blue-500 rounded-full opacity-20 -z-10"></div>

        {/* Main Image */}
        <Image
          src="/crazy.png"
          width={450}
          height={450}
          alt="Traveler"
          className="relative z-10"
          priority
        />

        {/* Floating Labels */}
        {[
          { text: "🏅 Best Adventures", position: "bottom-6 right-6" },
          { text: "🎉 best fun", position: "top-10 left-6" },
          { text: "⭐ 5000+ Customers", position: "-top-6 right-8" },
        ].map(({ text, position }) => (
          <div
            key={text}
            className={`absolute ${position} bg-white px-4 py-2 rounded-lg shadow-lg text-gray-700 font-semibold backdrop-blur-md flex items-center`}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};
