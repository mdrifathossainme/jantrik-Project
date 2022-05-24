import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
      <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <Outlet/>
    <span className='flex justify-end pr-4 m-0'><label for="my-drawer-2" class="drawer-button  lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></span>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto lg:w-80 w-48 bg-base-200 text-base-content">
     <li>
       <Link to="/dashboard">My Profile</Link>       
            </li>
            <li> <Link to="/dashboard/myorder">My Order</Link></li>
            <li> <Link to="/dashboard/addreview">Add Reviews</Link></li>
            <li><Link to="/dashboard/payment">Payment</Link></li>
            <li><Link to="/dashboard/addreview">Add Reviews</Link></li>
            <li>  <Link to="/dashboard/makeadmin">Make Admin</Link></li>
      
     
     
      
      
    
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;