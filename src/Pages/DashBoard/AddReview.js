import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase,init";

const AddReview = () => {
  const [user] = useAuthState(auth);

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
      start,
      img,
    };

    const url = `http://localhost:5000/review`;
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
        toast(
          "Thank For Your Review ",
          'Note: কষ্ট করে রেটিং দেওয়ার দরকার নাই আমরা জানি আপনি ফাইভ স্টার রেটিং দিবেন আপনার যাতে কষ্ট করতে না হয় তার জন্য আমরা নিজেরাই রেটিং দিয়ে দিয়েছি ধন্যবাদ আবার আসবেন'
        );
      });
  };
  return (
    <div className="px-12 mt-8 lg:mt-2 lg:px-4">
      <h1 className="text-3xl font-semibold text-success">Your Review</h1>
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
