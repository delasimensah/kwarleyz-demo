import React from "react";
import { Zoom } from "react-reveal";

const SectionFive = () => {
  return (
    <div className="p-14">
      <Zoom>
        <div className="flex items-center p-10 space-x-20 border border-gray-100 shadow-xl">
          <p className="text-3xl uppercase font-gothamMedium">
            Important Update
          </p>
          <p className="flex-grow text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil,
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default SectionFive;
