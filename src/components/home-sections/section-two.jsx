import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img1 from "../../assets/images/section2/img1.png";
import Img2 from "../../assets/images/section2/img2.png";
import Img3 from "../../assets/images/section2/img3.png";
import Img4 from "../../assets/images/section2/img4.png";

// mantine
import { Button } from "@mantine/core";

const array = [
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
  { img: Img1 },
  { img: Img2 },
  { img: Img3 },
  { img: Img4 },
];

const SectionTwo = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={4}
      spaceBetween={50}
      navigation={true}
      className="px-12"
      speed={2000}
    >
      {array.map(({ img }, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="space-y-5">
              <Fade left distance="20px">
                <Image src={img} alt="" placeholder="blur" />
              </Fade>

              <Fade left distance="50px" delay={500}>
                <div className="flex flex-col space-y-5">
                  <p className="text-[#53565A] text-2xl font-gothamMedium">
                    Spring Sale
                  </p>
                  <p className="text-[#544F4F] text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis .{" "}
                  </p>

                  <Button
                    variant="filled"
                    className="bg-[#53565A] text-white hover:bg-white hover:text-[#53565A] hover:border hover:border-[#53565A] w-40 uppercase"
                    radius={0}
                  >
                    Know More
                  </Button>
                </div>
              </Fade>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SectionTwo;
