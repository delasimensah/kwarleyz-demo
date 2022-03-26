import React from "react";
import { Pagination, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header1.png";

// mantine
import { Box } from "@mantine/core";

// components
import Caption from "../caption";
import Overlay from "../overlay";
import AvailabilityForm from "../availability-form";

const array = new Array(3).fill(0);

const Header = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Swiper
        modules={[Pagination, Autoplay, Lazy]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        lazy={true}
        className="mySwiper"
      >
        {array.map((_, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  height: "100vh",
                  position: "relative",
                }}
                className="swiper-lazy"
              >
                <Caption />

                <Overlay />

                <Image src={HeaderImage} alt="header image" />
              </Box>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <AvailabilityForm />
    </Box>
  );
};

export default Header;
