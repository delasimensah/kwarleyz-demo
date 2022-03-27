import React from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

// mantine
import { TextInput, Button, ActionIcon } from "@mantine/core";

const AvailabilityForm = () => {
  return (
    <div className="absolute left-0 z-20 flex items-center justify-center w-screen bottom-10">
      <div className="flex text-black bg-white">
        <div className="flex items-center p-3 space-x-10">
          <div className="space-y-2">
            <p className="text-xs text-center uppercase">
              Check-in / check-out
            </p>
            <TextInput size="xs" radius={0} />
          </div>

          <div className="space-y-2">
            <p className="text-xs text-center uppercase">Adults</p>
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
            <p className="text-xs text-center uppercase">Children</p>
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
            <p className="text-xs text-center uppercase">Promo Code</p>
            <TextInput size="xs" radius={0} />
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#53565A]">
          <Button className="w-full h-full bg-[#53565A] hover:bg-[#53565A] uppercase text-xs">
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityForm;
