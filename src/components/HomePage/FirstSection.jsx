import React from 'react';

// This is a React functional component called FirstSection
const FirstSection = () => {
  return (
    // Main container for the entire section
    <div className='p-6 mt-[80px] overflow-x-hidden border-box mb-[100px]'>
      {/* Section heading */}
      <h2 className='flex items-center justify-center text-3xl'>
        Our <span className='ml-3 text-blue-500'>Slogans</span>
      </h2>
      {/* Subtitle below the heading */}
      <p className="flex items-center justify-center">
        These Are Our Code That Keeps Us Strong And Going!
      </p>
      
      {/* Container for the slogan cards */}
      <div className='flex items-center justify-center mt-10 pt-1 border'>
        {/* Wrapper for all the slogan cards */}
        <div className="flex justify-center flex-wrap gap-8">
          
          {/* Motto Card */}
          <div className="w-80 border bg-gray-100 flex flex-col items-center justify-start gap-3 p-4">
            {/* Motto image */}
            <img src="version.svg.png" alt="Anchor Image" className="w-[50px] mb-2" />
            {/* Motto title */}
            <h3 className="text-lg font-bold text-center">MOTTO</h3>
            {/* Motto description */}
            <p className="text-center text-sm">
              Sure And Stead Fast<br />
              Hebrews 6 : 19b
            </p>
            {/* Read More button */}
            <button className="hover:text-blue-500 font-medium">Read More</button>
          </div>

          {/* Objective Card */}
          <div className="w-80 border bg-gray-100 flex flex-col items-center justify-start gap-3 p-4">
            {/* Objective image */}
            <img src="version.svg.png" alt="Anchor Image" className="w-[50px] mb-2" />
            {/* Objective title */}
            <h3 className="text-lg font-bold text-center">OBJECTIVE</h3>
            {/* Objective description */}
            <p className="text-center text-sm leading-relaxed">
              The Advancement Of Christ's Kingdom Amongst Boys And The Promotion Of
              Habits Of Obedience, Discipline, Self-Respect, And All That Tends Towards A True Christian Manliness.
            </p>
            {/* Read More button */}
            <button className="hover:text-blue-500 font-medium">Read More</button>
          </div>

          {/* Aim Card */}
          <div className="w-80 border bg-gray-100 flex flex-col items-center justify-start gap-3 p-4">
            {/* Aim image */}
            <img src="version.svg.png" alt="Anchor Image" className="w-[50px] mb-2" />
            {/* Aim title */}
            <h3 className="text-lg font-bold text-center">AIM</h3>
            {/* Aim description */}
            <p className="text-center text-sm">
              Preach The Gospel, Show Love, And Win More Boys To Christ.
            </p>
            {/* Read More button */}
            <button className="hover:text-blue-500 font-medium">Read More</button>
          </div>

        </div>
      </div>

      {/* 'View All' button at the bottom */}
      <div className='flex items-center justify-center my-8'>
        <button className='px-[45px] py-[10px] text-white bg-blue-950 hover:bg-blue-500 transition duration-300'>
          View All
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
