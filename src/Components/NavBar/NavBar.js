import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import CustomLInk from './CustomLInk'
import {userCircleO} from 'react-icons-kit/fa/userCircleO'
const NavBar = ({children}) => {

    const menuItem=<>
    <li><CustomLInk to="/">Home</CustomLInk></li>
    <li><CustomLInk to="/blog">Blog</CustomLInk></li>
      <li><CustomLInk to="/dashBoard">DashBoard</CustomLInk></li>
      <li><CustomLInk to="/inventory">Inventory</CustomLInk></li>
     
      <li className="dropdown dropdown-hover dropdown-end  ">
       <Icon className="hover:text-primary"  icon={userCircleO} size={30} />
      <ul  tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
         <li><CustomLInk to="/login">Login</CustomLInk></li>
      <li><CustomLInk to="/signup">Sign Up</CustomLInk></li>
      </ul>
    </li>
     
    
    </>
  return (
    
    <>
     
      <div className="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        
        
  <div className="drawer-content flex flex-col">
   
    <div className="w-full navbar bg-base-100 lg:px-12">
      
      <div className="flex-1 px-2 mx-2"><Link to="/"><img src="https://i.ibb.co/d0Fzt2W/logo.webp" alt="" /></Link></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
   
          {menuItem}
        </ul>
          </div>
        <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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