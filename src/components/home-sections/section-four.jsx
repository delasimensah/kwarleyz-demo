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
              <div className="absolute top-0 left-0 w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5">
                <p className="text-3xl font-gothamMedium uppercase text-center text-white w-1/2">
                  atlantis Aquaventure
                </p>

                <p className="text-sm w-2/3 text-white text-center leading-loose">
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
            <div className="relative -left-10 z-30 -bottom-40">
              <div className="absolute top-0 left-0 w-full h-full z-20 text-white flex justify-center items-center">
                <div className="w-60 h-60">
                  <Image src={Logo} alt="" />
                </div>
              </div>
              <Image src={Img2} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
