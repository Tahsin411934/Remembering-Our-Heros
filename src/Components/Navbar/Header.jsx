import { Button, Navbar } from "flowbite-react";

import { HiArchiveBox } from "react-icons/hi2";
import { IoIosHome } from "react-icons/io";
import { MdEventAvailable, MdOutlineAdd } from "react-icons/md";
import {  NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" shadow-lg font-Poppins">
      <div className="container mx-auto">
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src="logo.jpg" className="mr-3 h-6 w-9 sm:h-9 rounded-full" alt="Flowbite React Logo" />
            <span className="self-center font-Poppins whitespace-nowrap text-2xl font-semibold text-[#2F7955] ">Remembering <span className="text-red-600">Our </span> Heros</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button className="bg-[#0B4838]">Get started</Button>
            <Navbar.Toggle />
          </div>
          {/* <div className="flex md:order-2">
      <Dropdown arrowIcon={false} inline label={<Avatar img="" rounded className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />}>
        <Dropdown.Header>
          <span className="block text-sm">hhhh</span>
          <span className="block truncate text-sm font-medium">gg</span>
        </Dropdown.Header>
        <Dropdown.Item className="">
          <Link to={`/MyFoods/`} className=" " href="#" activeClassName="active">
            <div className="flex items-center gap-1 justify-center">
              <span>Added Foods</span>
            </div>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/MyFoodsRequest/`} className="" href="#" activeClassName="active">
            <div className="flex items-center gap-1 justify-center">
              <span>Requested Food </span>
            </div>
          </Link>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => {
         
        }}>Sign out</Dropdown.Item>
      </Dropdown>

     

      <Navbar.Toggle />
    </div> */}

          {/* Navbar Items */}
          <Navbar.Collapse className="text-[#194b33]">
            <NavLink to="/" className="font-normal text-base " href="#" activeClassName="active">
              <div className="flex items-center justify-center">
                <IoIosHome />
                <span>Home</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/AvailableFoods" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
                <MdEventAvailable />
                <span>martyrs</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to="/AddFood" className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
                <MdOutlineAdd />
                <span>History</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            <NavLink to={`/MyFoods/`} className="font-normal text-base" href="#" activeClassName="active">
              <div className="flex items-center gap-1 justify-center">
                <HiArchiveBox />
                <span>Add</span>
              </div>
            </NavLink>
            <div className="border-r-2"></div>
            {/* <NavLink to={`/MyFoodsRequest/`} className="font-normal text-base" href="#" activeClassName="active">
        <div className="flex items-center gap-1 justify-center">
          <FcInvite />
          <span>My Food Request </span>
        </div>
      </NavLink>
      <div className="border-r-2"></div> */}

          </Navbar.Collapse>
        </Navbar>
      </div>

    </div>
  );
};

export default Header;