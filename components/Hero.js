import React from 'react'
import Image from 'next/image'
export const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white">
    {/* Left Side: Text & Buttons */}
    <div className="max-w-lg text-left">
      <span className="text-pink-500 font-semibold text-lg uppercase tracking-wider bg-pink-100 px-3 py-1 rounded-full">
        🌍 Explore the world!
      </span>

      <h1 className="text-5xl font-bold text-gray-900 mt-4">
        Travel <span className="text-pink-500">top</span> <br />
        <span className="text-pink-500">destination</span> <br />
        of the world
      </h1>

      <p className="text-gray-600 mt-4">
        Where adventure meets comfort. We create unforgettable travel experiences.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg transition hover:scale-105">
          Get Started
        </button>
        <button className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg transition hover:bg-gray-200">
          Watch Demo
        </button>
      </div>

      {/* Logos */}
      <div className="flex space-x-6 mt-8 text-gray-500">
        <span className="text-lg font-semibold">Expedia</span>
        <span className="text-lg font-semibold">TripAdvisor</span>
        <span className="text-lg font-semibold">Booking.com</span>
        <span className="text-lg font-semibold">Orbitz</span>
      </div>
    </div>

    {/* Right Side: Hero Image with Blue Circle */}
    <div className="relative mt-10 md:mt-0 w-[550px] h-[680px] flex items-center justify-center">
      {/* Blue Circle */}
      <div className="absolute w-[450px] h-[450px] bg-blue-500 rounded-full opacity-20 z-0"></div>

      {/* Woman Image */}
      <Image
        src="/hero.png"
        width={522}
        height={683}
        alt="Traveler"
        className="relative z-10"
        priority
      />

      {/* Floating Labels */}
      <div className="absolute -bottom-8 left-8 bg-white px-4 py-2 rounded-lg shadow-lg text-gray-700 font-semibold">
        🏆 Top Places
      </div>
      <div className="absolute -top-6 right-8 bg-white px-4 py-2 rounded-lg shadow-lg text-gray-700 font-semibold">
        🏨 Top Hotels
      </div>
      <div className="absolute -bottom-6 right-10 bg-white px-4 py-2 rounded-lg shadow-lg text-gray-700 font-semibold">
        ⭐ 5000+ Customers
      </div>
    </div>
  </section>
  )
}
