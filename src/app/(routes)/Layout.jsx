import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between relative overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
