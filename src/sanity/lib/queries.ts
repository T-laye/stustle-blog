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
  post,
  attendees,
  status,
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
    status,
    attendees,
    post,
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

export const STUSTLERS_REVIEWS_QUERY =
  defineQuery(`*[_type == "review" && role == "stustler"] | order(_createdAt desc) {
  _id, 
  name,
  comment, 
  image,
  role,
  _createdAt, 
}`);

// Events Query ///////////////////////////
export const PROJECTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current) && ($category == "All" || category == $category)] 
  | order(_createdAt desc) {
    _id, 
    title,
    slug, 
    category,
    image,
    description, 
    link,
    publishedAt,
    _createdAt
  }
`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  category,
  image,
  description, 
  link,
  publishedAt,
  _createdAt, 
  }`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0] {
    _id, 
  title,
  slug, 
  category,
  image,
  description, 
  link,
  publishedAt,
  _createdAt, 
}`);

export const STUSTLERS_QUERY =
  defineQuery(`*[_type == "stustler"] | order(_createdAt desc) {
  _id, 
  name,
  slug,
  _createdAt, 
  imageLink,
  category,
  subCategory,
  toolsUsed,
  experienceLevel,
  status
  }`);

export const STUSTLER_QUERY =
  defineQuery(`*[_type == "stustler" && slug.current == $slug][0] {
  _id, 
  name,
  slug, 
  _createdAt, 
  bio,
  imageLink,
  link, 
  category,
  subCategory,
  toolsUsed,
  priceRange,
  experienceLevel,
  status
  }`);
