import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

import logo from "../assets/images/Logo.svg";
import fb from "../assets/images/fb-logo.svg";
import twitter from "../assets/images/twitter-logo.svg";
import insta from "../assets/images/insta-logo.svg";
import trip from "../assets/images/trip-logo.svg";

// mantine
import { Box, Button, TextInput, ActionIcon } from "@mantine/core";

const Footer = () => {
  return (
    <Box className="bg-black text-white py-10 px-20 space-y-3">
      <div className="flex items-center justify-between pb-10 border-b">
        <Box className="w-24 h-24">
          <NextLink href="/">
            <a>
              <Image src={logo} alt="logo" className="text-black" />
            </a>
          </NextLink>
        </Box>

        <Button
          variant="filled"
          radius={0}
          className="text-black button bg-white w-40 uppercase hover:bg-black hover:border hover:border-white hover:text-white"
        >
          Reserve Now
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-10 py-10">
        <div className="col-span-2 space-y-20">
          <div className="space-y-10">
            <p className="text-xl w-3/5">Subscribe to our newsletter</p>

            <div className="flex">
              <TextInput
                variant="unstyled"
                className="border-b w-full"
                fullwidth
                placeholder="Email address"
              />

              <div className="bg-white">
                <ActionIcon className="bg-white h-full w-10" radius={0}>
                  <IoChevronForward size="20px" />
                </ActionIcon>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <NextLink href="/">
              <a className="capitalize">terms & conditions</a>
            </NextLink>

            <NextLink href="/">
              <a className="capitalize">privacy policy</a>
            </NextLink>
          </div>
        </div>

        <div className="space-y-3 flex flex-col">
          <NextLink href="/">
            <a className="capitalize">{"what's on"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"atlantis blog"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"festive"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"celebrations"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"new year's eve"}</a>
          </NextLink>
        </div>

        <div className="space-y-3 flex flex-col">
          <NextLink href="/">
            <a className="capitalize">{"memberships"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"atlantis"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"members rate"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"the atlantis"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"cicle"}</a>
          </NextLink>
        </div>

        <div className="space-y-3 flex flex-col">
          <NextLink href="/">
            <a className="capitalize">{"about"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"palm"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"royal"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"travel partners"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"sustainability"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"location"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"contact us"}</a>
          </NextLink>

          <NextLink href="/">
            <a className="capitalize">{"FAQs"}</a>
          </NextLink>
        </div>

        <div className="space-y-3 flex flex-col">
          <NextLink href="/">
            <a className="capitalize">{"atlantis dubai"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"sitemap"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"resort terms"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"privacy policy"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"website terms"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"kerzner"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"one & only"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"mazagan"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"siro"}</a>
          </NextLink>
          <NextLink href="/">
            <a className="capitalize">{"careers"}</a>
          </NextLink>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex items-center space-x-5">
          <div className="w-10 h-10">
            <NextLink href="/">
              <a>
                <Image src={fb} alt="logo" />
              </a>
            </NextLink>
          </div>

          <div className="w-10 h-10">
            <NextLink href="/">
              <a>
                <Image src={twitter} alt="logo" />
              </a>
            </NextLink>
          </div>

          <div className="w-10 h-10">
            <NextLink href="/">
              <a>
                <Image src={insta} alt="logo" />
              </a>
            </NextLink>
          </div>

          <div className="w-10 h-10">
            <NextLink href="/">
              <a>
                <Image src={trip} alt="logo" />
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
