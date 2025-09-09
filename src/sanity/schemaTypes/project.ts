import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "web" },
          { title: "UI/UX Design", value: "design" },
          { title: "Writing", value: "writing" },
          { title: "Graphics Design", value: "graphics" },
          { title: "Cleaning", value: "cleaning" },
          { title: "Virtual Assistance", value: "virtual" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: true, scheme: ["http", "https"] }),
    }),
    // defineField({
    //   name: "github",
    //   title: "GitHub Repo",
    //   type: "url",
    // }),
    defineField({
      name: "image",
      title: "Project Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "techStack",
    //   title: "Tech Stack",
    //   type: "array",
    //   of: [{ type: "string" }],
    // }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
