import React from "react";
import Image from "next/image";
import Img from "../../assets/images/section10/section10Img.png";
import { Fade } from "react-reveal";

// mantine
import { Button } from "@mantine/core";

const SectionTen = () => {
  return (
    <div className="p-20">
      <div className="relative">
        <Fade left distance="100px">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col px-20 text-white z-10 justify-center space-y-5">
            <p className="text-3xl text-white font-gothamMedium">
              The African Dream
            </p>

            <p className="w-2/5 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed
            </p>

            <Button
              variant="filled"
              className="bg-[#53565A] text-white hover:bg-white hover:text-[#53565A] w-40 uppercase"
              radius={0}
            >
              Know More
            </Button>
          </div>
        </Fade>

        <Image src={Img} alt="header image" />
      </div>
    </div>
  );
};

export default SectionTen;
