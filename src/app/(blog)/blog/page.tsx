import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import React from "react";

const Page = async () => {
  const posts = await client.fetch(POSTS_QUERY);

  console.log(JSON.stringify(posts, null, 2));

  return <div>Blog</div>;
};

export default Page;
