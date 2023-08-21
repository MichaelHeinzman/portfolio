import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { LayoutHelper, TextLayoutHelper } from "../components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8y49gqb",
        "template_uc978qc",
        form.current,
        "jAofR6Sr4Tp0vajme"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setError(error.text);
        }
      );
  };
  return (
    <LayoutHelper id="Contact" width={9}>
      <TextLayoutHelper text="Contact" className="subtitle" />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 text-center sm:text-xl text">
          Want to collaborate on a project? Have questions about my work? Need
          assistance with a technical challenge? I'd love to hear from you! Use
          the form below to send me a message, and I'll get back to you as soon
          as possible.
        </p>
        <form className="space-y-8" onSubmit={sendEmail} ref={form}>
          <div>
            <label
              htmlFor="user_name"
              className="block mb-2 text-sm font-medium subtext"
            >
              Your name
            </label>
            <input
              type="text"
              name="user_name"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500"
              placeholder="Michael Heinzman"
              required
            />
          </div>
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium subtext"
            >
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium subtext"
            >
              Your message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          {error && (
            <p className="bg-red-300 w-full rounded-sm p-3 text-white text-sm">
              {error}
            </p>
          )}
          <Button
            style={{
              borderColor: "#f88d3a",
              color: "#f88d3a", // Adjusted colors for contained type
            }}
            disabled={loading}
            variant="outlined"
            type="submit"
          >
            {loading ? "Loading..." : "Send Message"}
          </Button>
        </form>
      </div>
    </LayoutHelper>
  );
};

export default Contact;
