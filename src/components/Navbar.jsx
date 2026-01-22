import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "./provider/AuthProvider";
import logo from "../assets/logo.png";
import userImage from "../assets/user.jpg";
import { toast } from "react-toastify";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser({ email: null });
        toast.success("Logged out successfully!");
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold px-3 py-2 rounded-md ${
            isActive
              ? "text-green-700 bg-green-100"
              : "text-gray-700 hover:bg-gray-100"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/find-partners"
        className={({ isActive }) =>
          `font-semibold px-3 py-2 rounded-md ${
            isActive
              ? "text-green-700 bg-green-100"
              : "text-gray-700 hover:bg-gray-100"
          }`
        }
      >
        Find Partners
      </NavLink>

    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-extrabold text-green-700">
              StudyMate
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {navLinks}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <input
                type="checkbox"
                className="toggle"
                checked={theme === "dark"}
                onChange={(e) => handleTheme(e.target.checked)}
              />
            </div>

            {/* Profile Dropdown (Desktop) */}
            {user?.email ? (
              <div className="relative group hidden md:block">
                <img
                  src={user.photoURL || userImage}
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-500"
                />

                <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 p-3 text-gray-700">
                  <div className="border-b pb-2 mb-2">
                    <p className="text-sm font-semibold">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>

                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link
                  to="/auth/login"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {navLinks}

          {/* Mobile Profile */}
          {user?.email ? (
            <div>
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setMobileDropdown(!mobileDropdown)}
              >
                <img
                  src={user.photoURL || userImage}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <span className="font-semibold">
                  {user.displayName || "User"}
                </span>
              </div>

              {mobileDropdown && (
                <div className="bg-gray-100 p-3 rounded-md mt-2 space-y-2">
                  <Link
                    to="/dashboard"
                    className="block w-full text-center py-2 bg-white rounded hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="block text-center py-2 bg-green-600 text-white rounded"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block text-center py-2 bg-green-600 text-white rounded"
              >
                Register
              </Link>
            </>
          )}

          {/* Mobile Theme Toggle */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
            />
            <span className="text-sm">Dark Mode</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
