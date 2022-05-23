import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './review.css'

const Review = () => {
  const [reviews,setReview]=useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
        .then(data=>setReview(data))
    }, [])
    return (
        <div>
            <Swiper
      slidesPerView={window.innerWidth<1000? 1:2}
         spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
                loopFillGroupWithBlank={true}
                className="review"
            >
               
                        {
                    reviews.slice(2).reverse().map(review => <SwiperSlide className="handeItem">
                        
                        <div className=" border-2 text-left flex items-center gap-x-4 p-4">
                            <div className="w-[250px]">
                                <img className="w-[100px] h-[100px] rounded-full" src={review.img} alt="" />
                            </div>
                            <div className="">
                                <h4>{review.name}</h4>
                                <span className="flex gap-x-2">
                                    <img  className="w-[20px] h-[20px]" src={review.start} alt="" />
                                    <img  className="w-[20px] h-[20px]" src={review.start} alt="" />
                                    <img  className="w-[20px] h-[20px]" src={review.start} alt="" />
                                    <img  className="w-[20px] h-[20px]" src={review.start} alt="" />
                                    <img  className="w-[20px] h-[20px]" src={review.start} alt="" />
                                </span>
                                <p>{review.reviwe}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
              
      </Swiper>
        </div>
    );
};

export default Review;