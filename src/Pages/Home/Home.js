import React from 'react';
import Tobbar from '../../Components/NavBar/Tobbar';
import BusinessSummary from './BusinessSummary';
import Categorise from './Categorise';
import HandToos from './HandToos';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import Tool from './Tool';
import Toolset from './Toolset';

const Home = () => {
    return (
        <>
          <div class="divider"></div>
            <div className='hidden lg:block'>
                <Tobbar/>
            </div>
            <div className='home carosule'>
               
                 <HomeCarousel />
            </div>
            <div className='categorise px-12 py-24'>
            <Categorise/>
            </div>
            <div className='px-12 '>
                <h4 className='text-2xl'>Hand Tools</h4>
                <div className='divaidar'></div>
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
           
        </>
    );
};

export default Home;