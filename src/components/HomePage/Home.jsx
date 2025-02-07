import React from 'react';
import HeaderSection from './HeaderSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Cards from './Cards';
import FooterSection from './FooterSection';
import AboutSection from './AboutSection';
import Slider from './Slider';

const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-x-hidden ">
      <div className="relative bg-hero-section bg-cover bg-center h-[100%] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <HeaderSection />
          <Slider/>
        </div>
      
      </div>
      <div >
        <FirstSection/>
        <SecondSection/>
        <Cards/>
        <AboutSection/>
        <FooterSection/>
      </div>
    </div>
  );
};

export default Home;
