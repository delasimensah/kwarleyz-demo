import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../assets/images/Logo.svg";

// mantine
import { Box } from "@mantine/core";

const links = [
  {
    path: "/",
    label: "offers",
  },
  {
    path: "/",
    label: "stays",
  },
  {
    path: "/",
    label: "aquaventure",
  },
  {
    path: "/",
    label: "dining and nightlife",
  },
  {
    path: "/",
    label: "experiences",
  },
  {
    path: "/",
    label: "no.1 the royal",
  },
];

const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: "transparent",
        color: "white",
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 20000,
      }}
    >
      <Box className="flex items-center justify-between w-full px-20 py-3 bg-transparent">
        <Box className="w-24 h-24">
          <NextLink href="/">
            <a>
              <Image src={logo} alt="logo" className="text-black" />
            </a>
          </NextLink>
        </Box>

        <Box className="flex items-center space-x-16">
          {links.map(({ path, label }, idx) => {
            return (
              <NextLink href={path} key={idx}>
                <a className="font-light capitalize font-gothamMedium">
                  {label}
                </a>
              </NextLink>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
