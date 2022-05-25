import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import CustomLInk from "./CustomLInk";
import { userCircleO } from "react-icons-kit/fa/userCircleO";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import { signOut } from "firebase/auth";
import {ic_logout} from 'react-icons-kit/md/ic_logout'
const NavBar = ({ children }) => {
  const [user] = useAuthState(auth);


  const handleLogout = () => {
      signOut(auth)
    localStorage.removeItem('accessToken')
  }
  
  const menuItem = (
    <>
      <li>
        <CustomLInk to="/">Home</CustomLInk>
      </li>
      <li>
        <CustomLInk to="/blog">Blog</CustomLInk>
      </li>
      <li>
        <CustomLInk to="/inventory">Inventory</CustomLInk>
      </li>
      {user ? (
        <>
          <li class="moda-enddropdown moda-enddropdown-center">
            <label tabindex="0" class="moda-endbtn m-1">
              {user.photoURL ? (
                <>
                  <img
                    className="w-[45px] rounded-full cursor-pointer border-2 border-primary"
                    src={user.photoURL}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    className="w-[40px]"
                    src="https://i.ibb.co/TcFkJKX/download-1.png"
                    alt=""
                  />
                </>
              )}
            </label>
            <ul
              tabindex="0"
              class="moda-centerdropdown-content moda-endmenu p-2 shadow bg-base-200 rounded-box w-52 z-10"
            >
              <li>
               
                <Link to="/dashBoard"> My Profile</Link>
              </li>
              <li>
             
                <Link to="/dashBoard">DashBoard</Link>
              </li>
              <li>
                
                <Link to="/dashBoard/myorder">My Order</Link>
              </li>
              <li>
                <button onClick={handleLogout}>
                  <Icon icon={ic_logout}/> <span>Logout</span>
                </button>
              </li>
              <li>
               
                <Link to="/dashBoard"></Link>
              </li>
            </ul>
          </li>
        </>
      ) : (
        <>
          <li className="dropdown dropdown-hover dropdown-end  ">
            <Icon className="hover:text-primary" icon={userCircleO} size={30} />
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <CustomLInk to="/login">Login</CustomLInk>
              </li>
              <li>
                <CustomLInk to="/signup">Sign Up</CustomLInk>
              </li>
            </ul>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
     
      <div className="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-100 lg:pr-36 lg:pl-12">
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <img src="https://i.ibb.co/d0Fzt2W/logo.webp" alt="LOGO" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{menuItem}</ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </div>

          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {menuItem}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
