import { Link } from "react-router-dom";

const Card = ({ image, name, techStack, link }) => {
  return (
    <div className="flex-1 bg-white dark:bg-bgcolLight rounded-3xl overflow-hidden flex flex-col shadow-dark dark:shadow-none">
      <img
        src={image}
        alt="Cocktails"
        className="w-full h-[200px] object-cover"
      />
      <div className="relative">
        <Link
          to="projects"
          className="absolute top-[-2rem] left-[50%] translate-x-[-50%] bg-primaryDark text-white dark:bg-white dark:text-bgcol px-6 py-3 text-3xl rounded-full font-semibold cursor-pointer"
        >
          {name}
        </Link>
      </div>
      <div className="mt-[4rem] px-6">
        <h3 className="text-center mb-2 uppercase text-primaryDark dark:text-primary pl-[1rem]">
          TECH STACK
        </h3>
        <ul className="mt-2 pl-4 mb-[2rem] text-center">
          {techStack.map((tech) => (
            <li key={crypto.randomUUID()}>{tech}</li>
          ))}
        </ul>
      </div>
      <a
        href={link}
        target="_blank"
        className="mt-auto mx-auto w-[10rem] border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary mb-[2rem] text-[1.8rem] font-semibold dark:hover:bg-primary dark:hover:text-bgcol transition-all text-center"
      >
        Visit
      </a>
    </div>
  );
};

export default Card;
