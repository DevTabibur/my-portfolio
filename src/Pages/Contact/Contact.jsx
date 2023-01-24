import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tsx5bqi",
        "template_vz0mdec",
        form.current,
        "rd2NWclvqL6ALdj-T"
      )
      .then(
        (result) => {
          toast.success("Thanks for Emailing Me", {
            toastId: "customId",
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Email was not sent!", {
            toastId: "customId",
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="contact bg-base-100 py-4" id="contact">
        <div className="title pb-10 text-center">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="google-map lg:pl-0 lg:px-12 ">
                <iframe
                  className="w-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117776.87638476474!2d88.97188760510043!3d22.708631113852416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff5c251bcf507f%3A0x3280b3e685f48d5d!2sSatkhira%20Sadar%20Upazila!5e0!3m2!1sen!2sbd!4v1662148027805!5m2!1sen!2sbd"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="grid md:grid-cols-2 gap-2 w-full mt-20">

                <div className="bg-accent p-8 w-full relative rounded-lg">
                  <h2 className="md:text-2xl text-xl font-semibold text-primary">Contact Info</h2>

                  <ul className="text-primary">
                    <li className="flex my-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>{" "}
                      </span>
                      Satkhira, Khulna, Bangladesh
                    </li>

                    <li className="flex my-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      Phone:{" "}
                      <a href="tel:(+880) 1307-588223">(+880) 1307-588223</a>
                    </li>

                    <li className="flex my-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      Mail:{" "}
                      <a href="mailto:tobiburrohman2@gmail.com">
                        tobiburrohman2@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent w-full rounded-lg p-8 lg:mt-0 ">
                  <h2 className="text-2xl font-semibold text-primary">Follow Me</h2>
                  <div className="contact-social-link flex my-10">
                    <li className="list-none mx-2">
                      <a
                        href="https://www.facebook.com/profile.php?id=100006104477233"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} border size="lg" />
                      </a>
                    </li>
                    <li className="list-none mx-2">
                      <a href="https://twitter.com/DevTabibur" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} border size="lg" />
                      </a>
                    </li>
                    <li className="list-none mx-2">
                      <a
                        href="https://www.linkedin.com/in/tabibur-rahman-a41a44205/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} border size="lg" />
                      </a>
                    </li>
                  </div>
                </div>

              </div>
            </div>

            <div className="right-col">
              <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="contact__form"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    // className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9 ]*$/,
                        message: "Name should be unique",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Write here</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Write messages"
                    className="textarea textarea-bordered h-24"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.message?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <input
                    className="btn btn-accent"
                    type="submit"
                    value="send message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
