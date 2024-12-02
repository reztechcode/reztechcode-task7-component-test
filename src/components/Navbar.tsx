import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="flex items-center justify-between p-4 lg:px-16">
                <div className="flex items-center">
                    <img
                        alt="Logo"
                        className="rounded-full"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/qpAiG14T7FJmC9eVKFTauV41vglelGVvisjsbf747me6CBNPB.jpg"
                        width="40"
                    />
                    <span className="ml-2 text-xl font-bold text-gray-800 flex items-center">
                        Irez Abdullah
                        <span className="text-blue-500 ml-1 mt-2">
                            <FaCircle style={{ fontSize: '9px' }} />
                        </span>
                    </span>
                </div>
                <button
                    className="lg:hidden text-gray-800 text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className="space-x-2 text-gray-600 hidden lg:flex">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm rounded-2xl text-white' : 'btn btn-outline btn-sm rounded-2xl'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tech"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm rounded-2xl text-white' : 'btn btn-outline btn-sm rounded-2xl'
                            }
                        >
                            Tech
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'btn btn-primary btn-sm rounded-2xl text-white' : 'btn btn-outline btn-sm rounded-2xl'
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <ul
                    className={`flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 lg:hidden
                        absolute lg:static left-0 right-0 bg-white lg:bg-transparent 
                        lg:p-0 p-4 shadow-md lg:shadow-none transition-all duration-300 ease-in-out 
                        ${isOpen ? 'top-14 opacity-100' : 'top-[-9999px] opacity-0'}
                    `}
                >
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'btn btn-primary btn-sm rounded-2xl text-white w-full lg:w-auto'
                                    : 'btn btn-outline btn-sm rounded-2xl w-full lg:w-auto'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tech"
                            className={({ isActive }) =>
                                isActive
                                    ? 'btn btn-primary btn-sm rounded-2xl text-white w-full lg:w-auto'
                                    : 'btn btn-outline btn-sm rounded-2xl w-full lg:w-auto'
                            }
                        >
                            Tech
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? 'btn btn-primary btn-sm rounded-2xl text-white w-full lg:w-auto'
                                    : 'btn btn-outline btn-sm rounded-2xl w-full lg:w-auto'
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
