import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header1.png";

// mantine
import { Box } from "@mantine/core";

// components
import Caption from "../caption";
import Overlay from "../overlay";
import AvailabilityForm from "components/availability-form";

const array = new Array(3).fill(0);

const Header = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
      >
        {array.map((_, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box
                sx={{
                  height: "100vh",
                  position: "relative",
                }}
              >
                <Caption />

                <Overlay />

                <Image src={HeaderImage} alt="header image" />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <AvailabilityForm />
    </Box>
  );
};

export default Header;
