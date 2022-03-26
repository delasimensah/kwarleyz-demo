import React from "react";
import Link from "next/link";
import { IoMailOutline, IoCallSharp } from "react-icons/io5";

// mantine
import { Box, Title, Text, Button } from "@mantine/core";

const Caption = () => {
  return (
    <Box
      className="absolute h-full w-full flex flex-col justify-center px-20 text-white space-y-6"
      sx={{ zIndex: 1500 }}
    >
      <Title className="capitalize text-4xl">
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
          className="text-black button bg-white w-40 uppercase hover:bg-black hover:text-white"
        >
          Explore
        </Button>
      </Link>

      <Box className="space-y-4">
        <IoCallSharp size="25px" />
        <IoMailOutline size="25px" />
      </Box>
    </Box>
  );
};

export default Caption;
