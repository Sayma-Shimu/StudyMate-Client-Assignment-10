import React from 'react'
import { FaBoxOpen, FaChartBar, FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
const UserMenu = () => {
    return (
        <div className=' '>
            <aside className=''>
                <div>
                 <h1>user</h1>
                    <nav className='mt-6'>
                        <ul>
                            <li>
                                <NavLink
                                    to="/dashboard/my-connections"
                                     className={({ isActive }) =>
                                `flex items-center gap-5 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${isActive ? "bg-primary text-white" : "hover:bg-base-200"}`}
                                >
                                    <FaBoxOpen className="text-2xl" />
                                    <span>MY Connections</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>


            </aside>
        </div>
    )
}
export default UserMenu