"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./ui/Button";
import { toast } from "sonner";
import { writeClient } from "@/sanity/lib/write-client";
import { nanoid } from "nanoid"; // Ensure nanoid is installed: npm install nanoid
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEventModalStore } from "@/store/variables";
import { Event } from "../../types/sanityTypes";

interface EventCardProps {
  eventId: string;
  event: Event;
}

const EventRegisterModal: React.FC<EventCardProps> = ({ eventId, event }) => {
  const [loading, setLoading] = useState(false);
  const { closeEventModal, isEventModalOpen } = useEventModalStore();
  const emails = event?.registrations.map((r) => r.email);

//   console.log(emails);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Start loading state
      const existingEmail = emails.includes(formik.values.email);

      if (existingEmail) {
        toast.warning("Email Already Exists");
        setLoading(false);
        return;
      }

      try {
        const response = await writeClient
          .patch(eventId) // Start a patch on the event document
          .setIfMissing({ registrations: [] }) // Ensure `registrations` exists
          .append("registrations", [
            {
              _key: nanoid(), // Generate a unique key
              _type: "registration",
              name: values.name,
              email: values.email,
              createdAt: new Date().toISOString(),
            },
          ])
          .commit(); // Save changes

        //   console.log("Sanity Response:", response);

        if (response) {
          toast.success("Registration Successful");
          resetForm(); // Clear form fields
          closeEventModal();
          window.location.reload();
        }
      } catch (error) {
        console.error("Registration Error:", error);
        toast.error("Failed to register. Please try again.");
      } finally {
        setLoading(false); // End loading state
      }
    },
  });

  return (
    <>
      {isEventModalOpen && (
        <div className="fixed top-0 bg-[#33333380] backdrop-blur left-0 right-0 bottom-0 flex justify-center items-center z-50 px-4">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-5 rounded-xl flex flex-col gap-4 w-full max-w-md pt-8 relative"
          >
            <IoMdCloseCircleOutline
              onClick={closeEventModal}
              className="absolute top-2 right-2"
              size={22}
            />
            <h3 className="text-start font-medium">Event Registration</h3>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className={`input-class ${
                  formik.touched.name && formik.errors.name ? "input-error" : ""
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter name"
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-500 text-sm">
                  {formik.errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={`input-class ${
                  formik.touched.email && formik.errors.email
                    ? "input-error"
                    : ""
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <Button loading={loading} style="primary" type="submit">
              Register
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default EventRegisterModal;
