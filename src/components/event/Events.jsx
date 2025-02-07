import React from "react";
import HeaderSection from "../HomePage/HeaderSection";
import Logo from "../HomePage/Logo";
import NavLinks from "../HomePage/NavLinks";
import FooterSection from "../HomePage/FooterSection";

const Events = () => {
  const events = [
    { title: "FIELD BB EXCO MEETING" },
    { title: "FIELD BB RALLY" },
    { title: "FIELD BB CAMP" },
  ];

  return (
    <div className="overflow-hidden">
      <div className='w-full h-[100px] p-3 flex justify-between items-center bg-gradient-to-r from-white to-gray-500 overflow-auto'>
        <Logo/>
        <NavLinks/>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-3xl font-bold text-center">
        Upcoming <span className="text-blue-500">Events</span>
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-lg">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            {/* <img src="event+.png" alt="Event Icon" className="w-16 h-16" /> */}
            <img src="event.png" alt="" className="w-[80px] h-[80px]"/>
            <h3 className="font-bold text-lg mt-4">{event.title}</h3>
            <p className="text-gray-600 mt-2">
              Fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <a href="#" className="text-blue-600 font-bold mt-4">Read More</a>
          </div>
        ))}
      </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          View All
        </button>
      </div>
    <FooterSection/>
    </div>
  );
};

export default Events;
