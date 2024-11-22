/* eslint-disable @next/next/no-img-element */
"use client";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Post } from "../../../../../types/sanityTypes";
import Loader from "@/components/ui/Loader";
import markdownit from "markdown-it";

const Page = () => {
  const [post, setPost] = useState<Post | null>(null); // Handle the post state as Post | null
  const { postId: $id } = useParams();
  const md = markdownit();

  const parsedContent = md.render(post?.post || "");

//   console.log($id);

  const fetchPost = async () => {
    try {
      const postData = await client.fetch(POST_QUERY, { id: $id });
      console.log("Fetched Post:", JSON.stringify(postData, null, 2));

      setPost(postData || null); // Ensure the post is set or null if not found
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost(null); // Set to null in case of error
    }
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$id]); // Fetch post when the ID changes

  if (!post) {
    return (
      <div className="mt-64">
        <Loader />
      </div>
    ); // Display loading state or error message
  }

  return (
    <div className="pt-[76px] pb-20">
      <div
        className="h-[20vh] sm:h-[35vh]"
        style={{
          backgroundImage: post?.image
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.image})`
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/default-image.jpg')", // Fallback to a default image if post.image is not available
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="blog-header text-center">
          {capitalizeWords(post?.title)}
        </h1>
      </div>

      <div className="px-4 md:px-8 pt-10 container">
        <section className="mb-20 text-justify">
          {parsedContent ? (
            <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
          ) : (
            <p>No details Provided</p>
          )}

          <p className="mt-7 text-gray-300">
            {post?._createdAt && formatDate(post?._createdAt)}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-5">More Reads</h3>
          <div className="flex gap-10 overflow-auto pb-10">
            {/* Add dynamic fetching of related posts if necessary */}
            {/* Example: <PostCard /> */}

            {/* <Loader /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
