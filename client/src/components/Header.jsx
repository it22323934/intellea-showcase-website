import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun, FaBrain } from "react-icons/fa";
import { HiAcademicCap, HiInformationCircle, HiMail, HiCube } from "react-icons/hi";

export default function Header() {
  const [theme, setTheme] = React.useState('light');
  const location = useLocation();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <Navbar className="border-b-2 border-gray-200 dark:border-gray-700 shadow-sm py-3 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="self-center flex items-center text-sm sm:text-xl font-bold dark:text-white transition-transform duration-300 hover:scale-105 cursor-pointer">
        <FaBrain className="mr-2 text-blue-600 dark:text-blue-400" />
        <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg text-white">
          INTEL
        </span>
        <span className="text-blue-700 dark:text-blue-400">LEA</span>
      </div>
      
      <div className="hidden lg:block flex-grow max-w-md mx-4">
        <div className="relative">
          <TextInput
            type="text"
            placeholder="Search learning resources, components..."
            rightIcon={AiOutlineSearch}
            className="w-full"
            sizing="md"
          />
        </div>
      </div>
      
      <div className="flex gap-3 md:order-2 items-center">
        <Button
          className="w-10 h-10 hidden sm:flex items-center justify-center transition-colors duration-300"
          color={theme === 'light' ? "light" : "dark"}
          pill
          onClick={toggleTheme}
        >
          {theme === "light" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-300" />}
        </Button>
        
        <Button 
          gradientDuoTone="purpleToBlue" 
          className="hidden sm:flex transition-all duration-300 hover:scale-105"
        >
          <span className="flex items-center">
            Get Started
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </span>
        </Button>
        
        <Button className="w-10 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Navbar.Link 
          active={location.pathname === "/"} 
          as={Link}
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HiAcademicCap className="w-4 h-4" />
            Home
          </div>
        </Navbar.Link>
        
        <Navbar.Link 
          active={location.pathname === "/about"} 
          as={Link}
          to="/about"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HiInformationCircle className="w-4 h-4" />
            About
          </div>
        </Navbar.Link>
        
        <Navbar.Link 
          active={location.pathname === "/services"} 
          as={Link}
          to="/services"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HiCube className="w-4 h-4" />
            Services
          </div>
        </Navbar.Link>
        
        <Navbar.Link 
          active={location.pathname === "/contact-us"} 
          as={Link}
          to="/contact-us"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <HiMail className="w-4 h-4" />
            Contact Us
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}