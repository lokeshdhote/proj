"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Page2 = () => {
  return (
    <>
      <div className="h-fit max-md:h-full w-full  ">
        <h1 className="text-4xl max-md:text-2xl  flex justify-center py-12 text-center font-semibold ">
          Popular Job Categories
        </h1>

<div className='h-full px-10  py-10 '>
<Swiper
autoplay={{
  delay: 2500,
  disableOnInteraction: false,
}}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/web.jpg)",backgroundSize:"cover"}}>  <h1>Build Your Website</h1>
        <h2 className='text-2xl font-semibold'> Website Development</h2></SwiperSlide>
        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/seo.jpg)",backgroundSize:"cover"}}>  <h1>Boost your traffic</h1>
        <h2 className='text-2xl  font-semibold'> SEO</h2></SwiperSlide>

        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/logos.jpg)",backgroundSize:"cover"}}>  <h1>Elevate your brand</h1>
        <h2 className='text-2xl font-semibold'> Logo Design</h2></SwiperSlide>


        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/voice.jpg)",backgroundSize:"cover"}}>  <h1> Tell your story</h1>
        <h2 className='text-2xl  font-semibold'>Voice-over </h2></SwiperSlide>

        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/graphic.jpg)",backgroundSize:"cover"}}>  <h1>Brings to life</h1>
        <h2 className='text-2xl  font-semibold'> Graphic Design</h2></SwiperSlide>


        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/content.jpg)",backgroundSize:"cover"}}>  <h1>Engage  your community</h1>
        <h2 className='text-2xl  font-semibold'> Content Writing</h2></SwiperSlide>


        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/call.jpg)",backgroundSize:"cover"}}>  <h1>Convert more leads</h1>
        <h2 className='text-2xl  font-semibold'> Sales & Calls</h2></SwiperSlide>

        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/draw.jpg)",backgroundSize:"cover"}}>  <h1>Pictures your idea</h1>
        <h2 className='text-2xl  font-semibold'> Illustration & Drawing</h2></SwiperSlide>

        <SwiperSlide className='h-[46vh] rounded-md px-4 py-4 bg-yellow-300 text-white' style={{backgroundImage:"url(/workload.jpg)",backgroundSize:"cover"}}>  <h1>Ease your workload</h1>
        <h2 className='text-2xl  font-semibold'> Admin Assistance</h2></SwiperSlide>
      </Swiper>

<div className='flex items-center gap-4 py-2'>
<h2 className='text-sm font-semibold text-[#196eaf]'>ALL CATEGORIES </h2>
<h3><i class="ri-arrow-right-line text-2xl text-[#196eaf]"></i></h3>
</div>
</div>
       

        
      </div>
    </>
  );
};

export default Page2;

