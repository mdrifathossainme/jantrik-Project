import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Tool.css";
import { Navigation } from "swiper";
const Tool = () => {
  const [hproduct, setHandle] = useState([]);

  useEffect(() => {
    fetch("handeProduct.json")
      .then((res) => res.json())
      .then((data) => setHandle(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-6  py-12 gird-cols-1 gap-8">
      <div className="py-4 lg:col-span-2 border-2">
        <h4 className="pl-4">Top Tool</h4>
        <div class="divider"></div>
        <div>
          <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="tool"
          >
            <SwiperSlide className="tool1-slider">
                               {
                    hproduct.slice(0,3).map(product => <SwiperSlide className="handeItem">
                        
                        <div className=" p-4 cart-body  delay-500">
                            <span className="flex">
                                 <span>
                                 <img className="tool-img" src={product.img} alt="" />
                            </span>
                            <span>
                                 <h6 className={product.discount && ' absolute left-2 rounded-none top-1 btn btn-primary btn-sm text-white'}>{ product.discount}</h6>
                           
                            <span className="flex justify-center mt-4"><img className="w-[100px] " src={product.rimg} alt="" /></span>
                                <h6 className="font-bold text-sm">{product.name}</h6>
                            <span className="flex justify-center gap-x-4">
                                <h5 className="font-bold">${product.price}</h5>
                                <h5><del>${product.pprice}</del></h5>
                            </span>
                           </span>
                           </span>
                        </div>
                    </SwiperSlide>)
                }  
            </SwiperSlide>
            <SwiperSlide className="tool1-slider">
                               {
                    hproduct.slice(3,6).map(product => <SwiperSlide className="handeItem">
                        
                         <div className=" p-4 cart-body  delay-500">
                            <span className="flex">
                                 <span>
                                 <img className="tool-img" src={product.img} alt="" />
                            </span>
                            <span>
                                 <h6 className={product.discount && ' absolute left-2 rounded-none top-1 btn btn-primary btn-sm text-white'}>{ product.discount}</h6>
                           
                            <span className="flex justify-center mt-4"><img className="w-[100px] " src={product.rimg} alt="" /></span>
                                <h6 className="font-bold text-sm">{product.name}</h6>
                            <span className="flex justify-center gap-x-4">
                                <h5 className="font-bold">${product.price}</h5>
                                <h5><del>${product.pprice}</del></h5>
                            </span>
                           </span>
                           </span>
                        </div>
                    </SwiperSlide>)
                }  
            </SwiperSlide>
            <SwiperSlide className="tool1-slider">
                               {
                    hproduct.slice(6).map(product => <SwiperSlide className="handeItem">
                        
                     <div className=" p-4 cart-body  delay-500">
                            <span className="flex">
                                 <span>
                                 <img className="tool-img" src={product.img} alt="" />
                            </span>
                            <span>
                                 <h6 className={product.discount && ' absolute left-2 rounded-none top-1 btn btn-primary btn-sm text-white'}>{ product.discount}</h6>
                           
                            <span className="flex justify-center mt-4"><img className="w-[100px] " src={product.rimg} alt="" /></span>
                                <h6 className="font-bold text-sm">{product.name}</h6>
                            <span className="flex justify-center gap-x-4">
                                <h5 className="font-bold">${product.price}</h5>
                                <h5><del>${product.pprice}</del></h5>
                            </span>
                           </span>
                           </span>
                        </div>
                    </SwiperSlide>)
                }  
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" lg:col-span-4 py-12 bg-fuchsia-600"></div>
    </div>
  );
};

export default Tool;
