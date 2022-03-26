import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img from "../../assets/images/section1/img1.png";

import { Button } from "@mantine/core";

const SectionOne = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <Fade bottom distance="50px">
            <Image src={Img} alt="" />
          </Fade>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5 col-span-2">
          <Fade left distance="100px" delay={500}>
            <div className="w-[130%] relative -left-[100px] z-20 space-y-5">
              <div className="shadow-xl border border-gray-50 bg-white p-20 space-y-5">
                <p className="text-3xl font-gothamMedium uppercase text-left  text-[#53565A]">
                  No.1 Oxford street hotels & suites
                </p>

                <p className="text-sm text-[#544F4F] text-left leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil,
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
