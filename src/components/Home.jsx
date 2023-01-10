import { Link } from 'react-router-dom';

import me from '../assets/profile-pic-12.png';
import cocktails from '../assets/cocktails.jpg';
import reactpic from '../assets/react.png';
import lingo from '../assets/lingo.jpg';

import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse ss:flex-row mt-[5rem] ss:mt-[10rem] items-center gap-[3rem]">
        <div className="flex-1">
          <h2 className="text-center ss:text-left text-[3.5rem] sm:text-[3.8rem] ms:text-[4rem] md:text-[4.4rem] font-bold">
            I'm{' '}
            <span className="text-primaryDark dark:text-primary">Miljan</span>.
            I'm a front-end developer and React & Javascript enthusiast.
          </h2>
          <button className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all flex items-center gap-2 mx-auto ss:mx-0">
            More about me{' '}
            <span className="mt-1">
              <HiArrowRight size={15} />
            </span>
          </button>
        </div>
        <div>
          <img
            src={me}
            alt="Miljan"
            className="rounded-full h-[200px] ms:h-[220px] md:h-[240px] ml-auto mt-[-1rem] ss:mt-0"
          />
        </div>
      </section>
      <section className="mt-[10rem] pb-[5rem]">
        <h2 className="text-[2.4rem] font-semibold text-left xs:text-center ms:text-left">
          My projects
        </h2>
        <div className="mt-[2rem] flex flex-col ms:flex-row xs:max-w-[400px] ms:max-w-full xs:mx-auto gap-[3rem]">
          <div className="flex-1 bg-white dark:bg-bgcolLight rounded-3xl overflow-hidden flex flex-col shadow-dark dark:shadow-none">
            <img
              src={cocktails}
              alt="Cocktails"
              className="w-full h-[200px] object-cover"
            />
            <div className="relative">
              <Link
                to="projects/thirsty"
                className="absolute top-[-2rem] left-[50%] translate-x-[-50%] bg-primaryDark text-white dark:bg-white dark:text-bgcol px-6 py-3 text-3xl rounded-full font-semibold cursor-pointer"
              >
                I'm Thirsty
              </Link>
            </div>
            <div className="mt-[3rem] px-6">
              <h3 className="text-center mb-5">Technologies I used:</h3>
              <ul className="mt-2 pl-4 mb-[2rem] text-center">
                <li>React</li>
                <li>React Query</li>
              </ul>
            </div>
            <button className="mt-auto mx-auto w-[10rem] border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary mb-[2rem] text-[1.8rem] font-semibold dark:hover:bg-primary dark:hover:text-bgcol transition-all">
              Visit
            </button>
          </div>
          <div className="flex-1 bg-white dark:bg-bgcolLight rounded-3xl overflow-hidden flex flex-col shadow-dark dark:shadow-none">
            <img
              src={reactpic}
              alt="React"
              className="w-full h-[200px] object-cover"
            />
            <div className="relative">
              <Link
                to="/projects/blog"
                className="absolute top-[-2rem] left-[50%] translate-x-[-50%] bg-primaryDark text-white dark:bg-white dark:text-bgcol px-6 py-3 text-3xl rounded-full font-semibold cursor-pointer"
              >
                React Blog
              </Link>
            </div>
            <div className="mt-[3rem] px-6">
              <h3 className="text-center mb-5">Technologies I used:</h3>
              <ul className="mt-2 pl-4 mb-[2rem] text-center">
                <li>React</li>
                <li>React Query</li>
                <li>Firebase</li>
              </ul>
            </div>
            <button className="mt-auto mx-auto w-[10rem] border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary mb-[2rem] text-[1.8rem] font-semibold dark:hover:bg-primary dark:hover:text-bgcol transition-all">
              Visit
            </button>
          </div>
          <div className="flex-1 bg-white dark:bg-bgcolLight rounded-3xl overflow-hidden flex flex-col shadow-dark dark:shadow-none">
            <img
              src={lingo}
              alt="Languages"
              className="w-full h-[200px] object-cover"
            />
            <div className="relative">
              <Link
                to="projects/lingo"
                className="absolute top-[-2rem] left-[50%] translate-x-[-50%] bg-primaryDark text-white dark:bg-white dark:text-bgcol px-6 py-3 text-3xl rounded-full font-semibold cursor-pointer"
              >
                MemoLingo
              </Link>
            </div>
            <div className="mt-[3rem] px-6">
              <h3 className="text-center mb-5">Technologies I used:</h3>
              <ul className="mt-2 mb-[2rem] text-center">
                <li>React</li>
                <li>React Query</li>
                <li>Firebase</li>
                <li>Tailwind</li>
                <li>Typescript</li>
              </ul>
            </div>
            <button className="mt-auto mx-auto w-[10rem] border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary mb-[2rem] text-[1.8rem] font-semibold dark:hover:bg-primary dark:hover:text-bgcol transition-all">
              Visit
            </button>
          </div>
        </div>
        <button className="block mx-auto mt-[2rem] border-b-2 border-primaryDark dark:border-white">
          See all projects
        </button>
      </section>
    </>
  );
};

export default Home;