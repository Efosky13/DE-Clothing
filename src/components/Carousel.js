// components/Carousel.js
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

import React from 'react'

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src="/de-cloth.png" width={400} height={400} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/de-cloth.png" width={400} height={400} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/de-cloth.png"width={400} height={400} alt="Image 3" />
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  )
}
