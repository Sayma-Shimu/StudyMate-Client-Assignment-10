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

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/find-partners"
        className={({ isActive }) =>
          `font-semibold ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
        }
      >
        Find Partners
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/my-connections"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-blue-600 underline" : "text-gray-700"}`
            }
          >
            My Connections
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <h1 className="text-3xl font-extrabold tracking-wide text-green-700">StudyMates</h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* User avatar */}
            {user && (
              <div className=" group">
                <img
                  src={user.photoURL || userImage}
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-500"
                />
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-gray-700 p-2">
                  <p className="text-sm font-medium">{user.displayName}</p>
                  <p className="text-xs">{user.email}</p>
                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Login/Register */}
            {!user && (
              <div className="hidden md:flex gap-2">
                <Link
                  to="/auth/login"
                  className="btn bg-green-600 text-white hover:bg-green-700"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn bg-green-600 text-white hover:bg-green-700"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Theme toggle */}
            <div className="hidden md:block">
              <input
                type="checkbox"
                className="toggle"
                checked={theme === "dark"}
                onChange={(e) => handleTheme(e.target.checked)}
              />
            </div>

            {/* Mobile menu button */}
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
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-3">
          {navLinks}
          {!user && (
            <>
              <Link
                to="/auth/login"
                className="btn bg-green-600 text-white hover:bg-green-700 w-full"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn bg-green-600 text-white hover:bg-green-700 w-full"
              >
                Register
              </Link>
            </>
          )}
          {/* Theme toggle */}
          <div className="mt-2 flex items-center gap-2">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
