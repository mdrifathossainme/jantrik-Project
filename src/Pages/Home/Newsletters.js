import React from 'react';
const Newsletters = () => {
    const handleSubcribe = (e) => {
        e.preventDefault()
        e.target.reset()
    }
    return (
         <div className='flex justify-center mt-8'>
                    <span>
                     <form onSubmit={handleSubcribe}  className='flex items-center'>
                    <input placeholder='Enter Your Email' className='border-2 py-2 px-2 lg:w-[450px] rounded-tl-full rounded-bl-full border-slate-200	' type="email" required name="text" id="" />
                    <button className='btn btn-primary text-white  rounded-tr-full rounded-br-full' type="submit" >SUBSCRIBE</button>
            </form>
                    </span>
                </div>
    );
};

export default Newsletters;