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
export const POST_QUERY_ID = defineQuery(`*[_type == "post" && id == $id][0] {
  _id, 
  title,
  slug, 
  _createdAt, 
  description,
  image,
  views, 
  post
}`);

// Events Query ///////////////////////////
export const EVENTS_QUERY =
  defineQuery(`*[_type == "event" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  theme,
  slug, 
  time,
  image,
  date, 
  location,
  link, 
  description,
  registrations,
  _createdAt, 
  }`);

export const EVENT_QUERY =
  defineQuery(`*[_type == "event" && slug.current == $slug][0] {
    _id, 
    theme,
    slug, 
    time,
    image,
    date, 
    location,
    link, 
    registrations,
  description,
  _createdAt, 
}`);

//REVIEW QUERIES /////////////////
export const REVIEWS_QUERY =
  defineQuery(`*[_type == "review" && defined(_id)] | order(_createdAt desc) {
  _id, 
  name,
  comment, 
  image,
  role,
  _createdAt, 
  }`);
