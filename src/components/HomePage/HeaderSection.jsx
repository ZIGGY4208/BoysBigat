import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'

function HeaderSection() {
  return (
    <div className=' w-full h-[90px] px-[29px] items-center flex justify-between '>
      <Logo/>
      <NavLinks/>
    </div>
  )
}

export default HeaderSection
