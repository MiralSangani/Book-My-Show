import React from "react";
import { BiChevronRight, BiMenu } from "react-icons/bi";
import { BsSearch, BsCaretDownFill } from 'react-icons/bs';
const NavSm = () => {
  return (
    <><nav className="bg-bms-800">
      <div className="text-white flex items-center justify-between">

        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Rajkot
            <BiChevronRight />
            <div>
              <button className="bg-butoon-50 text-white rounded-lg flex justify-center p-2 ">Use App</button>

            </div>
          </span>

        </div>
        <div className="w-8 h-8">
          <BsSearch className="w-full h-full" />
        </div>
      </div>

    </nav>
    </>
  )
};
const NavMd = () => {
  return (
    <>
      <div className="w-full flex gap-3 items-center bg-gray-800  px-3 py-2 rounded-md">
        <BsSearch />
        <input
          type="search"
          className="w-full "
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
    </>
  );

};
const NavLg = () => {
  return (
    <>
      <div className=" px-32 py-2 flex w-full items-center bg-bms-700 justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-50 h-12">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full  px-5" />
          </div>
          <div className="w-full  flex items-center bg-white gap-3 px-3 py-1 rounded-sm">
            <BsSearch />
            <input type="search" className="w-full focus:outline-none text-l" placeholder="Search for movies, events, plays, sports and activities" />
          </div>
        </div>

        <div className="flex items-center gap-3" >
          <span className="text-gray-300 text-sm flex items-center hover:text-white cursor-pointer	">
            Rajkot
            <BsCaretDownFill />
          </span>&nbsp;
          <button className="bg-butoon-50 w-16 text-white text-xs rounded-md px-2 py-1 ">
            Sign in
          </button>&nbsp;
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  )
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-nav Col-800 w-full">
        <div className="md:hidden">{/*Mobile */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">{/*Tablet */}<NavMd /></div>
        <div className="hidden lg:flex">{/*Large */} <NavLg /></div>
      </nav>
    </>
  );
};

export default Navbar;
