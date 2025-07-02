import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-blue-600 text-white mb-8">
      <div className="font-bold text-xl">LMS</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        <Link to="/course/create" className="hover:underline">Add Course</Link>
      </div>
    </nav>
  );
}
