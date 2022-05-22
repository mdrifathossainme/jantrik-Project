import React from 'react';
import Tobbar from '../../Components/NavBar/Tobbar';
import Categorise from './Categorise';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <>
          <div class="divider"></div>
            <Tobbar/>
            <div className='home carosule'>
               
                 <HomeCarousel />
            </div>
            <div className='categorise px-12 py-16'>
            <Categorise/>
            </div>
        </>
    );
};

export default Home;