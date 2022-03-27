import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header1.png";
import { Fade } from "react-reveal";

// components
import Caption from "../caption";
import Overlay from "../overlay";
import AvailabilityForm from "../availability-form";

const array = new Array(3).fill(0);

const Header = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        navigation={true}
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
