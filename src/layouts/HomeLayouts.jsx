import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <header>
        <Navbar />
        <hr className="h-0.5 bg-gray-100 border-none" />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default HomeLayouts
