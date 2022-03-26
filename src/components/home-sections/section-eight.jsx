import React from "react";
import Image from "next/image";

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
          <div className="flex flex-col space-y-5">
            <p className="text-2xl capitalize font-gothamMedium">
              Celebrity Chef
            </p>

            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>

            <Button
              variant="outline"
              radius={0}
              className="text-black border border-black hover:bg-black hover:text-white w-40 uppercase"
            >
              Explore
            </Button>
          </div>

          <div>
            <Image src={Img1} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <div>
            <Image src={Img2} alt="" />
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-2xl capitalize font-gothamMedium">
              bar and nightlife
            </p>

            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>

            <Button
              variant="outline"
              radius={0}
              className="text-black border border-black hover:bg-black hover:text-white w-40 uppercase"
            >
              Explore
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <div className="flex flex-col space-y-5">
            <p className="text-2xl capitalize font-gothamMedium">
              {"Ghana's best brunches"}
            </p>

            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>

            <Button
              variant="outline"
              radius={0}
              className="text-black border border-black hover:bg-black hover:text-white w-40 uppercase"
            >
              Explore
            </Button>
          </div>

          <div>
            <Image src={Img3} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 p-20">
          <div>
            <Image src={Img4} alt="" />
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-2xl capitalize font-gothamMedium">
              bar and nightlife
            </p>

            <p className="text-sm leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio.
            </p>

            <Button
              variant="outline"
              radius={0}
              className="text-black border border-black hover:bg-black hover:text-white w-40 uppercase"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
