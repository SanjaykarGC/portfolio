"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [formStatus, setFormStatus] = useState(""); // For success/error messages
  const [isSuccess, setIsSuccess] = useState(false); // To style the message differently

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.value ||
      !formData.email.value ||
      !formData.message.value
    ) {
      setFormStatus("Please fill out all fields.");
      setIsSuccess(false);
      return;
    }

    const templateParams = {
      from_name: formData.name.value,
      from_email: formData.email.value,
      message: formData.message.value,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_796z9z8", // Replace with your EmailJS Service ID
        "template_voofpsm", // Replace with your EmailJS Template ID
        templateParams,
        "JG88sH9NvJGQjlkgP" // Replace with your EmailJS User ID
      )
      .then(() => {
        setFormStatus("Mail has been sent successfully!"); // Success message
        setIsSuccess(true);
        setFormData(defaultFormState); // Reset form
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        setFormStatus("Failed to send message. Please try again.");
        setIsSuccess(false);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: { value: e.target.value, error: "" },
            })
          }
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: { value: e.target.value, error: "" },
            })
          }
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: { value: e.target.value, error: "" },
            })
          }
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 mb-4"
        type="submit"
      >
        Submit
      </button>
      {formStatus && (
        <p
          className={`text-sm mt-2 mb-4 ${
            isSuccess ? "text-green-600" : "text-red-600"
          }`}
        >
          {formStatus}
        </p>
      )}
    </form>
  );
};
