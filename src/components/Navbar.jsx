import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import '../App.css';
import { CiMenuBurger, CiCircleRemove } from "react-icons/ci";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar w-full z-10 h-[70px] bg-white fixed drop-shadow-lg relative">
      <div className="flex justify-between w-full h-full items-center md:max-w-[1240px] m-auto">

        <div className="flex items-center w-[25%] lg:w-[20%] pl-10">
          <Link to="/">
            <img className="w-full h-[65px]" src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png' alt="logo"  />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex justify-center">
            <li>
              <Link to="/home" >Home</Link>
            </li>
            <li>
              <Link to="/blogs" >Blogs</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex  w-[25%] lg:w-[20%] justify-evenly pr-10" >
          <button className="px-4 py-2 rounded-lg border bg-transparent text-black">Login</button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white	">Sing up</button>
        </div>

        <div className="menu md:hidden flex items-center" >
          { ! isMenuOpen ?
          <CiMenuBurger onClick={toggleMenu} className="w-[25px] h-[25px] object-contain mr-10" /> :
          <CiCircleRemove  onClick={toggleMenu} className="w-[25px] h-[25px] object-contain mr-10" />}
        </div>

      </div>

      { isMenuOpen &&<div className="absolute w-full h-[100vh] md:hidden">
         <ul className=" bg-white w-full h-full px-8 text-center">
          <li onClick={toggleMenu}><Link to="/">Home</Link></li>
          <li onClick={toggleMenu}><Link to="/blogs">Blogs</Link></li>
          <li onClick={toggleMenu}><Link to="/about">About</Link></li>
          <li onCanPlay={toggleMenu}><Link to="/contact">Contact</Link></li>
          <div className="flex flex-col my-4">
            <button className="py-2 rounded-lg bg-transparent text-black mb-4">Login</button>
            <button className="py-2 rounded-lg">Sing up</button>
          </div>
        </ul>
        </div>}
    </nav>

  );
}
export default Navbar;
