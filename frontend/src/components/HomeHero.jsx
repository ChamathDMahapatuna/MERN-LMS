import React from 'react'

function HomeHero() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="LMS Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-blue-700">MERN LMS</span>
        </div>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/courses" className="text-gray-700 hover:text-blue-600">Courses</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Welcome to MERN LMS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Empower your learning journey with our modern, interactive, and easy-to-use platform. Explore courses, track progress, and join a vibrant learning community.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded shadow hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 6a8.5 8.5 0 01-7-4.5M12 21a8.5 8.5 0 007-4.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Wide Range of Courses</h3>
            <p className="text-gray-600 text-center">Choose from a variety of subjects and skill levels designed by experts.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 17l4 4 4-4m0-5V3m-4 4a9 9 0 110 18 9 9 0 010-18z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-center">Monitor your learning progress and achievements with ease.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M4 4v16c0 1.1.9 2 2 2h12a2 2 0 002-2V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Community Support</h3>
            <p className="text-gray-600 text-center">Engage with peers and instructors through forums and Q&A.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MERN LMS. All rights reserved.
      </footer>
    </div>
  
  )
}

export default HomeHero