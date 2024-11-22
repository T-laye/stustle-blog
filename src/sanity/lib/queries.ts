import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
_id, 
title,
slug, 
_createdAt, 
author -> {
  _id, name, bio
}, 
image,
views, 
post
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && _id == $id][0] {
  _id, 
  title,
  slug, 
  _createdAt, 
  author -> {
    _id, name, bio
  }, 
  image,
  views, 
  post
}
`);
