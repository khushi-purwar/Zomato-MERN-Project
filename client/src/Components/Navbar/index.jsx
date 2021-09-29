import React, {useState} from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import UserDropdown from "./UserDropdown";


const MobileNav = ({SignIn, SignUp}) => {

  const [isDropDownOpen , setIsDropDownOpen] = useState(false);

  return (

   
    <>
      <div className="flex w-full items-center justify-between lg:hidden ">
        <div className="w-24 h-8 ">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3 relative">
          <button className="bg-zomato-400  text-white py-2 px-3 rounded-full">
            Use App
          </button>

          <span 
          className="border border-gray-500 p-2 text-zomato-300 rounded-full"
          onClick={ () => setIsDropDownOpen( (prev) => !prev)}
          >
            <FaUserAlt />
          </span>

         {
           isDropDownOpen && (
            <div className="absolute shadow-lg py-3 z-20 w-full -bottom-20 -right-4 bg-white flex flex-col gap-2">
            <button onClick={SignIn}>Sign In</button>
            <button onClick={SignUp}>Sign Up</button>
            </div>
           )
         }
        </div>
      </div>
    </>
  );
};

const LargeNav = ({SignIn, SignUp}) => {
  return (
    <>
    <div className="hidden lg:inline container px-20 mx-auto">
      <div className="hidden  lg:flex gap-4 w-full items-center justify-around ">
        <div className="w-48 h-8 ">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        
        <div className="ml-2 w-full bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded-md ">

        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="text-zomato-400">
              <HiLocationMarker />
            </span>
            <input type="text" placeholder="Bengaluru" className="focus:outline-none" />
            <IoMdArrowDropdown />
    
          </div>

          <div className="flex items-center gap-2 w-full">
             <RiSearch2Line />
             <input 
                type="search" 
                placeholder="Search for restaurants, cuisine, or a dish" 
                className="w-full focus:outline-none"
              />
          </div>
         
        </div>

        <div className="ml-20 flex gap-10">
          <button 
             onClick={SignIn} 
             className="text-gray-500 text-lg hover:text-gray-800">Log&nbsp;in</button>
          <button 
          onClick={SignUp} 
          className="text-gray-500 text-lg hover:text-gray-800">Sign&nbsp;up</button>
        </div>

      </div>
      </div>
    </>
  );
};


const Navbar = () => {

  const [openSignin, setOpenSignin] =useState(false);
  const [openSignup, setOpenSignup] =useState(false);

  const openSignInModal = ()=> setOpenSignin(true);
  const openSignUpModal = ()=> setOpenSignup(true);

  return (
    <>
    <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
    <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="p-4 bg-white shadow-md lg:shadow-none flex item-center">
        <MobileNav SignIn={openSignInModal}  SignUp={openSignUpModal} />
        <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />

      </nav>
    </>
  );
};

export default Navbar;
