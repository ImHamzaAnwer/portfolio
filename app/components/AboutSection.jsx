"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";
import Chip from "./Chip";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc">
        <Chip title={"Javascript"} />
        <Chip title={"Typescript"} />
        <Chip title={"Next JS"} />
        <Chip title={"React"} />
        <Chip title={"React Native"} />
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-secondary-900 rounded-full -start-3 ring-8 ring-gray-900">
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
            Senior Front end developer at Plai{" "}
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-300">
            December 2021 - Present
          </time>
          <p class="mb-4 text-sm font-normal text-gray-400">
            In my current position, I am actively contributing to the creation
            of a centralized hub for advertisers, streamlining their digital
            marketing efforts. This involves providing a comprehensive solution
            for ad campaign management across diverse social media channels. My
            work is focused on enhancing the user experience and optimizing the
            functionality of our platform to meet the evolving needs of our
            clients.
          </p>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-secondary-900 rounded-full -start-3 ring-8 ring-gray-900">
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
            Freelancer at Fiverr
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-300">
            May 2017 - Present
          </time>
          <p class="text-sm font-normal text-gray-400">
            As an experienced freelance React Developer on Fiverr for over 6
            years, I specialize in creating bespoke web and mobile applications
            using React, React Native and Next JS. Throughout these years,
            I&apos;ve honed my skills to deliver high-quality, tailored
            solutions that meet the unique requirements of each client.
          </p>

          <span
            onClick={() => window.open("https://www.fiverr.com/hamzaanwer")}
            className="cursor-pointer inline-block bg-green-600 hover:bg-green-700 text-white text-xs mt-2 py-1.5 px-5 rounded-md transition-all"
          >
            Visit Profile
          </span>
        </li>
        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-secondary-900 rounded-full -start-3 ring-8 ring-gray-900">
            <svg
              class="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
            React Native Developer at Secomind.AI
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-300">
            November 2019 - December 2021
          </time>
          <p class="text-sm font-normal text-gray-400">
            Successfully delivered a robust React Native mobile application that
            contributed to the overall success of the Smart Windows project.
            Played a vital role in bridging the gap between artificial
            intelligence and user-friendly mobile interfaces, facilitating
            effective control of heat and glare for end-users. This role allowed
            me to combine my expertise in React Native development with
            cutting-edge technology, contributing to a project at the forefront
            of creating intelligent and sustainable solutions in the
            construction industry.
          </p>
        </li>
      </ol>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white  py-8 px-4 sm:py-4 xl:px-16" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center xl:gap-16 ">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Since beginning my journey as a freelance developer 7 years ago,
            I&apos;ve done remote work for agencies and startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I&apos;m quietly confident,
            naturally curious, and continously working on improving my skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
