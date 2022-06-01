import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './handeTool.css'

const HandToos = () => {
    const [hproduct,setHandle]=useState([])

    useEffect(() => {
        fetch('https://immense-plains-72444.herokuapp.com/products',{
      method: "GET",
      headers: {
         "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
    })
            .then(res => res.json())
        .then(data=>setHandle(data))
    }, [])

    return (
      <>
      <Swiper
      slidesPerView={window.innerWidth<600? 1:2 ||window.innerWidth>900? 4:2}
          spaceBetween={30}
          slidesPerGroup={1}
     
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          loopFillGroupWithBlank={true}
            >
                     {
                    hproduct.map(product => <SwiperSlide key={product._id} className="handeItem">
                        
                        <div className="p-8 cart-body  delay-500">
                            <h6 className={product.discount && ' absolute lg:left-4 left-2 md:left-0  top-2 rounded-none lg:top-8 btn btn-primary btn-sm text-white'}>{ product.discount}</h6>
                            <img src={product.img} alt="" />
                            <span className="flex justify-center mt-4"><img className="w-[100px] " src={product.rimg} alt="" /></span>
                            <h4 className="capitalize">{product.name}</h4>
                            <span className="flex justify-center gap-x-4">
                                <h5>${product.price}</h5>
                                <h5><del>${product.pprice}</del></h5>
                            </span>
                        </div>
                    </SwiperSlide>)
                }
              
      </Swiper>
    </>
    );
};

export default HandToos;