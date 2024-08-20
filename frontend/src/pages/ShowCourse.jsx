import React from 'react'
import { Link } from 'react-router-dom'

function ShowCourse() {
  return (
    
    <div>
      <h1>ShowCourse</h1>
   {/* Main Content */}
   <main className="container mx-auto flex-grow py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to the Learning Management System</h2>
        <p className="text-lg text-gray-600">Your hub for all learning activities</p>
      </div>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Course 1</h3>
       <p className="text-gray-700 mb-4">Description of course 1</p>
  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Course</button>
     </div>
     <div className="bg-white p-6 rounded-lg shadow-md">
       <h3 className="text-2xl font-semibold mb-2">Course 2</h3>
       <p className="text-gray-700 mb-4">Description of course 2</p>
       <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Course</button>
     </div>
     <div className="bg-white p-6 rounded-lg shadow-md">
       <h3 className="text-2xl font-semibold mb-2">Course 3</h3>
       <p className="text-gray-700 mb-4">Description of course 3</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Course</button>
     </div>
     {/* Add more courses as needed */}
   </div>
   </main>
    </div>
  )
}

export default ShowCourse