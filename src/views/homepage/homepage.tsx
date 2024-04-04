import React, { memo } from "react";

import FilterAndSearch from "./filter-and-search/index";
import ListBooks from "./list-books";
import Banner from "~views/banner/banner";
import Navbar from "~views/navbar/navbar";
import Footer from "~views/footer/footer";

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
