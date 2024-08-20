import React, {useeffect , useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import Navbar from '../components/shared/navbar'
import Footer from '../components/shared/footer'
import HomeHero from '../components/HomeHero'
import CourseDetails from '../components/CourseDetails'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <div className="bg-white">
    <HomeHero />
    <CourseDetails />
    <AboutUs /> 
    </div>

  )
}
export default Home