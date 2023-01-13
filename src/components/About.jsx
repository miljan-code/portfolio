import { Link } from "react-router-dom";

import PageStarter from "./PageStarter";
import mypic from "../assets/me-2.jpg";

import { FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageStarter title="Here is my story.">
      <div className="">
        <div className="hidden sm:block">
          <img
            src={mypic}
            alt="miljan gicic"
            className="rounded-2xl w-[30rem] float-left mr-[3rem] mb-5"
          />
        </div>
        <p className="text-justify mt-[-.5rem] leading-[1.7] font-normal dark:font-light text-[1.8rem]">
          Hello! My name is Miljan, I'm a developer, occasional YouTube content
          creator and React & JavaScript enthusiast. I still haven't found my
          first job in this industry, which I stepped into few months ago, but I
          hope to succeed in it during 2023 and build a lot of interesting
          things.
          <br />
          <br />
          I had my first contact with programming and Web development when I was
          very young, in elementary school. Since I started surfing the Internet
          very early, I came across various websites and forums where I spent a
          lot of time. The thing is that whenever something on the internet
          fascinated me, I always wanted to try to make it myself.
          <br />
          <br />
          So I started creating forums using phpBB3, SMF and vBulletin, I've
          been creating my own mods and scripts for the games I played, also
          running my own game servers for which I created the websites myself.
          <br />
          <br />
          Because I had a lot of exposure to programming, I was thinking of it
          as a job that I would do one day, but due to circumstances, life took
          me to a completely different side, dealing with some things that have
          nothing to do with programming in general.
          <br />
          <br />
          During the summer of 2022, I started to seriously improve myself in
          terms of Web development. I completed several courses on Udemy, among
          them the HTML & CSS and JavaScript course by Jonas Schmedtmann, as
          well as the React course by Maximilian Shawrzmuller. I continued my
          learning through making my own projects, as well as reading through
          documentation and watching tutorials on YouTube.
          <br />
          <br />I am very happy and excited because I have finally redirected my
          life and my career to go in the desired direction and I can't wait to
          start my first Web development job!
        </p>
        <div className="flex gap-10">
          <a
            href="https://drive.proton.me/urls/146WP71800#nCLm9bK4qq3s"
            target="_blank"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Resume{" "}
            <span className="mt-1">
              <FaDownload size={15} />
            </span>
          </a>
          <a
            href="mailto:miljangicic@proton.me"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Email{" "}
            <span className="mt-1">
              <HiMail size={18} />
            </span>
          </a>
        </div>
      </div>
    </PageStarter>
  );
};

export default About;
