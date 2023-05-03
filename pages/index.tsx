import type { ReactElement } from "react";
import Layout from "../components/Layout/Layout";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import Main from "../components/Main/Main";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Las Palmas Tours</title>
        <meta
          name="description"
          content="Discover the world with us!"
          key="title"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
