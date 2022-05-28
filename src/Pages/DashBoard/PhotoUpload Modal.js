import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase,init";

const ProfileUpdateModal = ({ setIpn, user, refetch }) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  
  

  const imgStorKey = `d098b89ba40ba637ae5b99f2586771ac`
  
const [updateProfile, updating, error] = useUpdateProfile(auth);
  
const PhotoUploadModal = () => {
    return (
        <div>
            
           <input type="checkbox" id="phothoUpdateModal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
             <label
            htmlFor="phothoUpdateModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
            
        <form onSubmit={handleSubmit(handlePhoto)}>
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
         <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
               Update Photo
              </button>
         </div>
            </form>
            


    
  </div>
</div>
        </div>
    );
};

export default PhotoUploadModal ;