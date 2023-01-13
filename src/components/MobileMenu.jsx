import React from "react";
import { Link } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const MobileMenu = ({ closeMenu, darkMode, setDarkMode }) => {
  const handleChangeTheme = () => {
    setDarkMode((prev) => !prev);
    closeMenu();
  };

  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-[100] bg-primaryDark dark:bg-bgcol">
      <span
        onClick={closeMenu}
        className="absolute top-0 right-[2rem] text-white text-[5rem]"
      >
        &times;
      </span>
      <div className="flex flex-col items-center justify-center h-full text-white text-[4rem]">
        <Link onClick={closeMenu} to="/">
          Home
        </Link>
        <Link onClick={closeMenu} to="about">
          About
        </Link>
        <Link onClick={closeMenu} to="projects">
          Projects
        </Link>
        {darkMode && (
          <BsSunFill className="mt-10" onClick={handleChangeTheme} />
        )}
        {!darkMode && (
          <BsMoonFill className="mt-10" onClick={handleChangeTheme} />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
