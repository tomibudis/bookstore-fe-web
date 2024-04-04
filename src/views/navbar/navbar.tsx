"use client";

import React from "react";
import Image from "next/image";

import { CircleUser, HandCoins } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~components/ui/dropdown-menu";
import useGetProfile from "~src/hooks/use-get-profile";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data, isLoading } = useGetProfile();

  const onLogout = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <div className="shadow-md bg-teal-800 p-3 text-white">
      <div className="container flex justify-between">
        <div
          className="flex p-2 items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://www.hellotoms.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=100"
            alt="primary-logo"
            height={40}
            width={130}
          />
        </div>
        <div className="flex gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                <CircleUser />
                {isLoading && "Loading..."}
                {!isLoading && data?.fullName}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => router.push("/list-orders")}
              >
                My Orders
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:text-red-600"
                onClick={onLogout}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mx-2" />
          <HandCoins />
          <p>Point: {isLoading ? "Loading..." : data?.point}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
