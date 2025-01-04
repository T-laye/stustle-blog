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
import { MdShare } from "react-icons/md";
import { writeClient } from "@/sanity/lib/write-client";

const Page = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const { slug: $slug } = useParams();
  const md = markdownit();
  // console.log(post?.views)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await client.fetch(POST_QUERY, { slug: $slug });
        setPost(postData || null);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      }
    };

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const posts = await client.fetch(POSTS_QUERY);
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    fetchPost();
  }, [$slug]);

  useEffect(() => {
    const updateViews = async () => {
      if (!post) return;

      const storedIds = JSON.parse(localStorage.getItem("postIds") || "[]");
      if (storedIds.includes(post._id)) return;

      localStorage.setItem("postIds", JSON.stringify([...storedIds, post._id]));

      try {
        await writeClient
          .patch(post._id)
          .setIfMissing({ views: 0 })
          .inc({ views: 1 })
          .commit();
        console.log("Views updated successfully");
      } catch (error) {
        console.error("Error updating views:", error);
      }
    };

    updateViews();
  }, [post]);

  if (!post) {
    return (
      <div className="mt-64">
        <Loader />
      </div>
    );
  }

  const renderPosts = posts
    ?.filter((p) => p._id !== post?._id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
    .map((p) => <PostCard key={p._id} post={p} />);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this blog post!",
          text: "Here's an event you might be interested in:",
          url,
        })
        .then(() => console.log("Content shared successfully"))
        .catch((error) => console.error("Error sharing content", error));
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => alert("URL copied to clipboard"))
        .catch((error) => console.error("Error copying URL", error));
    }
  };

  return (
    <div className="max-md:pt-16 pt-[77px] pb-20 ">
      <div
        className="h-[20vh] sm:h-[35vh] flex flex-col pt-3 sm:pt-7"
        style={{
          backgroundImage: post?.image
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(post?.image).url()})`
            : "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/default-image.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between px-4 sm:px-8 text-white w-full container mx-auto">
          <GoBack />
          <div className="flex items-center space-x-3">
            <button onClick={handleShare} aria-label="Share">
              <MdShare size={28} />
            </button>
          </div>
        </div>
        <h1 className="blog-header text-center my-auto sm:mt-16 line-clamp-2">
          {capitalizeWords(post?.title)}
        </h1>
      </div>

      <div className="px-4 md:px-8 pt-10 container">
        <section className="mb-20 text-justify">
          {md.render(post?.post || "") ? (
            <article
              dangerouslySetInnerHTML={{ __html: md.render(post?.post || "") }}
            />
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
              <div className="mt-36 w-screen flex justify-center">
                <Loader />
              </div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              renderPosts
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
