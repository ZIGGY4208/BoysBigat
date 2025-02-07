import React from 'react'
import Logo from '../HomePage/Logo'
import NavLinks from '../HomePage/NavLinks'
import Cards from '../HomePage/Cards'
import FooterSection from '../HomePage/FooterSection'

const Organisation = () => {
  return (
    <div>
      <div className='w-full h-[100px] p-3 flex justify-between items-center bg-gradient-to-r from-white to-gray-500'>
        <Logo/>
        <NavLinks/>
      </div>
      <div>
        <Cards/>
        <FooterSection/>
      </div>
    </div>
  )
}

export default Organisation
