import React from 'react';
import { Icon } from 'react-icons-kit'
import { mapMarker } from 'react-icons-kit/fa/mapMarker'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import {phone} from 'react-icons-kit/fa/phone'
const Footer = () => {
    return (
        <>
        <div className='grid lg:grid-cols-6 grid-cols-1 px-12 gap-8 bg-slate-100  pt-12'>
            <div className='col-span-2'>
                <div><h5 className='text-xl'>Contact Us</h5></div>
                <div className='py-4'>
                    <span className='flex gap-x-2 items-center '>
                        <Icon icon={mapMarker} size={20} />
                        <p className='mt-2'>Dhaka, BanglaDesh</p>
                    </span>
                    <span className='flex gap-x-2 items-center '>
                        <Icon icon={envelopeO} size={20} />
                        <p className='mt-2'>Mail Us: mdrifat.mr@gmail.com</p>
                    </span>
                    <span className='flex gap-x-2 items-center '>
                        <Icon icon={phone} size={20} />
                        <p className='mt-2'>Phone: 0123456789</p>
                    </span>
                    <span >
                        <img className='mt-8' src="https://i.ibb.co/SJmt8qz/1-1.webp" alt="" />
                    </span>
                   
                </div>
            </div>
            <div>
                <div><h5 className='text-xl'>Information</h5></div>
                <div className='py-4 flex flex-col gap-2'>
                    
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Site Map</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Specials</a>
                    <a  className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Jobs</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Delivery Information</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">Order History</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Privacy Policy</a>
                   
                </div>
            </div>
            <div>
                <div><h5 className='text-xl'>My Account</h5></div>
                <div className='py-4 flex flex-col gap-2'>
                     <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">My Account</a>
                   <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Checkout</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Login</a>
                    <a  className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Address</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Order Status</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">Site Map</a>
                   
                   
                </div>
            </div>
            <div>
                <div><h5 className='text-xl'>Customer Service</h5></div>
                <div className='py-4 flex flex-col gap-2'>
                     <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">My Account</a>
                   <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">New</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Gift Cards</a>
                    <a  className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Return Policy</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Your Orders</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">Subway</a>
                   
                   
                </div>
            </div>
            <div>
                <div><h5 className='text-xl'>Let Us Help You</h5></div>
                <div className='py-4 flex flex-col gap-2'>
                     <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">Your Account</a>
                   <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Your Orders</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Shipping</a>
                    <a  className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Amazon Prime</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out' href="#">Replacements</a>
                    <a className='hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out'href="#">Manage</a>
                   
                   
                </div>
            </div>
           
            </div>
            <div className='py-4 px-12 bg-slate-200'>
                <span>
                    <h5 className='font-semibold'> &copy;{(new Date().getFullYear())} Jantrik Made with  by Rifat Hossain</h5>
                </span>
                <span>
                    
                </span>
            </div>
        </>
    );
};

export default Footer;