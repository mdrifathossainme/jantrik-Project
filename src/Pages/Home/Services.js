import React from 'react';

const Services = () => {
    return (
        <div className='py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
            <div className="service-card flex gap-x-4 border-2 p-2 ">
                <img src="https://i.ibb.co/rmz1t2Y/1-1.webp" alt="" />
                <span>
                    <p className='font-semibold'>FREE DELIVERY</p>
                    <p className='text-sm'>Free shipping on all order</p>
                </span>
            </div>
            <div className="service-card flex gap-x-4 border-2 p-2 ">
                <img src="https://i.ibb.co/ZgjHgMd/2-1.webp" alt="" />
                <span>
                    <p className='font-semibold'>ONLINE SUPPORT 24/7</p>
                    <p className='text-sm'>  Support online 24 hours</p>
                </span>
            </div>
            <div className="service-card flex gap-x-4 border-2 p-2 ">
                <img src="https://i.ibb.co/7J7yFY9/3-1.webp" alt="" />
                <span>
                      <p className='font-semibold'>MONEY RETURN</p>
                    <p className='text-sm'>Back guarantee under 7 days</p>
                </span>
            </div>
            <div className="service-card flex gap-x-4 border-2 p-2 ">
                <img src="https://i.ibb.co/VCkStDK/4-1.webp" alt="" />
                <span>
                    <p className='font-semibold'>MEMBER DISCOUNT</p>
                    <p className='text-sm'>Onevery order over $30.00</p>
                </span>
            </div>
        </div>
    );
};

export default Services;