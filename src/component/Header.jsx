import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";

const Header = () => {
    const navmenu = (
        <>
          <li>
            <details>
              <summary className="bg-white font-medium uppercase">Menu</summary>
              <ul className="p-2 w-40 normal-case md:static md:right-0
              absolute right-8 bg-[#EEEFF0]">
                <li className="hover:text-[#F99F1C]">
                  <a href="/" style={{fontFamily: "'Baloo 2', 'CM Sans Serif 2012', sans-serif"}}>Home</a>
                </li>
                <li className="hover:text-[#F99F1C]">
                  <a href="/details">Details</a>
                </li>
                <li className="hover:text-[#F99F1C]">
                  <a href="/category">Category</a>
                </li>
                <li className="hover:text-[#F99F1C]">
                  <a href="/favorite-food">My Favorite Food</a>
                </li>
                <li className="hover:text-[#F99F1C]">
                  <a href="/profile">Profile</a>
                </li>
                <li className="hover:text-[#F99F1C]">
                  <a href="/login-signup">Login/Sign Up</a>
                </li>
              </ul>
            </details>
          </li>
        </>
      );
      return (
        <div>
          <div className="navbar">
            <div className="md:navbar-start">
              <a href='/' className="btn text-black btn-ghost text-2xl font-bold" style={{ fontFamily: "'Baloo 2', 'CM Sans Serif 2012', sans-serif",}}>pti.</a>
            </div>
            <div className="md:navbar-center relative navbar-start md:w-2/5 w-full bg-[#EEEFF0]">
              <div className="px-3 absolute left-0">
                <CiSearch className="text-lg bg-[#EEEFF0]" />
              </div>
              <input type="text" placeholder="Find Your Food" className="form-control input pl-9 md:text-sm text-xs input-bordered input-sm focus:outline-none md:w-full w-3/4 max-w-md bg-[#EEEFF0]" />
              <ul className="menu text-sm menu-horizontal px-1">{navmenu}</ul>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <button className='btn bg-[#F99F1C] text-[#FFF3EC] rounded-full text-2xl w-12 font-bold'>
                  <BiUser />
                </button>
            </div>
        </div>
      </div>
      )
}
export default Header