import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { EffectFade, Pagination } from "swiper";
const HomeCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,EffectFade ]}
        loopFillGroupWithBlank={true}
        className="homeBanner"
      >
        <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/0qGWNQj/3-1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
              >
                  <div className="lg:p-12  p-8 ">
                      <h3 className="lg:text-4xl text-2xl">Big Sale</h3>
                      <h5 className="lg:text-5xl md:text-4xl text-3xl lg:mt-8 md:leading-[50px] lg:leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
                      <button className="btn btn-primary mt-4  text-white hover:bg-success">Shop Now</button>
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
           <div className="lg:p-12  p-8">
                      <h3 className="lg:text-4xl text-2xl">Big Sale</h3>
                      <h5 className="lg:text-5xl md:text-4xl text-3xl lg:mt-8 md:leading-[50px] lg:leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
                      <button className="btn btn-primary mt-4  text-white hover:bg-success">Shop Now</button>
                  </div>
        </SwiperSlide>
      
              
      </Swiper>
    </>
  );
};

export default HomeCarousel;
