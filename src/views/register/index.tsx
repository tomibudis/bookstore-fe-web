import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";

import usePostRegisterUser from "~src/hooks/mutations/use-post-register-user";
import useYupValidationResolver from "~src/hooks/use-yup-resolver";

import { Button } from "~components/ui/button";
import { Input } from "~components/ui/input";
import { useToast } from "~components/ui/use-toast";

import registerFormSchema from "./validation";

interface FormValues {
  username: string;
  fullName: string;
  password: string;
}

const RegisterView = () => {
  const resolver = useYupValidationResolver(registerFormSchema);
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      username: "",
      fullName: "",
      password: "",
    },
    resolver,
  });

  const postRegisterUser = usePostRegisterUser();
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = (values) => {
    return postRegisterUser
      .mutateAsync(values)
      .then(() => {
        toast({
          variant: "default",
          title: "Successfully to create user!",
        });
        router.push("/login");
      })
      .catch(() => {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

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
            Enter your data information below to register to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Username</Label>
            <Controller
              control={control}
              name="username"
              render={({ field, formState }) => (
                <Input
                  {...field}
                  placeholder="Enter username..."
                  className={
                    formState.errors?.[field.name] ? "border-red-700" : ""
                  }
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Full Name</Label>
            <Controller
              control={control}
              name="fullName"
              render={({ field, formState }) => (
                <Input
                  {...field}
                  placeholder="Enter full name..."
                  className={
                    formState.errors?.[field.name] ? "border-red-700" : ""
                  }
                />
              )}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Controller
              control={control}
              name="password"
              render={({ field, formState }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="*****"
                  className={
                    formState.errors?.[field.name] ? "border-red-700" : ""
                  }
                />
              )}
            />
          </div>
          <Button
            className="w-full"
            type="submit"
            disabled={postRegisterUser.isPending}
            onClick={handleSubmit(onSubmit)}
          >
            Register
          </Button>
        </div>
        <div className="text-center text-sm">
          {`have an account?`}
          <Link className="underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
