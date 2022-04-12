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

const Header = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-screen h-screen">
                <Caption
                  heading={slide.heading}
                  description={slide.description}
                />

                <Overlay />
                <div
                  slot="container-start"
                  className="absolute top-0 left-0 z-10 w-full h-full bg-center bg-cover"
                >
                  <Image
                    src={slide.image.src}
                    alt="header image"
                    // placeholder="blur"
                    height={slide.image.height}
                    width={slide.image.width}
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
