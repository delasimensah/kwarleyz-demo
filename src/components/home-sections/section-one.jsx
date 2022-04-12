import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img from "../../assets/images/section1/img1.png";

import { Button } from "@mantine/core";

const SectionOne = ({ content }) => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-5 h-[600px]">
        <Fade bottom distance="100px">
          <div className="relative col-span-3">
            <Image
              src={content.image.src}
              alt=""
              // placeholder="blur"
              layout="fill"
              objectFit="cover"
              // height={content.image.height}
              // width={content.image.width}
            />
          </div>
        </Fade>

        <div className="flex flex-col items-center justify-center col-span-2 space-y-5">
          <Fade left distance="100px" delay={500}>
            <div className="w-[120%] -left-12 relative z-20 space-y-5">
              <div className="p-20 space-y-5 bg-white border shadow-xl border-gray-50">
                <p className="text-3xl font-gothamMedium uppercase text-left  text-[#53565A]">
                  {content.title}
                </p>

                <p className="text-sm text-[#544F4F] text-left leading-relaxed">
                  {content.text}
                </p>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="filled"
                  className="bg-[#53565A] text-white hover:bg-white hover:text-[#53565A] hover:border hover:border-[#53565A] w-40 uppercase"
                  radius={0}
                >
                  Explore
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
