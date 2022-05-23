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
          <div className="divider"></div>
            <div className='hidden lg:block'>
                <Topbar/>
            </div>
            <div className='home carosule'>
               
                 <HomeCarousel />
            </div>
            <div className='categorise px-12 py-24'>
            <Categorise/>
            </div>
            <div className='px-12 '>
                <h4 className='text-2xl'>Hand Tools</h4>
                <div  className='divaidar mb-4'></div>
                <HandToos/>
            </div>
            <div className='px-12'>
                <Toolset/>
            </div>
            <div className='px-12'>
                <Tool/>
            </div>
            <div className='px-12'>
              <Services/>
            </div>
            <div className='px-12'>
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