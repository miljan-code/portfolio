import { useState } from 'react';
import rays from './assets/rays.png';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white min-h-[100vh]">
        <div className="absolute sm:top-[-20rem] top-[-5rem] left-[50%] translate-x-[-50%] dark:opacity-50 h-[30rem] w-[25rem] xs:h-[40rem] xs:w-[30rem] sm:h-[76rem] sm:w-[59rem] scale-[1.3] opacity-0 z-0">
          <img src={rays} alt="" height={'100%'} width={'100%'} />
        </div>
        <header className="relative p-5 bg-slate-100 dark:bg-slate-900 dark:bg-opacity-20 z-50">
          <div className="max-w-[120rem] mx-auto flex items-center justify-between">
            <p className="text-primaryDark font-bold dark:text-white dark:hover:text-primary transition-colors cursor-pointer">
              miljan.dev
            </p>
            <nav>
              <ul className="flex gap-10 font-medium">
                <li className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all">
                  Home
                </li>
                <li className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all">
                  About
                </li>
                <li className="hover:text-primaryDark dark:hover:text-primary cursor-pointer transition-all">
                  Projects
                </li>
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
      </div>
    </div>
  );
};

export default App;
