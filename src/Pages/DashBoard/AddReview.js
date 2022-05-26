import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase,init';

const AddReview = () => {
const [user]=useAuthState(auth)

        const handleReview = (e) => {
        e.preventDefault()
        const review = e.target.review.value;
        const name=user.displayName
        const start='ttps://i.ibb.co/KhVhL0v/five-5-star-rank-sign-illustration-free-vector.png'
        const img=user.photoURL? user.photoURL:"https://i.ibb.co/TcFkJKX/download-1.png"

            const upReciew = {
                review,
                name,
                start,
                img,
            }
    console.log(upReciew)


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