import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/NavBar/Topbar';
import BusinessSummary from './BusinessSummary';
import Categorise from './Categorise';
import HandToos from './HandToos';
import HomeCarousel from './HomeCarousel';
import Newsletters from './Newsletters';
import Review from './Review';
import Services from './Services';
import Tool from './Tool';
import Toolset from './Toolset';

const Home = () => {
    return (
        <>
            <div className='hidden lg:block pt-4'>
                <Topbar/>
            </div>
            <div className='home carosule'>
               
                 <HomeCarousel />
            </div>
            <div className='categorise lg:px-12 px-8 py-24'>
            <Categorise/>
            </div>
            <div className='px-12 '>
                <h4 className='text-2xl'>Hand Tools</h4>
                <div  className='divaidar mb-4'></div>
                <HandToos/>
            </div>
            <div className='lg:px-12 px-8 '>
                <Toolset/>
            </div>
            <div className='lg:px-12 px-8'>
                <Tool/>
            </div>
            <div className='lg:px-12 px-8'>
              <Services/>
            </div>
            <div className='lg:px-12 px-8'>
              <BusinessSummary/>
            </div>
            <div className='px-12'>
                <h4 className='text-2xl'>Reviews</h4>
                <div className='divaidar'></div>
                <Review/>
            </div>
            <div className='px-12 py-12'>
                <h2 className='text-3xl text-center mb-4'>Sign Up For Newsletters</h2>
                <p className='text-center'>Get e-mail updates about our latest shop and special offers.</p>
                <Newsletters/>
            </div>
           <Footer/>
        </>
    );
};

export default Home;