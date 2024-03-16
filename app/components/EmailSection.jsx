"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const subject = encodeURIComponent(emailData.subject);
  const message = encodeURIComponent(emailData.message);
  const mailtoLink = `mailto:${emailData.email}?subject=${subject}&body=${message}`;

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://www.github.com/imhamzaanwer">
            <Image
              className="transition-colors rounded-full hover:bg-primary-900"
              src={GithubIcon}
              alt="Github Icon"
            />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/imhamzaanwar">
            <Image
              className="transition-colors rounded-md hover:bg-primary-900"
              src={LinkedinIcon}
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            onChange={handleInputChange}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="hamza.anwer8@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            onChange={handleInputChange}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Requirements for project"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            onChange={handleInputChange}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's discuss..."
          />
        </div>
        <Link href={mailtoLink}>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
