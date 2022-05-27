import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-blue-900 py-8 flex justify-center'>
            <span>
                <img src="https://i.ibb.co/fFvHVQL/404-1-1920x.webp" alt="" />
                <h1 className='text-center text-white text-4xl'>PAGE NOT FOUND</h1>
                <Link className='flex justify-center' to="/"><button className='btn btn-primary w-[150px] mt-4 text-white '>Home</button></Link>
             </span>
        </div>
    );
};

export default NotFound;