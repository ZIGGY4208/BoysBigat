import React from 'react';
import { Link, Links } from 'react-router-dom';

// This is a React functional component called NavLinks
function NavLinks() {
  return (
    // Main container for the navigation links
    <div className='overflow-hidden'>
      
      {/* Unordered list to display navigation links horizontally */}
      <ul className="flex flex-row space-x-14">
        {/* Each list item represents a navigation link */}
        
        {/* Home link */}
        <Link to='/' className="font-poppins text-lg active:text-blue-950 text-white cursor-pointer hover:text-blue-950 font-normal">
          Home
        </Link>
        
        {/* About link */}
        <Link to='/About' className="font-poppins text-lg active:text-blue-950 text-white cursor-pointer hover:text-blue-950 font-normal">
          About
        </Link>
        
        {/* Events link */}
        <Link to='/Events' className="font-poppins text-lg active:text-blue-950 text-white cursor-pointer hover:text-blue-950 font-normal">
          Events
        </Link>
        
        {/* Organisation link */}
        <Link to='/Organisation' className="font-poppins text-lg active:text-blue-950 text-white cursor-pointer hover:text-blue-950 font-normal">
          Organisation
        </Link>
      </ul>

    </div>
  );
}

export default NavLinks;
