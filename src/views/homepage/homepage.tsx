import React, { memo } from "react";
import dynamic from "next/dynamic";

import FilterAndSearch from "./filter-and-search/index";
import ListBooks from "./list-books";
import Banner from "~views/banner/banner";
import Footer from "~views/footer/footer";

const Navbar = dynamic(() => import("~views/navbar/navbar"), { ssr: false });

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FilterAndSearch />
      <ListBooks />
      <Footer />
    </>
  );
};

export default memo(Homepage);
