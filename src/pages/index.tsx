import Brand from "@/components/Brand";
import FooterCards from "@/components/FooterCards";
import Gridproducts from "@/components/Gridproducts";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import SlideProducts from "@/components/SlideProducts";
import Topmain from "@/components/Topmain";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <Topmain />
      <Brand />
      <Gridproducts />
      <NewsLetter />
      <FooterCards />
    </div>
  );
};

export default index;
