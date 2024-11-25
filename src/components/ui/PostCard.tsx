/* eslint-disable @next/next/no-img-element */
"use client";
import { formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { Post } from "../../../types/sanityTypes";
import markdownit from "markdown-it";
// import Image from "next/image";

// Add TypeScript type for props
interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const router = useRouter();
  const md = markdownit();

  const parsedContent = md.render(post?.post || "");
  const gotoPost = () => {
    router.push(`blog/${post?._id}`);
  };

  return (
    <div
      onClick={gotoPost}
      className="cursor-pointer min-w-[230px] md:max-w-[300px] lg:max-w-[400px] w-full h-[300px] lg:h-[350px] flex flex-col rounded-xl bg-white-background hover:shadow-lg duration-150 shadow active:bg-primary-activeCard active:shadow"
    >
      <div className="h-1/2 bg-primary-activeCard rounded-xl overflow-hidden">
        <img
          height={400}
          width={400}
          src={post?.image || "/default-image.jpg"} // Fallback image
          alt="post image"
          className="object-cover object-center h-full w-full hover:scale-105 duration-150"
        />
      </div>
      <div className="px-4 py-2 flex flex-col gap-1">
        <p className="text-xs text-gray-300">{formatDate(post?._createdAt)}</p>
        <h3 className="text-xl font-medium line-clamp-1">{post?.title}</h3>
        <div className="line-clamp-4 md:line-clamp-5 text-sm">
          {/* {post?.post?.substring(0, 150)}... Shorten the post text */}
          {parsedContent ? (
            <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
          ) : (
            <p>No details Provided</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
