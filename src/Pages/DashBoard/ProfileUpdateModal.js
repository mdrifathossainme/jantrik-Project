import colorNames from "daisyui/src/colors/colorNames";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";

const ProfileUpdateModal = ({ setIpn, onupm, user, refetch }) => {
  
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [newComparyNamet, setCompanyNamet]=useState(false)
  const [newPhonet, setphonet]=useState(false)
  const [newComparyName, setCompanyName]=useState()
  const [newphone, setphone]=useState()
  
  const allurl = `https://immense-plains-72444.herokuapp.com/user/${user.email}`;

   const { data, isLoading, refetch:alluserrefect } = useQuery("updateuser", () =>
    fetch(
      allurl,
      ("https://immense-plains-72444.herokuapp.com/alluser",
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
  
  


  const handleCname = (e) => {
      
    const { eompany, ...rest } = data
    const eupn = e.target.value
    const newname={eompany:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    
  }
  const handlphone = (e) => {
      
    const { phone, ...rest } = data
    const eupn = e.target.value
    const newname={phone:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    
  }

  const handladress = (e) => {
      
    const { adress, ...rest } = data
    const eupn = e.target.value
    const newname={adress:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    
  }
  const handllinkedin = (e) => {
      
    const { linkedin, ...rest } = data
    const eupn = e.target.value
    const newname={linkedin:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    
  }
  const handlgithub = (e) => {
      
    const { github, ...rest } = data
    const eupn = e.target.value
    const newname={github:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    
  }
  const handlwebsite= (e) => {
      
    const { website, ...rest } = data
    const eupn = e.target.value
    const newname={website:eupn,...rest}
    setCompanyName(newname)
    setCompanyNamet(true)
    if (eupn.length===0) {
      setCompanyNamet(true)
    }
    
  }

  const modalCloge = () => {
    setCompanyNamet(false)
  }


  
  const hanupde =async (e) => {
    const eompany = e.cname;
    const phone = e.phone;
    const adress = e.adress;
    const linkedin = e.linkedin;
    const github = e.github;
    const website = e.website;
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
        toast.success('Profile Update Complate')
      });

    
  };
  return (
    <>
      <input type="checkbox" id="updatemoba" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label 
            onClick={modalCloge}
            htmlFor="updatemoba"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form  onSubmit={handleSubmit(hanupde)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
            
                {...register("cname")}
                onChange={handleCname} 
               value={newComparyNamet===true? newComparyName.eompany : data?.eompany}
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
              onChange={handlphone}
              
                value={newComparyNamet===true? newComparyName.phone : data?.phone}
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
                onChange={handladress}
              value={newComparyNamet===true? newComparyName.adress : data?.adress}
                name="adress"
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedin Profile Link</span>
              </label>
              <input
                       {...register("linkedin")}
                   onChange={handllinkedin}
         
                 value={newComparyNamet===true? newComparyName.linkedin : data?.linkedin}
              
                type="text"
                placeholder="Linkedin Link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Profile Link</span>
                
              </label>
              <input
                       {...register("github")}
                   onChange={handlgithub}

           
                value={newComparyNamet===true? newComparyName.github : data?.github}
            
                type="text"
                placeholder="GitHub Link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Website Link</span>
              </label>
              <input
                          {...register("website")}
                   onChange={handlwebsite}

        
                  value={newComparyNamet===true? newComparyName.website : data?.website}
              
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


      <>
      
       
       





      </>

      
    </>
  );
};

export default ProfileUpdateModal;
