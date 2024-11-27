import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  // icon: UserIcon
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "string",
      //   validation: (Rule) => Rule.min(minNumber:1)
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image", // Use 'image' for file uploads
      options: {
        hotspot: true, // Enable image hotspot for better cropping
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "post",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
