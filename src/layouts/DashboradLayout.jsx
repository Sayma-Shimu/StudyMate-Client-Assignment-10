import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/dashboard/Sidebar'


const DashboradLayout = () => {
  return (
    <div>
      <div className='relative min-h-screen md:flex bg-white' >
        <Sidebar />
        <main className='flex-1' >
          <Outlet />
        </main>
      </div>
      
    </div>
  )
}

export default DashboradLayout