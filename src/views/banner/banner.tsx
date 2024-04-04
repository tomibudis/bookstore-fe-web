import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="z-[-1] relative w-[100vw] h-[200px]">
      <Image
        src="https://images.unsplash.com/photo-1533327325824-76bc4e62d560?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Homepage background"
        className="opacity-85"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
