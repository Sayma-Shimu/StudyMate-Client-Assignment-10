import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FaHome, FaCog, FaSignOutAlt, FaBoxOpen } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const mainLinks = [
    {
      name: "Dashboard Overview",
      path: "/dashboard/overview",
      icon: <FaHome className="text-2xl" />,
    },
  ];

  const userLinks = [
    {
      name: "My Connections",
      path: "/dashboard/my-connections",
      icon: <FaBoxOpen className="text-2xl" />,
    },
    // Add more user-specific links here
  ];

  return (
    <aside className="w-80 min-h-screen bg-white dark:bg-gray-900 shadow-2xl flex flex-col border-r border-gray-200 dark:border-gray-700">
      
      {/* Logo Section */}
      <div className="p-8 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center gap-5">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
            SM
          </div>
          <div>
            <h2 className="text-3xl font-black text-green-700 dark:text-green-400">
              StudyMate
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Dashboard
            </p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-8 px-6 overflow-y-auto">
        <ul className="space-y-3">
          {mainLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-4 px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-white shadow-inner"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}

          {/* User Menu */}
          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
            {userLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      isActive
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-white shadow-inner"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </div>
        </ul>
      </nav>

      {/* Bottom Profile / Logout */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-semibold"
          >
            <FaCog className="text-xl" />
            <span>Profile</span>
          </Link>

          <Link
            to="/auth/logout"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all font-semibold"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
