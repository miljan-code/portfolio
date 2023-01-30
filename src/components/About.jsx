import PageStarter from './PageStarter';
import mypic from '../assets/me-2.jpg';

import { FaDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useEffect } from 'react';

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
          creator and React & JavaScript enthusiast.
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
          In 2022, I began to seriously focus on improving my skills in web
          development. I have learned to use technologies such as React, Next
          JS, Tailwind, TypeScript, Redux, Git, and Sass.
          <br />
          <br />I completed several courses on Udemy, among them the HTML & CSS
          and JavaScript course by Jonas Schmedtmann, as well as the React
          course by Maximilian Shawrzmuller. I continued my learning through
          making my own projects, as well as reading through documentation and
          watching tutorials on YouTube.
        </p>
        <div className="flex gap-10">
          <a
            href="https://drive.proton.me/urls/FEP93DAJKM#EViXJInoknQr"
            target="_blank"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Resume{' '}
            <span className="mt-1">
              <FaDownload size={15} />
            </span>
          </a>
          <a
            href="mailto:miljangicic33@gmail.com"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Email{' '}
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
