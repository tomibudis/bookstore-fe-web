import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { Button } from "~components/ui/button";
import { Input } from "~components/ui/input";
import { Controller, useForm } from "react-hook-form";
import useYupValidationResolver from "~src/hooks/use-yup-resolver";
import loginFormSchema from "./validation";
import usePostLoginUser from "~src/hooks/mutations/use-post-login-user";
import { useToast } from "~components/ui/use-toast";
import { useRouter } from "next/router";
import { LOCALSTORAGE_KEY } from "~constants/index";

interface FormValues {
  username: string;
  password: string;
}
const LoginView = () => {
  const resolver = useYupValidationResolver(loginFormSchema);
  const { control, handleSubmit } = useForm<FormValues>({
    resolver,
  });
  const postLoginUser = usePostLoginUser();
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = (values: FormValues) => {
    return postLoginUser
      .mutateAsync(values)
      .then(({ data }) => {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
        router.push("/");
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
            Enter your username below to login to your account
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
            disabled={postLoginUser.isPending}
            onClick={handleSubmit(onSubmit)}
          >
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
