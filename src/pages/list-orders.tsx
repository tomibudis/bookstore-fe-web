import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import ListOrders from "~views/list-orders";

const ListOrdersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>List Orders</title>
      </Head>
      <ListOrders />
    </>
  );
};

export default ListOrdersPage;
