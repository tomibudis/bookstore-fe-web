import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { Button } from "~components/ui/button";
import { Input } from "~components/ui/input";

const LoginView = () => {
  return (
    <div className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="space-y-2">
          <div className="flex justify-center mb-2">
            <Image
              src="https://avatars.githubusercontent.com/u/122791452?s=200&v=4"
              alt="primary-logo"
              height={64}
              width={64}
            />
          </div>

          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your username below to login to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Username</Label>
            <Input id="username" placeholder="john" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" required type="password" placeholder="*****" />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          {`Don't have an account?`}
          <Link className="underline" href="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
