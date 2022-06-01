import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase,init';

const PhotoUpdateNodal = ({user,setIpn ,refetch}) => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const [updateProfile, updating, error] = useUpdateProfile(auth);

  const handlePhoto = (e) => {
  
    const img = e.img[0]
    const formData = new FormData()
    formData.append('image', img)
    

      const imgStorKey = `d098b89ba40ba637ae5b99f2586771ac`

    
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
      
       const udurl = `http://localhost:5000/user/upprofile/${user.email}`;
        fetch(udurl, {
       method: "PUT",
       headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
      body: JSON.stringify({img}),
    })
      .then((res) => res.json())
      .then((data) => {
        setIpn(null);
        refetch()
        toast.success('Image Update Complte')
      });
        }
      })
  
   refetch()
  
}
    return (
        <>
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
              <button onClick={refetch()}  type="submit" className="btn btn-primary">
               Update Photo
              </button>
         </div>
            </form>
            


    
  </div>
</div>
        
        </>
    );
};

export default PhotoUpdateNodal;