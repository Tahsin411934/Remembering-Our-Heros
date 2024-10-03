
import {  Navbar, Dropdown, Avatar } from "flowbite-react";

import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="shadow-lg font-Poppins bg-[#E3F5E3]">
      <div className="container mx-auto">
        <Navbar fluid rounded className="bg-[#E3F5E3]">
          <Navbar.Brand href="#">
            <img src="logo.jpg" className="mr-3 h-9 w-9 sm:h-9 rounded-full" alt="Logo" />
            <span className="self-center font-Poppins whitespace-nowrap text-2xl font-semibold text-[#2F7955]">
              Remembering <span className="text-red-600">Our</span> Heroes
            </span>
          </Navbar.Brand>
          <div className="flex lg:mt-0 mt-3 md:order-2 w-full lg:w-auto">
            <div className="flex justify-between items-center w-full">
              <div className="flex  md:order-2">

                <Navbar.Toggle />
              </div>
              <h1 className='italic text-[#0B4838] block lg:hidden md:hidden' >Bangla<span className='text-red-800' >desh</span> 2.0</h1>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="" rounded />
                }
              >
                {/* <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header> */}
                <Dropdown.Item>
                  <NavLink to="/add-new-martyrs" className="block px-4 py-2 text-sm text-gray-700">Add New Martyrs</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/addfotage" className="block px-4 py-2 text-sm text-gray-700">Add New Footage</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/AddPerpetrator" className="block px-4 py-2 text-sm text-gray-700">Add Perpetrator</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/history" className="block px-4 py-2 text-sm text-gray-700">Share Your History</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/ChineRakhun" className="block px-4 py-2 text-sm text-gray-700">Chine Rakhun</NavLink>
                </Dropdown.Item>

               
                <Dropdown.Divider />
                <Dropdown.Item><NavLink to={'/pendingRequest'}>Pending Request</NavLink> </Dropdown.Item>
                <Dropdown.Item><NavLink to={'/login'}>Admin Login</NavLink> </Dropdown.Item>
                
              </Dropdown>
            </div>
          </div>

          {/* Navbar Items */}
          <Navbar.Collapse className="text-[#194b33] z-20 lg:ml-20 ">
            <NavLink to="/" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  {/* <IoIosHome /> */}
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
            <NavLink to="/history" className="font-normal text-base" end>
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
                  <span>Videos</span>
                </div>
              )}
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/blog" className="font-normal text-base" end>
              {({ isActive }) => (
                <div className={`flex items-center gap-1 justify-center ${isActive ? 'text-[#0B4838]' : ''}`}>
                  <span>Blog</span>
                </div>
              )}
            </NavLink>
           
            
            <div className="border-r-2"></div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
