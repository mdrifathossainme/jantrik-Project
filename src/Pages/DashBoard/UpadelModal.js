import colorNames from "daisyui/src/colors/colorNames";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
const UpadeModal = ({ setIpn, user, refetch }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  
  

const imgStorKey=`d098b89ba40ba637ae5b99f2586771ac`
const [updateProfile, updating, error] = useUpdateProfile(auth);
  
  const hanupde =async (e) => {

    const img = e.img[0]
    const formData = new FormData()
    formData.append('image', img)
    
    const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`
    fetch(url, {
      method: "POST",
      body:formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url

          updateProfile({ photoURL: img })
           refetch();

    const eompany = e.cname;
    const phone = e.phone;
    const adress = e.adress;
    const linkedin = e.linkedin;
    const github = e.github.value;
    const website = e.website;

       const updoc = {
      img,
      eompany,
      phone,
      adress,
      linkedin,
      github,
      website,
    };

    const url = `http://localhost:5000/user/upprofile/${user.email}`;
    fetch(url, {
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
       reset();
        refetch();
        toast('Profile Update Complate')
      });


        }
    })

    
  };
  return (
    <>
      <input type="checkbox" id="updatemoba" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="updatemoba"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form action onSubmit={handleSubmit(hanupde)}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Select your Photo</span>
              </label>
              <input 
                {...register("img")}
                type="file"
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Linkedin Link</span>
              </label>
              <input
                {...register("linkedin")}
              
                type="text"
                placeholder="Linkedin Link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Link</span>
              </label>
              <input
                  {...register("github")}
            
                type="text"
                placeholder="GitHub Link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Website Link</span>
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
    </>
  );
};

export default UpadeModal;
