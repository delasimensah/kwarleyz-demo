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
import { Button, TextInput, ActionIcon } from "@mantine/core";

const Footer = () => {
  return (
    <div className="px-20 py-10 space-y-3 text-white bg-black">
      <div className="flex items-center justify-between pb-10 border-b">
        <div className="w-24 h-24">
          <NextLink href="/">
            <a>
              <Image src={logo} alt="logo" className="text-black" />
            </a>
          </NextLink>
        </div>

        <Button
          variant="filled"
          radius={0}
          className="w-40 text-black uppercase bg-white button hover:bg-black hover:border hover:border-white hover:text-white"
        >
          Reserve Now
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-10 py-10">
        <div className="col-span-2 space-y-20">
          <div className="space-y-10">
            <p className="w-3/5 text-xl">Subscribe to our newsletter</p>

            <div className="flex">
              <TextInput
                variant="unstyled"
                className="w-full border-b"
                placeholder="Email address"
              />

              <div className="bg-white">
                <ActionIcon className="w-10 h-full bg-white" radius={0}>
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

        <div className="flex flex-col space-y-3">
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

        <div className="flex flex-col space-y-3">
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

        <div className="flex flex-col space-y-3">
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

        <div className="flex flex-col space-y-3">
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
    </div>
  );
};

export default Footer;
