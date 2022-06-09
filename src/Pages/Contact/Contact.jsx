import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="md:flex">
            <div className="left-col flex-1">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <ul>
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
                  Phone: <a href="tel:(+880) 1307-588223">(+880) 1307-588223</a>
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
                  E-mail:{" "}
                  <a href="mailto:tobiburrohman2@gmail.com">
                    tobiburrohman2@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="right-col flex-1">
              <div className="contact__wrap">
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="name"
                    title="Your name"
                    maxLength="50"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="email"
                    title="Your email"
                    maxLength="50"
                    required
                  />
                  <textarea
                    type="text"
                    name="message"
                    placeholder="message"
                    title="Your message"
                    maxLength="550"
                    required
                  />
                  <input type="submit" value="send message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
