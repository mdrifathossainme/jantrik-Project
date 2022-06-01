import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase,init";
import { Icon } from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
  
const AddReview = () => {
  const [user] = useAuthState(auth);
  const[rating,setRating]=useState(null)
  const[hoverRating,setHoverRating]=useState(null)

 


  const handleReview = (e) => {
    e.preventDefault();
    const reviwe = e.target.review.value;
    const name = user.displayName;
    const start =
      "https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png";
    const img = user.photoURL
      ? user.photoURL
      : "https://i.ibb.co/TcFkJKX/download-1.png";

    const upReciew = {
      reviwe,
      name,
      rating:rating||0,
      img,
    };

    const url = `https://immense-plains-72444.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
      body: JSON.stringify(upReciew),
    })
      .then((res) => res.json())
      .then((data) => {
    
        e.target.reset();
        toast.success('Thank your for Your Review');
        setRating(null)
      });
  };


  return (
    <div className="px-12 mt-8 lg:mt-2 lg:px-4">
      
      <h1 className="text-3xl font-semibold text-success mb-4">Your Review</h1>
      <span className="flex items-center gap-x-2">  <h6 className="font-semibold"><span className="mr-2">Fedback Rating :</span>
        {
          [...Array(5)].map((stat, i) =>
            
          {
            const rantingvalue=i+1
            return (
              <label>
              <input type="radio" className="hidden" value={rantingvalue} onClick={()=>setRating(rantingvalue)} />
                <Icon className={`cursor-pointer mx-[2px] ease-in-out duration-300 text-${rantingvalue <= (rating||hoverRating) ? '[#ffc107]' : '[#e4e5e9]'}`} size={20} icon={star}
                onMouseEnter={()=>setHoverRating(rantingvalue)}
                onMouseLeave={()=>setHoverRating(null)}
                />
            </label>
            )
            }
          )
        }
      
       
      </h6>
        <span ><>
  
        </></span></span>
      <form onSubmit={handleReview} className="mt-8">

        <textarea
          placeholder="Your  Review"
          style={{ outline: "none" }}
          className="border-b-2 p-2 border-black block w-[250px] lg:w-[600px]"
          name="review"
          id=""
          cols="full"
          rows="1"
          required
        ></textarea>
        <button
          type="submit"
          className="btn mt-4 btn-success text-white lg:w-36 btn-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
