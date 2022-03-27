import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header1.png";

// components
import Caption from "../caption";
import Overlay from "../overlay";
import AvailabilityForm from "../availability-form";

const array = new Array(3).fill(0);

const Header = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {array.map((_, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="relative h-screen">
                <Caption />

                <Overlay />

                <Image
                  src={HeaderImage}
                  alt="header image"
                  placeholder="blur"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <AvailabilityForm />
    </div>
  );
};

export default Header;
