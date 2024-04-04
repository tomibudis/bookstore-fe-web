import React from "react";

import Book from "~components/book";

const ListBooks = () => {
  return (
    <div className="container p-4 min-h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Book
          title="example"
          writer="example"
          image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
          price={9}
          tags={["example"]}
        />
        <Book
          title="example"
          writer="example"
          image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
          price={9}
          tags={["example"]}
        />
        <Book
          title="example"
          writer="example"
          image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
          price={9}
          tags={["example"]}
        />
        <Book
          title="example"
          writer="example"
          image="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
          price={9}
          tags={["example"]}
        />
      </div>
    </div>
  );
};

export default ListBooks;
