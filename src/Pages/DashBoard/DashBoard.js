import React from "react";
import {  Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import useAdmin from "../../hooks/useAdmin";
import CustomLInk from "../../Components/NavBar/CustomLInk";
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/fa/user'
import { opencart } from 'react-icons-kit/fa/opencart'
import {ic_feedback} from 'react-icons-kit/md/ic_feedback'
import { thList } from 'react-icons-kit/fa/thList'
import { users } from 'react-icons-kit/fa/users'
import { truck } from 'react-icons-kit/fa/truck'
import {plusSquare} from 'react-icons-kit/fa/plusSquare'
const DashBoard = () => {
    const [auser] = useAuthState(auth);
  const[admin]=useAdmin(auser)

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
       <span className="flex justify-end pr-4 m-0 absolute right-12 cursor-pointer top-4">
          <label for="my-drawer-2" className="drawer-button  lg:hidden">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current cursor-pointer"
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
      <div className="drawer-content lg:px-12 ">
        <Outlet />
       
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto lg:w-80 w-48 bg-base-200 text-base-content">
          <li>
            <CustomLInk to="/dashboard"><span className="pr-2"><Icon icon={user} size={20} /></span> My Profile</CustomLInk>
          </li>
         {!admin&& <li>
            {" "}
            <CustomLInk to="/dashboard/myorder"> <span className="pr-2"><Icon icon={opencart} size={20} /></span> My Order</CustomLInk>
          </li>
          }
          {!admin&& <li>
          
            <CustomLInk to="/dashboard/addreview"> <span className="pr-2"><Icon icon={ic_feedback} size={20} /></span> Reviews</CustomLInk>
          </li>}
       

          {admin&&<li>
            <CustomLInk to="/dashboard/manageorders"><span className="pr-2"><Icon icon={truck} size={20} /></span> Manage Orders</CustomLInk>
          </li>}
          {admin&&<li>
            <CustomLInk to="/dashboard/manageproducts"> <span className="pr-2"><Icon icon={thList} size={20} /></span> Manage Products</CustomLInk>
          </li>}
          {admin&&  <li>
            <CustomLInk to="/dashboard/addproduct"><span className="pr-2"><Icon icon={plusSquare} size={20} /></span> Add Product</CustomLInk>
          </li>}

          
          {admin&&<li>
            <CustomLInk to="/dashboard/AllUser"> <span className="pr-2"><Icon icon={users} size={20} /></span> All User</CustomLInk>
          </li>}

        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
