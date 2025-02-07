import React from 'react'
import Logo from '../HomePage/Logo'
import NavLinks from '../HomePage/NavLinks'
import Cards from '../HomePage/Cards'
import FooterSection from '../HomePage/FooterSection'
import SecondSection from '../HomePage/SecondSection'

const About = () => {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-[100px] p-3 flex justify-between items-center bg-gradient-to-r from-white to-gray-500 overflow-auto'>
        <Logo/>
        <NavLinks/>
      </div>
      <div>
        <SecondSection/>
        <FooterSection/>
      </div>
    </div>
  )
}

export default About
