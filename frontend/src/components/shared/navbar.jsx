import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
    <div className="container mx-auto flex justify-between relative items-center py-4 px-20 bg-transparent ">
      
     
      <div className="py-5 ml-auto font-sans space-x-12">

          <a href="#section1" className="text-LMS_Purple font-sans font-bold hover:text-gray-300">
          Home
          </a>
          <Link to="/" className="text-LMS_Purple font-sans font-bold hover:text-gray-300">
          Courses
        </Link>
          <a href="#section2" className="text-LMS_Purple font-sans font-bold hover:text-gray-300">
          About
          </a>
          <a href="#section3" className="text-LMS_Purple font-sans font-bold hover:text-gray-300">
          Course Details
          </a>
          <a href="#section4" className="text-LMS_Purple font-sans font-bold hover:text-gray-300">
          Contact
          </a>
         
        </div>

        

    </div>
  </nav>
  )
}

export default Navbar