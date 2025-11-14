import React, { use, useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import userImage from '../assets/user.jpg'
import { toast } from 'react-toastify'
import { AuthContext } from './provider/AuthProvider'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    console.log('logout');

    logOut()
      .then(() => {
        toast.success("your logged out sucessfully")

      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    
     <div className='flex flex-col md:flex-row justify-between items-center gap-5 w-full md:w-11/12 mx-auto mb-3 md:mb-0'>
      
      <div>
        <Link to="https://www.avma.org/" >
          <img className='w-24 md:w-[100px] h-24 rounded-full md:h-[100px]' src={logo} alt="" />
        </Link>

      </div>

      <div className='flex gap-5'>
        <NavLink to='/' className={({ isActive }) =>
          `font-semibold dark:text-white ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }>Home</NavLink>
        <NavLink to='/find-partners' className={({ isActive }) =>
          `font-semibold dark:text-white ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }>Find Partners</NavLink>
        
         {user && (
        <div className=''>
            <NavLink to='/profile' className={({ isActive }) =>
          `font-semibold dark:text-white ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }>Profile</NavLink>
        <NavLink to='/my-connections' className={({ isActive }) =>
          `font-semibold dark:text-white ml-3 ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }>My Connections</NavLink>
        </div>
            
          )}
        
      </div>



      <div className='gap-3 flex'>

        <div className="relative group flex flex-col gap-2">
         
          {user && <img referrerPolicy='no-refferer' className='w-12 flex flex-col rounded-full cursor-pointer' src={user?.photoURL ? user?.photoURL : userImage} alt="" />}
          {user?.displayName && (
            <p className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-300 text-gray-700 p-2 rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user.displayName}
            </p>
          )}
          {user?.email && (
            <p className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-300 text-gray-700 p-2 rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {user.email}
            </p>
          )}
        </div>


          {user ?
            (<button onClick={handleLogout} className="btn bg-blue-600 text-white"> Logout</button>
            ) : (
              <><Link to="/auth/login" className='btn bg-blue-600 text-white px-10'>login</Link>
                <Link to="/auth/register" className="btn  bg-blue-600 text-white"> Register</Link></>
            )}

{/* theme */}
<div className="hidden md:inline">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
            type="checkbox"
            className="toggle"
          />
        </div>
      </div>

    </div> 

  )
}

export default Navbar
