import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

import rays from "../assets/rays.png";
import logo from "../assets/logo.png";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
      document.body.style.overflow = "visible";
    } else {
      setOpenMenu(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {openMenu && (
        <MobileMenu
          closeMenu={handleMobileMenu}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      )}
      <div className="dark:bg-bgcol dark:text-white min-h-[100vh]">
        <div className="absolute sm:top-[-20rem] top-[-5rem] left-[50%] translate-x-[-50%] dark:opacity-75 h-[30rem] w-[25rem] xs:h-[40rem] xs:w-[30rem] sm:h-[76rem] sm:w-[59rem] scale-[1.3] opacity-0 z-0">
          <img src={rays} alt="" height={"100%"} width={"100%"} />
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
                miljan
              </p>
            </Link>
            <Navigation />
            <div className="sm:hidden">
              <span onClick={handleMobileMenu} className="text-[2.5rem]">
                ☰
              </span>
            </div>
            <div className="hidden sm:block pl-[9rem]">
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
        <footer className="px-10 lg:px-0 pb-[3rem] text-center mt-[5rem]">
          <p className="mb-[1rem]">
            developed by{" "}
            <span className="text-primaryDark font-semibold dark:font-normal dark:text-primary cursor-pointer">
              miljan.tech
            </span>
          </p>
          <div className="flex gap-[1rem] items-center justify-center text-[2.5rem]">
            <a target="_blank" href="https://github.com/miljan-code">
              <FaGithub />
            </a>
            <a target="_blank" href="https://linkedin.com/in/miljangicic">
              <FaLinkedin />
            </a>
            <a target="_blank" href="mailto:miljangicic@proton.me">
              <HiMail className="text-[3rem]" />
            </a>
            <a target="_blank" href="https://t.me/miljan47">
              <FaTelegramPlane />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
