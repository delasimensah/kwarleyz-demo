import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header1.png";

// mantine
import { Box } from "@mantine/core";

// components
import Overlay from "components/overlay";

const Header = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
              position: "relative",
            }}
          >
            <Overlay />
            <Image
              src={HeaderImage}
              alt="Picture of the author"
              className="swiper-lazy"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Header;
