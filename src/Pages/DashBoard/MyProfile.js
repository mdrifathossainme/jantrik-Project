import React, { useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase,init";
import UpadeModal from "./UpadelModal";
import Loading from "../../Components/Loading/Loading";

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
    <div>
      <div className="flex lg:flex-row flex-col p-12 lg:p-4 lg:gap-8">
        <div>
          {user?.photoURL ? (
            <>
              <img
                className="w-[150px] h-[150px]  rounded-full border-2"
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
                className="w-[150px] rounded-full border-2"
                src="https://i.ibb.co/TcFkJKX/download-1.png"
                alt=""
              />}
              
            </>
          )}

          <label
            onClick={() => setIpn(user)}
            htmlFor="updatemoba"
            className="btn modal-button  btn-primary btn-sm text-white mt-4"
          >
            {" "}
            Upadate Profilel
          </label>
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
        <UpadeModal refetch={refetch} user={user} setIpn={setIpn}></UpadeModal>
      )}
    </div>
  );
};

export default MyProfile;
