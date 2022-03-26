import React from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Zoom } from "react-reveal";

// mantine
import { Box, TextInput, Button, ActionIcon } from "@mantine/core";

const AvailabilityForm = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 40,
        left: 0,
        width: "100vw",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="bg-white text-black flex">
        <Zoom>
          <div className="flex items-center space-x-10 p-3">
            <div className="space-y-2">
              <p className="text-center uppercase text-xs">
                Check-in / check-out
              </p>
              <TextInput size="xs" radius={0} />
            </div>

            <div className="space-y-2">
              <p className="text-center uppercase text-xs">Adults</p>
              <div className="flex items-center space-x-5">
                <ActionIcon className="border border-gray-200" radius={50}>
                  <IoRemoveOutline />
                </ActionIcon>
                <span>1</span>
                <ActionIcon className="border border-gray-200" radius={50}>
                  <IoAddOutline />
                </ActionIcon>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-center uppercase text-xs">Children</p>
              <div className="flex items-center space-x-5">
                <ActionIcon className="border border-gray-200" radius={50}>
                  <IoRemoveOutline />
                </ActionIcon>
                <span>1</span>
                <ActionIcon className="border border-gray-200" radius={50}>
                  <IoAddOutline />
                </ActionIcon>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-center uppercase text-xs">Promo Code</p>
              <TextInput size="xs" radius={0} />
            </div>
          </div>
        </Zoom>

        <div className="flex items-center justify-center bg-[#53565A]">
          <Button className="w-full h-full bg-[#53565A] hover:bg-[#53565A] uppercase text-xs">
            Check Availability
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default AvailabilityForm;
