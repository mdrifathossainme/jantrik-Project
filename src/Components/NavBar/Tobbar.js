import React from 'react';
import { Icon } from 'react-icons-kit'
import {ic_search_outline} from 'react-icons-kit/md/ic_search_outline'
const Tobbar = () => {
    return (
        <div className='px-12 pb-4 flex justify-between gap-x-8'>
            
            <div className='flex flex-1 items-center gap-x-2'>
                <img src="https://i.ibb.co/w7kc87k/call.webp" alt="" />
                <h6>Call Us : +11 222 3333</h6>
            </div>
            <div className='flex-1 '>
                <form  className='flex items-center'>
                    <input placeholder='Search Your Product' className='border-2 py-2 px-2 w-[250px] rounded-tl-full rounded-bl-full border-slate-200	' type="text" name="text" id="" />
                    <button className='btn btn-primary text-white  rounded-tr-full rounded-br-full' type="submit" ><Icon icon={ic_search_outline} size={30}></Icon></button>
                </form>
            </div>
            <div className=' flex justify-around flex-1'>
                <span className='flex items-center '>
                    <p>Language:</p>
                     <select class="select  max-w-xs">
                    <option>English</option>
                    <option>Japanese</option>
                    <option>Italian</option>
                    </select>
                   </span>
                <span className='flex items-center'>
                    <p>Currency:</p>
                     <select class="select  max-w-xs">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>CNY</option>
                    </select>
                   </span>
                   
            </div>
        </div>
    );
};

export default Tobbar;