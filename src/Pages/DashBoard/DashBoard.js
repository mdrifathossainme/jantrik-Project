import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import useAdmin from "../../hooks/useAdmin";
const DashBoard = () => {
    const [user] = useAuthState(auth);
  const[admin]=useAdmin(user)

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:px-12 px-4">
        <Outlet />
        <span className="flex justify-end pr-4 m-0">
          <label for="my-drawer-2" className="drawer-button  lg:hidden">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </span>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto lg:w-80 w-48 bg-base-200 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
         {!admin&& <li>
            {" "}
            <Link to="/dashboard/myorder">My Order</Link>
          </li>
          }
          {!admin&& <li>
          
            <Link to="/dashboard/addreview"> Reviews</Link>
          </li>}
       
         {admin&&  <li>
            <Link to="/dashboard/addproduct">Add Product</Link>
          </li>}
          {admin&&<li>
            <Link to="/dashboard/AllUser">All User</Link>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
