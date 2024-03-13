"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";
import Chip from "./Chip";

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
      <ol class="relative border-s border-gray-100">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg
              class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-200">
            Senior Front end developer at Plai
          </h3>
          <p class="text-sm text-gray-400">
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
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg
              class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-200">
            Freelancer at Fiverr
          </h3>
          <p class="text-sm text-gray-400">
            As an experienced freelance React Developer on Fiverr for over 6
            years, I specialize in creating bespoke web and mobile applications
            using React, React Native and Next JS. Throughout these years,
            I&apos;ve honed my skills to deliver high-quality, tailored
            solutions that meet the unique requirements of each client.
          </p>
        </li>
        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg
              class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
            </svg>
          </span>
          <h3 class="font-medium leading-tight text-gray-200">
            React Native Developer at Secomind.AI
          </h3>
          <p class="text-sm text-gray-400">
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
