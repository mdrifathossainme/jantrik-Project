import React from 'react';
import { Icon } from 'react-icons-kit'
import { flag } from 'react-icons-kit/fa/flag'
import { desktop } from 'react-icons-kit/fa/desktop'
import { group } from 'react-icons-kit/fa/group'
import {ic_feedback} from 'react-icons-kit/md/ic_feedback'
const BusinessSummary = () => {
    return (
        <div className='py-12'>
            <div>
                <h1 className='text-center uppercase lg:text-5xl text-2xl text-success'>Milions business Trust us</h1>
                <h2 className='text-center uppercase mt-4 lg:text-2xl'>try to understand User experience</h2>
                <div className='flex justify-center my-4 items-center gap-x-4'>
                    <div className="w-[150px] h-[3px] bg-success " ></div>
                    <p> </p>
                    <div className="w-[150px] h-[3px] bg-success " ></div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 py-8'>
                <div className="businessCard text-center ">
                    <span className='flex justify-center'><Icon className='text-success' icon={flag} size={70}></Icon></span>
                    <h1 className='text-4xl mt-4 mb-2'>143</h1>
                    <p className='text-success'>Countries</p>
                </div>
                <div className="businessCard text-center ">
                    <span className='flex justify-center'><Icon className='text-success' icon={desktop} size={70}></Icon></span>
                    <h1 className='text-4xl mt-4 mb-2'>543+</h1>
                    <p className='text-success'>Complete Project</p>
                </div>
                <div className="businessCard text-center ">
                    <span className='flex justify-center'><Icon className='text-success' icon={group} size={70}></Icon></span>
                    <h1 className='text-4xl mt-4 mb-2'>769+</h1>
                    <p className='text-success'>Happy Client</p>
                </div>
                <div className="businessCard text-center ">
                    <span className='flex justify-center'><Icon className='text-success' icon={ic_feedback} size={70}></Icon></span>
                    <h1 className='text-4xl mt-4 mb-2'>243+</h1>
                    <p className='text-success'>Feedback</p>
                </div>
             
              
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-8 gap-8 border-2 p-8'>
                <div>
                    <h2 className='capitalize text-3xl text-success'>have a any question about us or get A product request</h2>
                    <p className='capitalize text-xl mt-4'>don't hesitable contact us</p>
                </div>
                <div className=' flex  gap-4 items-end lg:justify-end'>
                    
                    <span><button className='btn btn-success capitalize text-white'>request for quote</button></span>
                    <span> <button className='btn btn-primary capitalize text-white'>contact us</button></span>
                </div>
               
            </div>
        </div>
    );
};

export default BusinessSummary;