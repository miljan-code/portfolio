import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="hidden sm:block">
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
  );
};

export default Navigation;
