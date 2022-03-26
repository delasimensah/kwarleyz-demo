import React from "react";
import Sticky from "react-stickynode";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../assets/images/Logo.svg";

// mantine
import { Box, Group } from "@mantine/core";

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
      sx={{
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          component="header"
          sx={{
            position: "fixed",
            left: 0,
            right: 0,
            py: 20,
            transition: "all 0.3s ease-in-out 0s",
          }}
        >
          <Box className="w-full px-20 py-3 flex justify-between items-center">
            <Box className="w-24 h-24">
              <NextLink href="/">
                <a>
                  <Image src={logo} alt="logo" className="text-black" />
                </a>
              </NextLink>
            </Box>

            <Box className="space-x-16 flex items-center">
              {links.map(({ path, label }, idx) => {
                return (
                  <NextLink href={path} key={idx}>
                    <a className="capitalize font-gothamMedium font-light">
                      {label}
                    </a>
                  </NextLink>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Sticky>
    </Box>
  );
};

export default Navbar;
