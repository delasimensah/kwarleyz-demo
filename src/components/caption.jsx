import React from "react";
import Link from "next/link";
import { IoMailOutline, IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

// mantine
import { Button } from "@mantine/core";

const Caption = ({ heading, description }) => {
  return (
    <div className="relative z-50 flex flex-col justify-center w-full h-full px-20 space-y-6 text-white bg-transparent">
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl capitalize font-gothamMedium"
      >
        {heading}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-1/2 leading-relaxed"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Link href="/" passHref>
          <Button
            variant="filled"
            radius={0}
            className="w-40 text-black uppercase bg-white button hover:bg-black hover:text-white"
          >
            Explore
          </Button>
        </Link>
      </motion.div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <IoCallSharp size="25px" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <IoMailOutline size="25px" />
        </motion.div>
      </div>
    </div>
  );
};

export default Caption;
