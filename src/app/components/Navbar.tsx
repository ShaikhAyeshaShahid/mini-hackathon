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
            <header className="text-gray-600 body-font h-20">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <Image alt="Logo" src={pw} width={200} height={100} />
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
                        <div
                            className="mr-5 hover:text-red-900 cursor-pointer relative"
                            onMouseEnter={() => setUsedCarsDropdown(true)}
                            onMouseLeave={() => setUsedCarsDropdown(false)}
                        >
                            Used Cars <span className="inline-block transform transition-transform duration-200" style={{ transform: usedCarsDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                            {usedCarsDropdown && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                                    <a className="block px-4 py-2 hover:bg-gray-200">Sedans</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">SUVs</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Trucks</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="mr-5 hover:text-red-900 cursor-pointer relative"
                            onMouseEnter={() => setNewCarsDropdown(true)}
                            onMouseLeave={() => setNewCarsDropdown(false)}
                        >
                            New Cars <span className="inline-block transform transition-transform duration-200" style={{ transform: newCarsDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                            {newCarsDropdown && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                                    <a className="block px-4 py-2 hover:bg-gray-200">Latest Models</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Hybrid</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Electric</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="mr-5 hover:text-red-900 cursor-pointer relative"
                            onMouseEnter={() => setBikesDropdown(true)}
                            onMouseLeave={() => setBikesDropdown(false)}
                        >
                            Bikes <span className="inline-block transform transition-transform duration-200" style={{ transform: bikesDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                            {bikesDropdown && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                                    <a className="block px-4 py-2 hover:bg-gray-200">Mountain Bikes</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Road Bikes</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Electric Bikes</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="mr-5 hover:text-red-900 cursor-pointer relative"
                            onMouseEnter={() => setAutoStoreDropdown(true)}
                            onMouseLeave={() => setAutoStoreDropdown(false)}
                        >
                            Auto Store <span className="inline-block transform transition-transform duration-200" style={{ transform: autoStoreDropdown ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                            {autoStoreDropdown && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                                    <a className="block px-4 py-2 hover:bg-gray-200">Parts</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Accessories</a>
                                    <a className="block px-4 py-2 hover:bg-gray-200">Services</a>
                                </div>
                            )}
                        </div>

                        <a className="mr-5 hover:text-red-900">Videos</a>
                        <a className="mr-5 hover:text-red-900">Forums</a>
                        <a className="mr-5 hover:text-red-900">Blog</a>

                        {/* <div
                            className="hover:text-red-900 cursor-pointer relative flex flex-col"
                            onMouseEnter={() => setMoreDropdown(true)}
                            onMouseLeave={() => setMoreDropdown(false)}

                        >
                            <div className='bg-blue-950 h-5 w-10 text-center rounded-lg align-text-top py-0'>New</div>

                            More ▼

                                {moreDropdown && (
                                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
                                        <a className="block px-4 py-2 hover:bg-gray-200">Sedans</a>
                                        <a className="block px-4 py-2 hover:bg-gray-200">SUVs</a>
                                        <a className="block px-4 py-2 hover:bg-gray-200">Trucks</a>
                                    </div>
                                )}
                        </div> */}




<div className="flex items-center relative">
                <div className="absolute -top-4 -right-5 bg-[#1E3A8A] text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </div>

                <p className="text-[#E4E4E6] text-sm">More</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
            



                        
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Navbar
