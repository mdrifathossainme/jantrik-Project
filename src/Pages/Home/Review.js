import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./review.css";
import { Icon } from "react-icons-kit";
import { star } from "react-icons-kit/fa/star";

const Review = () => {
  const [reviews, setReview] = useState([]);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    fetch("https://immense-plains-72444.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={window.innerWidth < 600 ? 1 : 2}
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
        {reviews.reverse().map((review) => (
          <SwiperSlide key={review._id} className="handeItem">
            <div className=" lg:w-full lg:h-[180px]  border-2 text-left grid grid-col-1 md:grid-cols-5 items-center gap-x-4 lg:p-4 p-8">
              <div className="lg:w-[250px] lg:col-span-1">
                <img
                  className="lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] rounded-full"
                  src={review.img}
                  alt=""
                />
              </div>
              <div className=" lg:col-span-4 ">
                <h4>{review.name}</h4>
                {[...Array(5)].map((stat, i) => {
                  const rantingvalue = i + 1;
                  return (
                    <label>
                      <Icon
                        className={`mx-[2px] text-${
                          rantingvalue <= review?.rating
                            ? "red-500"
                            : "[#e4e5e9]"
                        }`}
                        size={20}
                        icon={star}
                      />
                    </label>
                  );
                })}
                <p className="">{review.reviwe.slice(0, 120)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
