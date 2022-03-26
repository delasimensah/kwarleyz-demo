import React from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";

import Img from "../../assets/images/section3/img1.png";

const SectionThree = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-3 gap-20">
        <Fade top distance="100px">
          <div className="flex flex-col justify-center items-center space-y-5">
            <p className="text-3xl font-gothamMedium uppercase text-center w-2/3 text-[#53565A]">
              atlantis Aquaventure
            </p>

            <p className="text-sm   text-[#544F4F] text-center leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
            </p>
          </div>
        </Fade>

        <div className="col-span-2">
          <Zoom delay={500}>
            <Image src={Img} alt="" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
