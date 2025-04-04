import React from "react";
import { Send } from "lucide-react";

export const Newsletter = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="bg-[#facd49] rounded-2xl px-6 py-12 w-full max-w-3xl text-center relative shadow-lg">
        <div className="absolute top-2 left-4 w-12 h-12">
          {/* aeroplane goes here  */}
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Sign up to our newsletter
        </h1>
        <p className="text-gray-700 mb-6">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>

        {/* Email Input */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full py-3 px-4 rounded-lg border bg-amber-50 border-gray-300 focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-gray-100 transition duration-200"
            />
            <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
