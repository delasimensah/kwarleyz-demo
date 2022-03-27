import React from "react";
import { Pagination, Autoplay, EffectFade } from "swiper";
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
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
      >
        {array.map((_, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="relative w-screen h-screen">
                <Caption />
                <Overlay />
                <div
                  slot="container-start"
                  className="absolute top-0 left-0 z-10 w-full h-full bg-center bg-cover"
                >
                  <Image
                    src={HeaderImage}
                    alt="header image"
                    placeholder="blur"
                  />
                </div>
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
