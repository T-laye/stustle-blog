/* eslint-disable @next/next/no-img-element */
"use client";
import { capitalizeWords, formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { Post } from "../../../types/sanityTypes";
import { urlFor } from "@/sanity/lib/image";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const router = useRouter();
  const gotoPost = () => {
    router.push(`blog/${post?.slug.current}`);
  };

  // console.log(post);

  return (
    <div
      onClick={gotoPost}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[390px] lg:h-[380px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow"
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
      <div className="px-4 py-3 flex flex-col gap-1 ">
        <p className="text-xs text-gray-300">{formatDate(post?._createdAt)}</p>
        <h3 className="text-xl font-medium line-clamp-1 text-start">
          {capitalizeWords(post?.title)}
        </h3>
        <div className="line-clamp-4 md:line-clamp-5 text-sm">
          <div>{post?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
