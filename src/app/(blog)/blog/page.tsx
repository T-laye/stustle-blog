/* eslint-disable @next/next/no-img-element */
"use client";
import PostCard from "@/components/ui/PostCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { capitalizeWords, getRandomIndex } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { Post } from "../../../../types/sanityTypes";
import Loader from "@/components/ui/Loader";
import { urlFor } from "@/sanity/lib/image";

const Page = () => {
  const [posts, setPosts] = useState<Post[] | null>(null); // Type posts as array or null
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state
  const [randomNumber, setRandomNumber] = useState<number>(0); // State for the random index

  // Fetch posts with error and loading handling
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

  // Function to update the random number every 2 seconds
  const changeBackground = () => {
    if (posts && posts.length > 0) {
      const randomIndex = getRandomIndex(posts.length);
      setRandomNumber(randomIndex);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Set interval to change the background and title every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBackground();
    }, 2000); // Change every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]); // Re-run effect when posts change

  // Dynamically generate background images based on posts
  const getBackgroundImage = (index: number) => {
    return posts && posts[index]
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${urlFor(posts[index].image).url() || ""})`
      : "";
  };

  const getTitle = (index: number) => {
    return posts && posts[index] ? posts[index].title : "";
  };

  const renderPosts = posts?.map((p) => <PostCard key={p._id} post={p} />);

  return (
    <div className="pt-14 pb-20">
      {/* Header Section */}
      {posts && (
        <div
          className="h-[20vh] sm:h-[35vh] duration-150 transition-all ease-in-out"
          style={{
            backgroundImage: getBackgroundImage(randomNumber), // Use the random index for background
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="blog-header text-center duration-150 transition-all ease-in-out">
            {capitalizeWords(getTitle(randomNumber))}{" "}
            {/* Display the title of the random post */}
          </h1>
        </div>
      )}

      {/* Posts Section */}
      {loading ? (
        <div className=" mt-36 w-full mx-auto flex justify-center">
          <Loader />
        </div> // Loading state
      ) : error ? (
        <div>{error}</div> // Error state
      ) : (
        <div className="min-h-[50vh] grid min-[510px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-8 pt-10 container ">
          {renderPosts}
        </div>
      )}
    </div>
  );
};

export default Page;
