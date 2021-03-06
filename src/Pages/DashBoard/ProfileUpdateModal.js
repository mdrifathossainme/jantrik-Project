import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import "./up.css";

const ProfileUpdateModal = ({ setIpn, onupm, user, refetch }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [newComparyNamet, setCompanyNamet] = useState(false);
  const [newComparyName, setCompanyName] = useState();
  const [newPhonet, setphonet] = useState(false);
  const [newphone, setphone] = useState(false);

  const allurl = `https://immense-plains-72444.herokuapp.com/user/${user.email}`;

  const {
    data,
    isLoading,
    refetch: alluserrefect,
  } = useQuery("updateuser", () =>
    fetch(allurl, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading />;
  }

  const hanupde = async (e) => {
    const eompany = e.cname || data.eompany;
    const phone = e.phone || data.phone;
    const adress = e.adress || data.adress;
    const linkedin = e.linkedin || data.linkedin;
    const github = e.github || data.github;
    const website = e.website || data.website;
    const updoc = {
      eompany,
      phone,
      adress,
      linkedin,
      github,
      website,
    };

    const udurl = `https://immense-plains-72444.herokuapp.com/user/upprofile/${user.email}`;
    fetch(udurl, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
      body: JSON.stringify(updoc),
    })
      .then((res) => res.json())
      .then((data) => {
        setIpn(null);
        refetch();
        toast.success("Profile Update Complate");
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="updatemoba" className="modal-toggle " />
      <div className="modal modal-center up=modal sm:modal-middle ">
        <div className="modal-box  ">
          <label
            htmlFor="updatemoba"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ???
          </label>
          <form onSubmit={handleSubmit(hanupde)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                {...register("cname")}
                type="text"
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone")}
                type="number"
                placeholder="Phone Numbe"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                {...register("adress")}
                name="adress"
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Website Link</span>
              </label>
              <input
                {...register("website")}
                type="text"
                placeholder="Website Link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>

      <></>
    </div>
  );
};

export default ProfileUpdateModal;
