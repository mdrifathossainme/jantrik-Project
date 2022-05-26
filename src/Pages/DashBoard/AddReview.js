import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase,init';

const AddReview = () => {
const [user]=useAuthState(auth)

        const handleReview = (e) => {
        e.preventDefault()
        const reviwe = e.target.review.value;
        const name=user.displayName
        const start='https://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'
        const img=user.photoURL? user.photoURL:"https://i.ibb.co/TcFkJKX/download-1.png"

            const upReciew = {
                reviwe,
                name,
                start,
                img,
            }
            
        const url=`https://immense-plains-72444.herokuapp.com/review`
        fetch(url, {
            method: "POST",
            headers:{
                'content-type': "application/json",
                "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
            }
            ,body:JSON.stringify(upReciew)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
                toast('Thank For Your Review')
               
        })
    }
    return (
        <>
            <h1 className='text-3xl font-semibold text-success'>Your Review</h1>
            <form onSubmit={handleReview} className='mt-8'>
                <textarea placeholder='Your  Review' style={{ outline: 'none' }} className='border-b-2 p-2 border-black block' name="review" id="" cols="100" rows="1" required></textarea>
                <button type='submit' className='btn mt-4 btn-success text-white lg:w-36 btn-outline'>Submit</button>
            </form>
        </>
    );
};

export default AddReview;