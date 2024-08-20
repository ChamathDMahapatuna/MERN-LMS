import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import Home from './pages/Home' 
import CreateCourse from './pages/CreateCourse'
import DeleteCourse from './pages/DeleteCourse'
import UpdateCourse from './pages/UpdateCourse'
import ShowCourse from './pages/ShowCourse'
import Footer from './components/shared/footer'
import Navbar from './components/shared/navbar'

const App = () => {
  return (
    <div className="bg-white">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/create" element={<CreateCourse />} />
      <Route path="/course/delete/:id" element={<DeleteCourse />} />
      <Route path="/course/edit/:id" element={<UpdateCourse />} />
      <Route path="/course/details/:id" element={<ShowCourse />} />
    </Routes>
    <Footer />
    </div>
  )
}
export default App