import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "./Card";

const User: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User-profile|spoofy</title>
        <meta name="description" content="View your user info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
    </div>
  );
};

export default User;
