import React, { memo } from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default memo(Homepage);
