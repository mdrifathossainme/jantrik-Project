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
        fetch('handeProduct.json')
            .then(res => res.json())
        .then(data=>setHandle(data))
    }, [])
    console.log(hproduct.length)

    return (
      <>
      <Swiper
      slidesPerView={window.innerWidth<1000? 1:4}
          spaceBetween={30}
          slidesPerGroup={1}
     
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          loopFillGroupWithBlank={true}
            >
                     {
                    hproduct.map(product => <SwiperSlide className="handeItem">
                        
                        <div className="p-8 cart-body  delay-500">
                            <h6 className={product.discount && ' absolute left-4 rounded-none top-8 btn btn-primary btn-sm text-white'}>{ product.discount}</h6>
                            <img src={product.img} alt="" />
                            <span className="flex justify-center mt-4"><img className="w-[100px] " src={product.rimg} alt="" /></span>
                            <h4>{product.name}</h4>
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