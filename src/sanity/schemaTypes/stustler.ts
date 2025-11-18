import { defineField, defineType } from "sanity";

export const stustler = defineType({
  name: "stustler",
  title: "Stustler",
  type: "document",
  // Optional: Add an icon if needed
  // icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required."),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Generates slug from the title field
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text", // Use 'text' for longer descriptions
      validation: (Rule) =>
        Rule.required().min(10).error("Bio must be at least 10 characters."),
    }),
    defineField({
      name: "link",
      title: "Portfolio Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error("Valid URL is required."),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image", // For file uploads
      options: {
        hotspot: true, // Enable image hotspot for better cropping
      },
      validation: (Rule) => Rule.required().error("Profile Image is required."),
    }),

    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Software Developer", value: "software_developer" },
          { title: "Designer", value: "designer" },
          { title: "Writer", value: "writer" },
          { title: "Social Media Manager", value: "social_media_manager" },
          { title: "Virtual Assistant", value: "virtual_assistant" },
          { title: "Data Analyst", value: "data_analyst" },
        ], // Add more options as needed
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subCategory",
      title: "Sub Category",
      type: "string",
      validation: (Rule) => Rule.required().error("Sub Category is required."),
    }),
    defineField({
      name: "toolsUsed",
      title: "Tools Used",
      type: "string",
      validation: (Rule) => Rule.required().error("Tools Used is required."),
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      validation: (Rule) => Rule.required().error("Price Range is required."),
    }),
    defineField({
      name: "experienceLevel",
      type: "string",
      title: "Experience Level",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          // { title: "User", value: "user" },
        ], // Add more options as needed
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});