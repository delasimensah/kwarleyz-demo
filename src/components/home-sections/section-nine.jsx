import React from "react";
import Image from "next/image";
import { Zoom, Fade } from "react-reveal";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../assets/images/section9/img1.png";

import { Button } from "@mantine/core";

const array = new Array(3).fill(0);

const SectionNine = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-2">
        <div className="">
          <Zoom distance="100px">
            <div className="relative -top-10 -right-10 bg-[#A8A7A7]">
              <div className=" w-full h-[500px] p-20 z-20 text-white flex flex-col border justify-center space-y-5">
                <p className="w-1/2 text-3xl text-left text-white capitalize font-gothamMedium">
                  Tick Off Your Bucket List
                </p>

                <p className="w-2/3 text-sm leading-loose text-left text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>

                <Button
                  variant="outline"
                  radius={0}
                  className="w-40 text-white uppercase border border-white hover:bg-white hover:text-black"
                >
                  Explore
                </Button>
              </div>
            </div>
          </Zoom>
        </div>

        <div className="">
          <Fade delay={500}>
            <div className="relative z-30 -left-20 -bottom-20">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={20}
                navigation={true}
              >
                {array.map((_, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="relative h-[500px]">
                        <Image src={Img1} alt="" placeholder="blur" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
