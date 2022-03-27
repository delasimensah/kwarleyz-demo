import React from "react";

// mantine
import { MantineProvider } from "@mantine/core";

// components
import SEO from "./seo";
import Navbar from "./navbar";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Gotham Book",
        headings: { fontFamily: "Gotham Medium" },
      }}
    >
      <SEO />
      <Navbar />
      <main className="overflow-x-hidden max-w-screen">{children}</main>
      <Footer />
    </MantineProvider>
  );
};

export default layout;
