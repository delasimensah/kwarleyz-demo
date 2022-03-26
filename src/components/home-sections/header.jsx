import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header.jpg";
// import HeaderImageTwo from "../../assets/images/header2.jpg";

// mantine
import { Box } from "@mantine/core";

// components
import Overlay from "components/overlay";
// import AvailabilityForm from "components/availability-form";

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

      {/* <AvailabilityForm /> */}
    </Box>
  );
};

export default Header;
