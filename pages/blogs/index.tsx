import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { BlogContainer } from "../../components/blogs";
import { Hero } from "../../components/Hero";

const BlogPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>blogs</title>
        <meta name="description" content="view blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BlogContainer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};
export default BlogPage;
