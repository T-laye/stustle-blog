import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  // Optional: Add an icon if needed
  // icon: UserIcon,
  fields: [
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      validation: (Rule) => Rule.required().error("Theme is required."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "theme", // Generates slug from the title field
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text", // Use 'text' for longer descriptions
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .error("Description must be at least 10 characters."),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date", // Sanity stores this in ISO format
      options: {
        dateFormat: "DD MMM YYYY", // Customize date format for Sanity Studio
      },
      validation: (Rule) => Rule.required().error("Date is required."),
    }),

    defineField({
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{2}:\d{2}$/, {
            name: "time",
            invert: false,
          })
          .error("Time must be in HH:MM format."),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required().error("Location is required."),
    }),
    defineField({
      name: "link",
      title: "Event Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }).error("Valid URL is required."),
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image", // For file uploads
      options: {
        hotspot: true, // Enable image hotspot for better cropping
      },
      validation: (Rule) => Rule.required().error("Image is required."),
    }),

    defineField({
      name: "registrations",
      title: "Registrations",
      type: "array",
      of: [
        {
          type: "object",
          name: "registration",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "email",
              title: "Email",
              type: "string",
            }),
            defineField({
              name: "createdAt",
              title: "Created At",
              type: "datetime",
              initialValue: () => new Date().toISOString(),
            }),
          ],
        },
      ],
    }),
  ],
});

// import { defineField, defineType } from "sanity";

// export const event = defineType({
//   name: "event",
//   title: "Event",
//   type: "document",
//   fields: [
//     defineField({
//       name: "theme",
//       title: "Theme",
//       type: "string",
//       validation: (Rule) => Rule.required().error("Theme is required."),
//     }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "theme", // Generates slug from the title field
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required().error("Slug is required."),
//     }),
//     defineField({
//       name: "description",
//       title: "Description",
//       type: "text",
//       validation: (Rule) =>
//         Rule.required()
//           .min(10)
//           .error("Description must be at least 10 characters."),
//     }),
//     defineField({
//       name: "startDateTime",
//       title: "Start Date and Time",
//       type: "datetime",
//       validation: (Rule) =>
//         Rule.required().error("Start Date and Time is required."),
//     }),
//     defineField({
//       name: "endDateTime",
//       title: "End Date and Time",
//       type: "datetime",
//       validation: (Rule) =>
//         Rule.required().error("End Date and Time is required."),
//     }),
//     defineField({
//       name: "registrationDeadline",
//       title: "Registration Deadline",
//       type: "datetime",
//       validation: (Rule) =>
//         Rule.required().error("Registration Deadline is required."),
//     }),
//     defineField({
//       name: "location",
//       title: "Location",
//       type: "string",
//       validation: (Rule) => Rule.required().error("Location is required."),
//     }),
//     defineField({
//       name: "link",
//       title: "Event Link",
//       type: "url",
//       validation: (Rule) =>
//         Rule.uri({ scheme: ["http", "https"] }).error("Valid URL is required."),
//     }),
//     defineField({
//       name: "image",
//       title: "Event Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//       validation: (Rule) => Rule.required().error("Image is required."),
//     }),
//     defineField({
//       name: "registrations",
//       title: "Registrations",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           name: "registration",
//           fields: [
//             defineField({
//               name: "name",
//               title: "Name",
//               type: "string",
//             }),
//             defineField({
//               name: "email",
//               title: "Email",
//               type: "string",
//             }),
//             defineField({
//               name: "createdAt",
//               title: "Created At",
//               type: "datetime",
//               initialValue: () => new Date().toISOString(),
//             }),
//           ],
//         },
//       ],
//     }),
//   ],
// });

// // Frontend Logic Example
// // Use this to compute the status dynamically
// const getEventStatus = (startDateTime, endDateTime, registrationDeadline) => {
//   const now = new Date();
//   if (now > new Date(registrationDeadline)) {
//     return "Registration Closed";
//   } else if (now < new Date(startDateTime)) {
//     return "Not Started";
//   } else if (now >= new Date(startDateTime) && now <= new Date(endDateTime)) {
//     return "Ongoing";
//   } else {
//     return "Ended";
//   }
// };
