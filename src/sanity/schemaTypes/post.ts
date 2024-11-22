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
      }),
    defineField({
      name: "slug",
      type: "slug",
      options:{
        source: 'title'
      }
    }),
    defineField({
      name: "author",
      type: "reference",
      to: {type: 'author'}
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
        name: "category",
        type: "string",
        //   validation: (Rule) => Rule.min(minNumber:1)
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: "post",
      type: "markdown",
    }),
  ],
});
