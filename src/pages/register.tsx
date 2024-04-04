import Head from "next/head";
import React from "react";

import RegisterView from "~views/register";

const RegisterPage = () => {
  return (
    <div>
      <Head>
        <title>BookStore Register</title>
      </Head>
      <RegisterView />
    </div>
  );
};

export default RegisterPage;
