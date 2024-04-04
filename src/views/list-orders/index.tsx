import React, { useMemo } from "react";

import Banner from "~views/banner/banner";
import Footer from "~views/footer/footer";
import Book from "~components/book";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useGetOrders from "~src/hooks/queries/use-get-list-orders";
import useGetProfile from "~src/hooks/use-get-profile";

const Navbar = dynamic(() => import("~views/navbar/navbar"), { ssr: false });

const ListOrders: React.FC = () => {
  const router = useRouter();
  const querySearch = router.query?.search as string;

  const { data: profile } = useGetProfile();

  const { data } = useGetOrders({
    keyword: querySearch || "",
    userId: profile?.id,
  });

  const myOrders = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data);
  }, [data?.pages]);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container p-4 min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {myOrders?.map((order, idx) => (
            <Book
              key={idx}
              title="example"
              writer="example"
              image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
              price={9}
              tags={["Essay"]}
              buttonAction="Cancel"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListOrders;
