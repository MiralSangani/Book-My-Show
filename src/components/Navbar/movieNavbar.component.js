import React from "react";
import { BiMenu, BiShareAlt } from "react-icons/bi";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
const NavSm = () => {
    return (
        <>
            <div className="text-gray-800 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    )
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
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
                        Rajkot
                        <BsCaretDownFill />
                    </span>
                    <button className="bg-butoon-50 text-white text-sm rounded-lg px-2 py-1">
                        Sign in
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
};
const MovieNavbar = () => {
    return (
        <>
            <nav className="">
                <div className="md:hidden">{/*Mobile Screen*/}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
                    <NavSm />
                </div>
                <div className="bg-gray-800  hidden lg:flex">{/*Large Screen*/}
                    <NavLg /></div>
            </nav>
        </>
    );
};

export default MovieNavbar;