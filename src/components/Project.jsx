const Project = ({ name, techStackImgs, image, details, link, github }) => {
  return (
    <div className="rounded-2xl ms:flex overflow-hidden shadow-sm dark:shadow-none">
      <div className="cursor-pointer">
        <img
          src={image}
          alt={name}
          className="ms:w-[400px] ms:h-[400px] h-[300px] ms:object-cover w-full object-cover"
        />
      </div>
      <div className="bg-slate-100 dark:bg-bgcolLight flex-1 flex flex-col">
        <h2 className="text-center text-[2.6rem] font-semibold mt-[2rem]">
          {name}
        </h2>
        <div className="flex-wrap ms:flex-nowrap flex justify-evenly mt-[3rem] gap-[3rem] ms:gap-[1rem]">
          {techStackImgs.map((img) => (
            <img
              key={crypto.randomUUID()}
              src={img}
              alt=""
              className="w-[75px] lg:w-[100px] cursor-pointer"
            />
          ))}
        </div>
        <p className="px-[2.5rem] pt-[2rem] pb-[4rem] ms:pb-[2rem] mt-[1rem]">
          {details}
        </p>
        <div className="mt-auto mx-auto mb-[2rem] text-[1.8rem] font-semibold flex gap-10 items-center">
          <a
            href={link}
            target="_blank"
            className="px-8 py-2 border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-bgcol transition-all"
          >
            Open App
          </a>
          <a
            href={github}
            target="_blank"
            className="px-8 py-2 border-2 rounded-full border-primaryDark hover:bg-primaryDark hover:text-white dark:border-primary dark:hover:bg-primary dark:hover:text-bgcol transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
