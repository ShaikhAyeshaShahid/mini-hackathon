"use client";
import Image from 'next/image';
import pw from "../images/pw-logo.png";
import { useState } from 'react'; 

const Navbar = () => {
    const [usedCarsDropdown, setUsedCarsDropdown] = useState(false);
    const [newCarsDropdown, setNewCarsDropdown] = useState(false);
    const [bikesDropdown, setBikesDropdown] = useState(false);
    const [autoStoreDropdown, setAutoStoreDropdown] = useState(false);
    const [moreDropdown, setMoreDropdown] = useState(false);
  
    return (
      <div>
        <div className="bg-black text-white text-sm">
          <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex items-center space-x-2 text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-red-600"  // Sets the color to red
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.5 2A1.5 1.5 0 0 0 5 3.5v17A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 17.5 2h-11zM7 4h10v15H7V4zm5 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
  <span className="text-white">Download App via SMS</span>
</div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-red-600">اردو</span>
              <div className="border-l border-gray-400 h-4"></div>
              <span className="cursor-pointer hover:text-red-600">Sign Up</span>
              <div className="border-l border-gray-400 h-4"></div>
              <span className="cursor-pointer hover:text-red-600">Sign In</span>
            </div>
          </div>
        </div>
  
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image alt="Logo" src={pw} width={150} height={60} />
            </a>
  
            <nav className="md:ml-auto md:mr-auto flex py-2 flex-wrap items-center text-base justify-between text-white space-x-4">
              <div
                className="hover:text-red-600 cursor-pointer relative"
                onMouseEnter={() => setUsedCarsDropdown(true)}
                onMouseLeave={() => setUsedCarsDropdown(false)}
              >
                Used Cars <span>▼</span>
                {usedCarsDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                    <a className="block px-4 py-2 hover:bg-gray-200">Sedans</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">SUVs</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Trucks</a>
                  </div>
                )}
              </div>
              <div
                className="hover:text-red-600 cursor-pointer relative"
                onMouseEnter={() => setNewCarsDropdown(true)}
                onMouseLeave={() => setNewCarsDropdown(false)}
              >
                New Cars <span>▼</span>
                {newCarsDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                    <a className="block px-4 py-2 hover:bg-gray-200">Latest Models</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Hybrid</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Electric</a>
                  </div>
                )}
              </div>
              <div
                className="hover:text-red-600 cursor-pointer relative"
                onMouseEnter={() => setBikesDropdown(true)}
                onMouseLeave={() => setBikesDropdown(false)}
              >
                Bikes <span>▼</span>
                {bikesDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                    <a className="block px-4 py-2 hover:bg-gray-200">Mountain Bikes</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Road Bikes</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Electric Bikes</a>
                  </div>
                )}
              </div>
              <div
                className="hover:text-red-600 cursor-pointer relative"
                onMouseEnter={() => setAutoStoreDropdown(true)}
                onMouseLeave={() => setAutoStoreDropdown(false)}
              >
                Auto Store <span>▼</span>
                {autoStoreDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                    <a className="block px-4 py-2 hover:bg-gray-200">Parts</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Accessories</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Services</a>
                  </div>
                )}
              </div>
              <a className="hover:text-red-600">Videos</a>
              <a className="hover:text-red-600">Forums</a>
              <a className="hover:text-red-600">Blog</a>
              <div
                className="hover:text-red-600 cursor-pointer relative flex flex-col"
                onMouseEnter={() => setMoreDropdown(true)}
                onMouseLeave={() => setMoreDropdown(false)}
              >
                <div className="absolute -top-5 -right-5  bg-blue-900 text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </div>
                More ▼
                {moreDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md text-gray-800">
                    <a className="block px-4 py-2 hover:bg-gray-200">Sedans</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">SUVs</a>
                    <a className="block px-4 py-2 hover:bg-gray-200">Trucks</a>
                  </div>
                )}
              </div>
            </nav>
  
            <button className="bg-red-600 border-0 py-1 px-4 hover:bg-black rounded text-white text-lg">
              Post an Ad ▼
            </button>
          </div>
        </header>
      </div>
    );
  };
  

export default Navbar
