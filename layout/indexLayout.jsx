import React from "react";
import Navbar from "../components/Navbar";

const indexLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default indexLayout;
