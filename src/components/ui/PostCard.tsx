/* eslint-disable @next/next/no-img-element */
// import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Post } from "../../../types/sanityTypes";
import { urlFor } from "@/sanity/lib/image";
import { writeClient } from "@/sanity/lib/write-client";
// import { LiaEyeSolid } from "react-icons/lia";
import { capitalizeWords, formatDateAndTIme } from "@/utils/helpers";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // const [totalViews, setTotalViews] = useState(post.views || 0); // Initial views from the post prop
  const router = useRouter();

  const handleCardClick = async () => {
    if (!post?._id) {
      console.error("Post ID is missing");
      return;
    }

    const storedIds = JSON.parse(localStorage.getItem("postIds") || "[]");

    if (storedIds.includes(post._id)) {
      // console.log("Post already viewed, not incrementing views.");
      return;
    }

    // Add post ID to local storage
    const updatedIds = [...storedIds, post._id];
    localStorage.setItem("postIds", JSON.stringify(updatedIds));

    try {
      // Optimistically update the UI
      // setTotalViews((prev) => prev + 1);

      await writeClient
        .patch(post._id)
        .setIfMissing({ views: 0 })
        .inc({ views: 1 })
        .commit();

      // console.log("Views updated successfully");
    } catch (error) {
      // Revert the optimistic update if the API call fails
      // setTotalViews((prev) => prev - 1);
      console.error("Error updating views:", error);
    }
  };

  const gotoPost = () => {
    handleCardClick();
    router.push(`/blog/${post?.slug.current}`);
  };

  return (
    <div
      onClick={gotoPost}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow relative postCard"
    >
      <div className="h-1/2 min-h-[200px] bg-primary-activeCard rounded-xl overflow-hidden">
        <img
          height={400}
          width={400}
          src={urlFor(post?.image).url()} // Fallback image
          alt="post image"
          className="object-cover object-center h-full w-full hover:scale-105 duration-150"
        />
      </div>
      <div className="px-4 py-3 flex flex-col gap-1">
        <p className="text-xs text-gray-300">
          {formatDateAndTIme(post?._createdAt)}
        </p>
        <h3 className="text-xl font-medium line-clamp-1 text-start">
          {capitalizeWords(post?.title)}
        </h3>
        <div className="line-clamp-4 md:line-clamp-4 text-sm text-gray-300">
          <div>{post?.description}</div>
        </div>
      </div>
      {/* <div className="absolute right-3 bottom-2 flex items-center gap-1 place-self-end mt-auto text-sm">
        <span className="inline-block">{totalViews}</span>
        <LiaEyeSolid size={22} />
      </div> */}
    </div>
  );
};

export default PostCard;
