import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components/index.js";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 col-span-1">
          {posts.map((post: any, index: any) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-6 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
