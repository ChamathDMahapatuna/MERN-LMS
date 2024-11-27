import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ userRole }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/">LMS</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        {userRole === 'Student' && (
          <>
            <li>
              <Link to="/my-courses">My Courses</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        {userRole === 'Admin' && (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/manage-courses">Manage Courses</Link>
            </li>
            <li>
              <Link to="/manage-users">Manage Users</Link>
            </li>
          </>
        )}
        {!userRole && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {userRole && (
          <li>
            <button className="bg-red-500 px-3 py-1 rounded" onClick={() => console.log('Logout')}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;