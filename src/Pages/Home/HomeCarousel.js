import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { EffectFade, Pagination } from "swiper";
import { Link } from "react-router-dom";
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
        <div className="z-10">
          <SwiperSlide
          style={{
            background: `url(https://i.ibb.co/0qGWNQj/3-1.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
              >
                  <div className="lg:p-12  p-8 ">
                      <h3 className="lg:text-4xl text-2xl"   data-aos-duration="500"  data-aos-delay="2000" data-aos="fade-right">Big Sale</h3>
            <h5 data-aos="fade-left" data-aos-delay="2500" data-aos-duration="500" className="lg:text-5xl md:text-4xl text-3xl lg:mt-8 md:leading-[50px] lg:leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
              <span data-aos-duration="1500" data-aos-delay="2200" data-aos="fade-up"> <Link to="/products" ><button className="btn btn-primary mt-4  text-white hover:bg-success">Shop Now</button></Link>
              
              </span>
                     
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
                      <h3 className="lg:text-4xl text-2xl"   data-aos-duration="500"  data-aos-delay="2000" data-aos="fade-right">Big Sale</h3>
                      <h5 className="lg:text-5xl md:text-4xl text-3xl lg:mt-8 md:leading-[50px] lg:leading-[60px]">Hand Tools <br /> Circular Saw & Power Saw</h5>
                      <Link to="/products" ><button className="btn btn-primary mt-4  text-white hover:bg-success">Shop Now</button></Link>
                     
                  </div>
        </SwiperSlide>
        </div>
      
              
      </Swiper>
    </>
  );
};

export default HomeCarousel;
