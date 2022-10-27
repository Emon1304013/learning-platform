import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ThemeContext } from "../../contexts/ThemeProvider";

const Footer = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div>
      <footer className={`p-4 shadow md:px-20 md:py-8 ${darkMode ? 'dark' : 'light'}`}>
        <div className="sm:flex sm:items-center sm:justify-between mx-auto">
          <div className="flex justify-center">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              className="mr-3 rounded-full"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              KAMAL'S CARE
            </span>
          </Link>
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-white sm:mb-0">
            
              <Link to="/" className="mr-4 md:mr-6 ">
                <button className="cursor-pointer">HOME</button>
              </Link>
              <Link to="/courses" className="mr-4 md:mr-6 ">
                <button className="cursor-pointer">COURSES</button>
              </Link>

              <Link to='/blog' className="mr-4 md:mr-6">
                <button className=" cursor-pointer">BLOG</button>
              </Link>

              <Link to='/faq' >
                <button className="cursor-pointer">FAQ</button>
              </Link>

          </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <div className="text-center">
        <span className="block text-sm text-white sm:text-center dark:text-white">
          ©2022
          <span className="hover:underline"> KAMAL'S CARE</span>. All Rights
          Reserved.
        </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
