import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { EffectFade, Pagination, Autoplay } from "swiper";
const HomeCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,EffectFade ]}
        loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/0qGWNQj/3-1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center",
          }}
              >
                  <div className="px-12 pt-12">
                      <h3 className="text-4xl">Big Sale</h3>
                      <h5 className="text-5xl mt-8 leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
                      <button className="btn btn-primary  mt-8 text-white hover:bg-success">Shop Now</button>
                  </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/bLKdkDN/4-1.webp)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center",
          }}
        >
           <div className="px-12 pt-12">
                      <h3 className="text-4xl">Big Sale</h3>
                      <h5 className="text-5xl mt-8 leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
                      <button className="btn btn-primary  mt-8 text-white hover:bg-success">Shop Now</button>
                  </div>
        </SwiperSlide>
      
              
      </Swiper>
    </>
  );
};

export default HomeCarousel;
