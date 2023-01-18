import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import me from '../assets/profile-pic-12.png';

import { HiArrowRight } from 'react-icons/hi';

import Card from './Card';
import db from '../store/db.json';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col-reverse ss:flex-row mt-[4rem] ss:mt-[9rem] items-center gap-[3rem]">
        <div className="flex-1 text-center ss:text-left">
          <span className="font-bold mb-[1rem] inline-block tracking-wider pl-1">
            HELLO
          </span>
          <h2 className="text-center ss:text-left text-[3.5rem] sm:text-[3.8rem] ms:text-[4rem] md:text-[4.4rem] font-bold">
            I'm{' '}
            <span className="text-primaryDark dark:text-primary">Miljan</span>.
            I'm a front-end developer and React & Javascript enthusiast.
          </h2>
          <Link
            to="about"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            More about me{' '}
            <span className="mt-1">
              <HiArrowRight size={15} />
            </span>
          </Link>
        </div>
        <div>
          <img
            src={me}
            alt="Miljan"
            className="rounded-full h-[200px] ms:h-[220px] md:h-[240px] ml-auto mt-[-1rem] ss:mt-0"
          />
        </div>
      </section>
      <section className="mt-[10rem] pb-[5rem] text-center">
        <h2 className="text-[2.4rem] font-semibold text-left xs:text-center ms:text-left">
          My projects
        </h2>
        <div className="mt-[2rem] flex flex-col ms:flex-row xs:max-w-[400px] ms:max-w-full xs:mx-auto gap-[3rem]">
          {db.slice(0, 3).map(item => (
            <Card
              key={crypto.randomUUID()}
              name={item.name}
              image={item.image}
              techStack={item.technologies}
              link={item.link}
            />
          ))}
        </div>
        <Link
          to="projects"
          className="inline-block mx-auto mt-[2rem] border-b-2 border-primaryDark dark:border-white"
        >
          See all projects
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;
