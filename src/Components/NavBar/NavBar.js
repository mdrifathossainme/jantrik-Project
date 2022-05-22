import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import CustomLInk from './CustomLInk'
import Tobbar from './Tobbar';
const NavBar = ({children}) => {

    const menuItem=<>
    <li><CustomLInk to="/">Home</CustomLInk></li>
    <li><CustomLInk to="/blog">Blog</CustomLInk></li>
      <li><CustomLInk to="/dashBoard">DashBoard</CustomLInk></li>
     
      <li class="dropdown dropdown-hover dropdown-end  ">
       <Icon className="hover:text-primary"  icon={user} size={30} />
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
         <li><CustomLInk to="/login">Login</CustomLInk></li>
      <li><CustomLInk to="/signup">Sign Up</CustomLInk></li>
      </ul>
    </li>
     
    
    </>
  return (
    
    <>
     
      <div class="drawer drawer-end  ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        
        
  <div class="drawer-content flex flex-col">
   
    <div class="w-full navbar bg-base-100 lg:px-12">
      
      <div class="flex-1 px-2 mx-2"><Link to="/"><img src="https://i.ibb.co/d0Fzt2W/logo.webp" alt="" /></Link></div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
   
          {menuItem}
        </ul>
          </div>
        <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div> 
    </div>
  
  {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
     
     {menuItem}
      
    </ul>
    
  </div>

    
    </div>
    </>

    );
};

export default NavBar;