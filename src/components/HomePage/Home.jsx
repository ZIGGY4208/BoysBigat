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
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="bg-hero-section bg-cover bg-center h-screen w-full flex flex-col justify-center">
        <div className="bg-black bg-opacity-50 w-full h-full ">
          <div>
            <HeaderSection/>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <Slider/>
          </div>
        </div>
      </div>
      <div>
        <FirstSection/>
        <SecondSection />
        <Cards/>
        <AboutSection/>
        <FooterSection/>
      </div>
    </div>
  );
};

export default Home;
