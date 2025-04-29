"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Social = () => {
  return (
    <>
      <div
        className="h-fit  max-md:h-fit max-md:w-full w-full gap-8 py-10  flex flex-col items-center "
        
      >
        <h1 className="text-3xl max-md:text-xl font-semibold">
          Testimonials From Our Customers
        </h1>
        <p className="max-md:text-xs">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
        </p>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide
            className=" flex max-md:px-5 px-12 max-md:items-start max-md:justify-start  items-center justify-center"
            style={{ display: "flex" }}
          >
            <div className="w-1/2 max-md:w-full gap-4 px-7 max-md:px-4 max-md:items-start max-md:justify-start py-5 h-full flex flex-col  bg-white rounded-xl ">
              <h1 className="text-xl max-md:text-sm text-blue-400">
                Awesome Design
              </h1>
              <p className="max-md:text-xs" style={{ color: "#aeafaf" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eum explicabo itaque beatae unde reiciendis, expedita
                totam magni cupiditate minima maxime labore quas aliquam
                voluptas, veritatis vero, aliquid iusto dolorem.
              </p>

              <div className=" flex gap-4 items-center">
                <img
                  className="h-16 w-16 rounded-full  object-contain "
                  src="/u1.png"
                  alt=""
                />
                <div>
                  <h1 className="font-semibold" style={{ color: "#8d8d8d" }}>
                    Jenny Thomas{" "}
                  </h1>
                  <h2 className="text-sm" style={{ color: "#aeafaf" }}>
                    Designer
                  </h2>
                </div>

                {/* <div className='h-16 w-16 rounded-full absolute top-44 left-28 object-contain  bg-black'>
            </div> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className=" flex max-md:px-5 px-12 max-md:items-start max-md:justify-start  items-center justify-center"
            style={{ display: "flex" }}
          >
            <div className="w-1/2 max-md:w-full gap-4 px-7 max-md:px-4 max-md:items-start max-md:justify-start py-5 h-full flex flex-col  bg-white rounded-xl ">
              <h1 className="text-xl max-md:text-sm text-blue-400">
                Awesome Design
              </h1>
              <p className="max-md:text-xs" style={{ color: "#aeafaf" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eum explicabo itaque beatae unde reiciendis, expedita
                totam magni cupiditate minima maxime labore quas aliquam
                voluptas, veritatis vero, aliquid iusto dolorem.
              </p>

              <div className=" flex gap-4 items-center">
                <img
                  className="h-16 w-16 rounded-full  object-contain "
                  src="/u2.png"
                  alt=""
                />
                <div>
                  <h1 className="font-semibold" style={{ color: "#8d8d8d" }}>
                    Jenny Thomas{" "}
                  </h1>
                  <h2 className="text-sm" style={{ color: "#aeafaf" }}>
                    Designer
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className=" flex max-md:px-5 px-12 max-md:items-start max-md:justify-start  items-center justify-center"
            style={{ display: "flex" }}
          >
            <div className="w-1/2 max-md:w-full gap-4 px-7 max-md:px-4 max-md:items-start max-md:justify-start py-5 h-full flex flex-col  bg-white rounded-xl ">
              <h1 className="text-xl max-md:text-sm text-blue-400">
                Awesome Design
              </h1>
              <p className="max-md:text-xs" style={{ color: "#aeafaf" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eum explicabo itaque beatae unde reiciendis, expedita
                totam magni cupiditate minima maxime labore quas aliquam
                voluptas, veritatis vero, aliquid iusto dolorem.
              </p>

              <div className=" flex gap-4 items-center">
                <img
                  className="h-16 w-16 rounded-full  object-contain "
                  src="/u3.png"
                  alt=""
                />
                <div>
                  <h1 className="font-semibold" style={{ color: "#8d8d8d" }}>
                    Jenny Thomas{" "}
                  </h1>
                  <h2 className="text-sm" style={{ color: "#aeafaf" }}>
                    Designer
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Social;
