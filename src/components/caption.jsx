import React from "react";
import Link from "next/link";
import { IoMailOutline, IoCallSharp } from "react-icons/io5";

// mantine
import { Title, Text, Button } from "@mantine/core";

const Caption = () => {
  return (
    <div className="absolute z-50 flex flex-col justify-center w-full h-full px-20 space-y-6 text-white">
      <Title className="text-4xl capitalize">
        {"You don't check-in; you move in "}
      </Title>

      <Text className="w-1/2 leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </Text>

      <Link href="/" passHref>
        <Button
          variant="filled"
          radius={0}
          className="w-40 text-black uppercase bg-white button hover:bg-black hover:text-white"
        >
          Explore
        </Button>
      </Link>

      <div className="space-y-4">
        <IoCallSharp size="25px" />
        <IoMailOutline size="25px" />
      </div>
    </div>
  );
};

export default Caption;
