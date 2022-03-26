import React from "react";
import Image from "next/image";
import { Zoom, Fade } from "react-reveal";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "../../assets/images/section9/img1.png";

import { Button, Box } from "@mantine/core";

const array = new Array(3).fill(0);

const SectionNine = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-2">
        <div className="">
          <Zoom distance="100px">
            <div className="relative -top-10 -right-10 bg-[#A8A7A7]">
              <div className=" w-full h-[500px] p-20 z-20 text-white flex flex-col border justify-center space-y-5">
                <p className="text-3xl font-gothamMedium capitalize text-left text-white w-1/2">
                  Tick Off Your Bucket List
                </p>

                <p className="text-sm w-2/3 text-white text-left leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium
                </p>

                <Button
                  variant="outline"
                  radius={0}
                  className="text-white border border-white hover:bg-white hover:text-black w-40 uppercase"
                >
                  Explore
                </Button>
              </div>
            </div>
          </Zoom>
        </div>

        <div className="">
          <Fade delay={500}>
            <div className="relative -left-20 z-30 -bottom-20">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {array.map((_, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <Box
                        sx={{
                          height: "500px",
                          position: "relative",
                        }}
                      >
                        <Image src={Img1} alt="header image" />
                      </Box>
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
