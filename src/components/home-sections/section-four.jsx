import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import Img1 from "../../assets/images/section4/img1.png";
import Img2 from "../../assets/images/section4/img2.png";
import Logo from "../../assets/images/section4/trip-lg-logo.svg";

const SectionFour = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-2">
        <div className="">
          <Fade left distance="100px">
            <div className="relative -right-10">
              <div className="absolute top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-full space-y-5 text-white">
                <p className="w-1/2 text-3xl text-center text-white uppercase font-gothamMedium">
                  atlantis Aquaventure
                </p>

                <p className="w-2/3 text-sm leading-relaxed text-center text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio,
                  eaque rerum! Provident similique accusantium nemo autem.
                  Veritatis obcaecati tenetur iure eius earum ut molestias
                  architecto voluptate aliquam nihil,
                </p>
              </div>
              <Image src={Img1} alt="" />
            </div>
          </Fade>
        </div>

        <div className="">
          <Fade top distance="100px" delay={500}>
            <div className="relative z-30 -left-10 -bottom-40">
              <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-white">
                <div className="w-60 h-60">
                  <Image src={Logo} alt="" />
                </div>
              </div>
              <Image src={Img2} alt="" placeholder="blur" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
