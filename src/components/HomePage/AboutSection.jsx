import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-screen min-h-screen p-10 md:p-20">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        We Are <span className="text-blue-500 ml-2">BoysBrigate</span>
      </h1>
      
      <div className="space-y-6 mt-6">
        {["LusDen", "Zen Court", "LusDen", "Zen Court"].map((title, index) => (
          <div key={index} className="w-full p-5 shadow-lg rounded-lg bg-white">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">magna aliqua. Ut</p>
              </div>
              <div></div>
            </div>
            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
