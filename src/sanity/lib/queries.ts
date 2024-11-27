import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  _createdAt, 
  description,
  image,
  views, 
  post
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  _id, 
  title,
  slug, 
  _createdAt, 
  description,
  image,
  views, 
  post
}`);
