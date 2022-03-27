import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img1 from "../../assets/images/section6/img1.png";
import Img2 from "../../assets/images/section6/img2.png";
import Img3 from "../../assets/images/section6/img3.png";

import { Button } from "@mantine/core";

const array = [
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
];

const SectionSix = () => {
  return (
    <div className="px-20 py-10 space-y-10">
      <div className="flex flex-col items-center space-y-3">
        <p className="text-3xl uppercase font-gothamMedium">Stay with us</p>

        <div className="h-[2px] w-40 bg-[#C8C6C6]" />

        <p className="w-2/3 leading-loose text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed
        </p>
      </div>

      <Fade left distance="100px" delay={200}>
        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 15,
            depth: 80,
            modifier: 1,
            slideShadows: true,
            scale: 0.7,
          }}
          modules={[EffectCoverflow, Navigation]}
          spaceBetween={0}
          navigation={true}
        >
          {array.map(({ img }, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="h-[350px]">
                  <Image
                    src={img}
                    alt=""
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fade>

      <div className="flex items-center justify-center">
        <Button
          variant="filled"
          className="bg-[#53565A] text-white hover:bg-white hover:text-[#53565A] hover:border hover:border-[#53565A] w-40 uppercase"
          radius={0}
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default SectionSix;
