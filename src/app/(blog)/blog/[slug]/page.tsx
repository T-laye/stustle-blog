/* eslint-disable @next/next/no-img-element */
"use client";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Post } from "../../../../../types/sanityTypes";
import Loader from "@/components/ui/Loader";
import markdownit from "markdown-it";
import GoBack from "@/components/ui/GoBack";
import { urlFor } from "@/sanity/lib/image";
import PostCard from "@/components/ui/PostCard";

const Page = () => {
  const [posts, setPosts] = useState<Post[] | null>(null); // Type posts as array or null
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null); // Handle the post state as Post | null
  const { slug: $slug } = useParams();
  const md = markdownit();

  const parsedContent = md.render(post?.post || "");

  //   console.log($id);

  const fetchPost = async () => {
    try {
      const postData = await client.fetch(POST_QUERY, { slug: $slug });
      // console.log("Fetched Post:", JSON.stringify(postData, null, 2));

      setPost(postData || null); // Ensure the post is set or null if not found
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost(null); // Set to null in case of error
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const posts = await client.fetch(POSTS_QUERY);
      // console.log("Fetched Posts:", JSON.stringify(posts, null, 2));
      setPosts(posts); // Set posts as raw data
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$slug]); // Fetch post when the ID changes

  if (!post) {
    return (
      <div className="mt-64">
        <Loader />
      </div>
    ); // Display loading state or error message
  }

  const renderPosts = posts
    ?.filter((p) => p._id !== post?._id) // Exclude the current post
    .sort(() => Math.random() - 0.5) // Shuffle the posts array
    .slice(0, 4) // Take the first 4 items
    .map((p) => <PostCard key={p._id} post={p} />);

  return (
    <div className="pt-[76px] pb-20">
      <div className="px-4 mb-4 mt-4">
        <GoBack />
      </div>
      <div
        className="h-[20vh] sm:h-[35vh]"
        style={{
          backgroundImage: post?.image
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(post.image).url()})`
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

          <p className="mt-7 text-gray-300 text-sm">
            {post?._createdAt && formatDate(post?._createdAt)}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-5 text-start">More Reads</h3>
          <div className="flex gap-10 overflow-auto pb-10">
            {loading ? (
              <div className=" mt-36 w-screen flex justify-center ">
                <Loader />
              </div> // Loading state
            ) : error ? (
              <div>{error}</div> // Error state
            ) : (
              renderPosts // Render posts when data is available
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
