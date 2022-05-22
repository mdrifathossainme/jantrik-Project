import React from 'react';
import Tobbar from '../../Components/NavBar/Tobbar';
import Categorise from './Categorise';
import HandToos from './HandToos';
import HomeCarousel from './HomeCarousel';

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
            <div className='px-12 text-2xl'>
                <h4>Hand Tools</h4>
                <div className='divaidar'></div>
                <HandToos/>
            </div>
        </>
    );
};

export default Home;