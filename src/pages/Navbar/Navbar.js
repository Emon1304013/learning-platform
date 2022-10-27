import React, { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../assets/images/logo.png";
import { Tooltip } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    // console.log("User logged Out");
    userSignOut()
      .then(() => {
        toast.success("User Logged out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const activeStyle = {
    backgroundColor: "white",
    color: "gray",
    padding: "5px",
    borderRadius: "5px",
  };

  return (
    <nav className={`w-full ${darkMode ? "dark" : "light"}`}>
      <div
        className={`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}
      >
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  // style={{ height: "50px", width: "50px" }}
                  className="rounded-full h-6 w-6 lg:h-12 lg:w-12"
                  alt="company logo"
                />
                <h2 className="text-md lg:text-2xl font-bold text-white">
                  KAMAL'S CARE
                </h2>
              </div>
            </Link>
            <div className="md:hidden flex items-center">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              <button
                onClick={() => toggleTheme()}
                className="cursor-pointer border-2 p-1"
              >
                {darkMode ? (
                  <div className="flex items-center gap-2">
                    <FaMoon></FaMoon> Dark
                  </div>
                ) : (
                  <div className="flex items-center text-white gap-2">
                    <FaSun className="text-white"></FaSun> Light
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  HOME
                </NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink
                  to="/courses"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  COURSES
                </NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink
                  to="/blog"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  BLOG
                </NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink
                  to="/faq"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden inline-block">
              {/* For small screen  */}
              {user?.uid ? (
                <div className="flex gap-2 items-center">
                  {user?.photoURL ? (
                    <Tooltip title={user?.displayName} placement="top" arrow>
                      <img
                        className="rounded-full"
                        style={{ height: "30px", width: "30px" }}
                        src={user?.photoURL}
                        alt=""
                      />
                    </Tooltip>
                  ) : (
                    <img
                      className="rounded-full"
                      style={{ height: "30px", width: "30px" }}
                      src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                      alt=""
                    />
                  )}
                  {/* <p className="text-white text-xl">{user?.displayName}</p> */}
                  <Link
                    className=" px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    onClick={handleLogOut}
                  >
                    Sign Out
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-x-2 md:hidden">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </div>
                </>
              )}

              {/* Small Screen code ends here   */}
            </div>
          </div>
        </div>

        {/* For large screen  */}
        {user?.uid ? (
          <div className="hidden lg:inline-block">
            <div className="flex gap-2 items-center">
              {user?.photoURL ? (
                <Tooltip
                  title={user?.displayName ? user.displayName : "Mr. X"}
                  placement="top"
                  arrow
                >
                  <Link to='profile'>
                    <img
                      className="rounded-full"
                      style={{ height: "30px", width: "30px" }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                </Tooltip>
              ) : (
                <img
                  className="rounded-full"
                  style={{ height: "30px", width: "30px" }}
                  src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                  alt=""
                />
              )}
              {/* <p className="text-white text-xl">{user?.displayName}</p> */}
              <Link
                className=" px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                onClick={handleLogOut}
              >
                Sign Out
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="hidden space-x-2 md:inline-block">
              <Link
                to="/login"
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </Link>
            </div>

            {/* <FaMoon></FaMoon> */}
          </>
        )}
        <button
          onClick={() => toggleTheme()}
          className="cursor-pointer hidden lg:block border-2 p-2"
        >
          {darkMode ? (
            <div className="flex items-center gap-2">
              <FaMoon></FaMoon> Dark
            </div>
          ) : (
            <div className="flex items-center text-white gap-2">
              <FaSun className="text-white"></FaSun> Light
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
