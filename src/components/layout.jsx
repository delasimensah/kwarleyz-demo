import React from "react";

// mantine

// components
import SEO from "./seo";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
