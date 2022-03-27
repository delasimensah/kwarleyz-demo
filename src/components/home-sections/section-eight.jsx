import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img1 from "../../assets/images/section8/img1.png";
import Img2 from "../../assets/images/section8/img2.png";
import Img3 from "../../assets/images/section8/img3.png";
import Img4 from "../../assets/images/section8/img4.png";

import { Button } from "@mantine/core";

const SectionEight = () => {
  return (
    <div className="h-[1550px]">
      <div className="w-4/5 mx-auto bg-white -top-[250px]  relative">
        <div className="grid grid-cols-2 gap-20 p-20">
          <Fade top distance="50px">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl capitalize font-gothamMedium">
                Celebrity Chef
              </p>

              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </p>

              <Button
                variant="outline"
                radius={0}
                className="w-40 text-black uppercase border border-black hover:bg-black hover:text-white"
              >
                Explore
              </Button>
            </div>
          </Fade>

          <Fade bottom distance="50px" delay={500}>
            <div>
              <Image src={Img1} alt="" placeholder="blur" />
            </div>
          </Fade>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <Fade left distance="50px" delay={500}>
            <div>
              <Image src={Img2} alt="" placeholder="blur" />
            </div>
          </Fade>

          <Fade top distance="50px">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl capitalize font-gothamMedium">
                bar and nightlife
              </p>

              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </p>

              <Button
                variant="outline"
                radius={0}
                className="w-40 text-black uppercase border border-black hover:bg-black hover:text-white"
              >
                Explore
              </Button>
            </div>
          </Fade>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <Fade bottom distance="50px">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl capitalize font-gothamMedium">
                {"Ghana's best brunches"}
              </p>

              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </p>

              <Button
                variant="outline"
                radius={0}
                className="w-40 text-black uppercase border border-black hover:bg-black hover:text-white"
              >
                Explore
              </Button>
            </div>
          </Fade>

          <Fade top distance="50px" delay={500}>
            <div>
              <Image src={Img3} alt="" placeholder="blur" />
            </div>
          </Fade>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <Fade top distance="50px" delay={500}>
            <div>
              <Image src={Img4} alt="" placeholder="blur" />
            </div>
          </Fade>

          <Fade left distance="50px">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl capitalize font-gothamMedium">
                bar and nightlife
              </p>

              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </p>

              <Button
                variant="outline"
                radius={0}
                className="w-40 text-black uppercase border border-black hover:bg-black hover:text-white"
              >
                Explore
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
