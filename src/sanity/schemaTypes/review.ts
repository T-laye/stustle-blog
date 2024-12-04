import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "comment",
      type: "string",
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
      name: "role",
      type: "string",
      title: "Role",
      options: {
        list: [
          { title: "Client", value: "client" },
          { title: "Stustler", value: "stustler" },
          // { title: "User", value: "user" },
        ], // Add more options as needed
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
