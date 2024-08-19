import React from 'react';
import { Button, Navbar, Dropdown } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="shadow-lg font-Poppins bg-[#EEF2F7]">
      <div className="container mx-auto">
        <Navbar fluid rounded className="bg-[#EEF2F7]">
          <Navbar.Brand href="#">
            <img src="logo.jpg" className="mr-3 h-6 w-9 sm:h-9 rounded-full" alt="Logo" />
            <span className="self-center font-Poppins whitespace-nowrap text-2xl font-semibold text-[#2F7955]">
              Remembering <span className="text-red-600">Our</span> Heroes
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button className="bg-[#0B4838] hidden md:block">Get started</Button>
            <Navbar.Toggle />
          </div>

          {/* Navbar Items */}
          <Navbar.Collapse className="text-[#194b33] z-20">
            <NavLink to="/" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  <IoIosHome />
                  <span className="ml-2">Home</span>
                </div>
              )}
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/Martyrs" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center gap-1 justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  <span>Martyrs</span>
                </div>
              )}
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/AddFood" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center gap-1 justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  <span>History</span>
                </div>
              )}
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/fotage" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center gap-1 justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  <span>Video</span>
                </div>
              )}
            </NavLink>
            <div className="border-r-2"></div>
            <div className='flex justify-center items-center ml-5'>
            {/* Add Dropdown */}
            <Dropdown inline label={<span className="font-normal text-base">Add</span>}>
              <Dropdown.Item>
                <NavLink to="/add-new-martyrs" className="block px-4 py-2 text-sm text-gray-700">New Martyrs</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/addfotage" className="block px-4 py-2 text-sm text-gray-700">New Footage</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/history" className="block px-4 py-2 text-sm text-gray-700">Your History</NavLink>
              </Dropdown.Item>
            </Dropdown>
            </div>
            <div className="border-r-2"></div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
