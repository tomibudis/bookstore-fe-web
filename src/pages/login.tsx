import Head from "next/head";
import React from "react";

import LoginView from "~views/login";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>BookStore Login</title>
      </Head>
      <LoginView />
    </div>
  );
};

export default LoginPage;
