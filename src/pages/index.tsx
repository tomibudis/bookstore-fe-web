import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Homepage from "../views/homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hellotoms BookStore</title>
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
