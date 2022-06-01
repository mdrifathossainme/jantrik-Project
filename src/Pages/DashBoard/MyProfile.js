import React, { useState } from "react";
import { useAuthState,} from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase,init";
import ProfileUpdateModal from "./ProfileUpdateModal";
import Loading from "../../Components/Loading/Loading";
import { camera } from 'react-icons-kit/fa/camera'
import { Icon } from 'react-icons-kit'
import PhotoUpdateNodal from "./PhotoUpdateNodal";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [onupm, setIpn] = useState(null);
  const url = `http://localhost:5000/user/${user.email}`;

  const { data, isLoading, refetch } = useQuery("updateuser", () =>
    fetch(
      url,
      ("http://localhost:5000/alluser",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
        },
      })
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }



  return (
    <div className="pt-12 z-50">
      <div className="flex lg:flex-row flex-col p-12 lg:p-4 lg:gap-8">
        <div>
          <div >
          <span className=" relative">
             {user?.photoURL ? (
            <>
              <img
                className="w-[150px] h-[150px]  rounded-full border-4 border-primary"
                src={user?.photoURL}
                alt=""
              />
            </>
          ) : (
              <>
                {data?.img? <img
                className="w-[150px] h-[150px] rounded-full border-2"
                src={data?.img}
                alt=""
              />:<img
                className="w-[150px] rounded-full border-4 border-primary"
                src="https://i.ibb.co/TcFkJKX/download-1.png"
                alt=""
              />}
              
            </>
          )}
        

          <label
                onClick={() => setIpn(user)}
                 for="phothoUpdateModal"
            className=" modal-butto absolute cursor-pointer lg:bottom-2 bottom-3 lg:right-4 "
            >
                <span className="w-12 text-white h-12 p-2 border-2 rounded-full  bg-black">
                  <label for="phothoUpdateModal"  class="modal-button"><Icon   className="cursor-pointer" icon={camera} size={20} /></label>
                </span>
         
            </label>
          
          </span>
          </div>
          <span>
                <label
            onClick={() => setIpn(user)}
            htmlFor="updatemoba"
            className=" modal-butto btn btn-primary  text-white  mt-4 "
            >
            Update Datiles
           
            </label>
         </span>
        </div>
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold ">{user?.displayName}</h1>
          <h2 className="mt-2">Email : {user?.email}</h2>
          <div className="py-12">
            <h2 className="mt-4">Company Name : {data?.eompany}</h2>
            <h2 className="mt-4">Phone : {data?.phone}</h2>
            <h2 className="mt-4">Address : {data?.adress}</h2>
            <h2 className="mt-4">Linkedin Link: {data?.linkedin}</h2>
            <h2 className="mt-4">GitHub Link : {data?.github}</h2>
            <h2 className="mt-4">Your Website Link : {data?.website}</h2>
          </div>
        </div>
      </div>
      {onupm && (
        <ProfileUpdateModal  refetch={refetch} user={user} setIpn={setIpn}></ProfileUpdateModal>
      )}
      {onupm && (
        <PhotoUpdateNodal refetch={refetch} user={user} setIpn={setIpn}></PhotoUpdateNodal>
      )}
    </div>
  );
};

export default MyProfile;
