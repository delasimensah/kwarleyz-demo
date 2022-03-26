import React from "react";
import { Pagination, Autoplay, Lazy, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import HeaderImage from "../../assets/images/header.jpg";
import HeaderImageTwo from "../../assets/images/header2.jpg";

// mantine
import { Box } from "@mantine/core";

const Header = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Swiper
        effect={"fade"}
        modules={[Lazy, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        lazy={true}
        autoplay={{
          delay: 10000,
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
            <Image
              src={HeaderImage}
              alt="Picture of the author"
              className="swiper-lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1000,
                // backgroundColor: "black",
              }}
            >
              <h1>You dont move in you check in</h1>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              height: "100vh",
            }}
          >
            <Image
              src={HeaderImageTwo}
              alt="Picture of the author"
              className="swiper-lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: 0,
          width: "100vw",
          zIndex: 10000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50%", color: "white", border: "1px solid white" }}>
          Content
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
