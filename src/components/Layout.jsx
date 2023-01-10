import { useState } from 'react';
import { Link } from 'react-router-dom';

import rays from '../assets/rays.png';
import logo from '../assets/logo.png';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-bgcol dark:text-white min-h-[100vh]">
        <div className="absolute sm:top-[-20rem] top-[-5rem] left-[50%] translate-x-[-50%] dark:opacity-75 h-[30rem] w-[25rem] xs:h-[40rem] xs:w-[30rem] sm:h-[76rem] sm:w-[59rem] scale-[1.3] opacity-0 z-0">
          <img src={rays} alt="" height={'100%'} width={'100%'} />
        </div>
        <header className="px-10 lg:px-0 relative p-5 bg-slate-100 dark:bg-bgcol dark:bg-opacity-30 z-50">
          <div className="max-w-[110rem] mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-5 cursor-pointer">
              <img
                src={logo}
                alt="Miljan web dev logo"
                className="w-[3rem] h-[3rem]"
              />
              <p className="text-primaryDark font-bold dark:text-white dark:hover:text-primary transition-colors">
                miljan.tech
              </p>
            </Link>
            <nav className="hidden ss:block">
              <ul className="flex text-3xl gap-10">
                <Link
                  to="/"
                  className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all"
                >
                  About
                </Link>
                <Link
                  to="projects"
                  className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all"
                >
                  Projects
                </Link>
              </ul>
            </nav>
            <div>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="text-black dark:text-white hover:text-primaryDark dark:hover:text-primary cursor-pointer text-3xl transition-all block dark:bg-slate-700 p-3 rounded-full"
              >
                {darkMode && <BsSunFill />}
                {!darkMode && <BsMoonFill />}
              </button>
            </div>
          </div>
        </header>
        <main className="px-10 lg:px-0 relative max-w-[110rem] mx-auto z-5">
          {children}
        </main>
        <footer className="px-10 lg:px-0 pb-[3rem] text-center">
          <p>
            developed by{' '}
            <span className="text-primaryDark font-semibold dark:font-normal dark:text-primary cursor-pointer">
              miljan.tech
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
