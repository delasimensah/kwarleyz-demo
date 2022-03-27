import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Img1 from "../../assets/images/section8/img1.png";
import Img2 from "../../assets/images/section8/img2.png";
import Img3 from "../../assets/images/section8/img3.png";
import Img4 from "../../assets/images/section8/img4.png";

import { Button } from "@mantine/core";

const Text = ({ heading, text }) => {
  return (
    <div className="flex flex-col space-y-5">
      <p className="text-2xl capitalize font-gothamMedium">{heading}</p>

      <p className="text-sm leading-relaxed">{text}</p>

      <Button
        variant="outline"
        radius={0}
        className="w-40 text-black uppercase border border-black hover:bg-black hover:text-white"
      >
        Explore
      </Button>
    </div>
  );
};

const Img = ({ img }) => {
  return <Image src={img} alt="" placeholder="blur" />;
};

const features = [
  {
    title: "celebrity chef",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim emollitia, molestiae quas vel sint commodi repudianda consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    img: Img1,
    textTop: true,
    textBottom: false,
    textRight: false,
    textLeft: false,
    imgTop: false,
    imgBottom: true,
    imgRight: false,
    imgLeft: false,
    alt: false,
  },
  {
    title: "bar and nightlife",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim emollitia, molestiae quas vel sint commodi repudianda consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    img: Img2,
    textTop: true,
    textBottom: false,
    textRight: false,
    textLeft: false,
    imgTop: false,
    imgBottom: false,
    imgRight: false,
    imgLeft: true,
    alt: true,
  },
  {
    title: "ghana's best brunches",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim emollitia, molestiae quas vel sint commodi repudianda consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    img: Img3,
    textTop: false,
    textBottom: true,
    textRight: false,
    textLeft: false,
    imgTop: true,
    imgBottom: false,
    imgRight: false,
    imgLeft: false,
    alt: false,
  },
  {
    title: "bar and nightlife",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim emollitia, molestiae quas vel sint commodi repudianda consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.",
    img: Img4,
    textTop: false,
    textBottom: false,
    textRight: false,
    textLeft: true,
    imgTop: true,
    imgBottom: false,
    imgRight: false,
    imgLeft: false,
    alt: true,
  },
];

const SectionEight = () => {
  return (
    <div className="lg:h-[1500px]">
      <div className="lg:w-4/5 lg:mx-auto bg-white lg:-top-[250px] relative p-20 space-y-40">
        {features.map((feature, idx) => {
          return (
            <div key={idx} className="grid grid-cols-2 gap-20">
              {feature.alt ? (
                <Fade
                  top={feature.imgTop}
                  bottom={feature.imgBottom}
                  right={feature.imgRight}
                  left={feature.imgLeft}
                  distance="50px"
                  delay={500}
                >
                  <Img img={feature.img} />
                </Fade>
              ) : null}

              <Fade
                top={feature.textTop}
                bottom={feature.textBottom}
                right={feature.textRight}
                left={feature.textLeft}
                distance="50px"
                delay={feature.textDelay}
              >
                <Text heading={feature.title} text={feature.text} />
              </Fade>

              {feature.alt ? null : (
                <Fade
                  top={feature.imgTop}
                  bottom={feature.imgBottom}
                  right={feature.imgRight}
                  left={feature.imgLeft}
                  distance="50px"
                  delay={500}
                >
                  <Img img={feature.img} />
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionEight;
