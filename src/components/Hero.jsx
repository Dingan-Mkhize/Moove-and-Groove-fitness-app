import React from 'react'
import Typed from "react-typed"

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 italic">
          Move & Groove
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            You were born to
          </p>
          <Typed
            className="text-[#00df9a] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["MOVE!", "GROOVE!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 italic">
          Your no fuss, flexiable, fitness app. Keep track of every move, so you
          never miss the groove!
        </p>
        <div className="flex space-x-4 justify-between mx-auto">
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Log In
            </button>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Sign Up
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero