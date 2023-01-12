import { useRef } from "react";

const Project = ({ name, techStackImgs, image, details }) => {
  return (
    <div className="rounded-2xl flex overflow-hidden shadow-sm dark:shadow-none">
      <div className="cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-[400px] h-[400px] object-cover"
        />
      </div>
      <div className="bg-slate-100 dark:bg-bgcolLight flex-1">
        <h2 className="text-center text-[2.6rem] font-semibold mt-[2rem]">
          {name}
        </h2>
        <div className="flex justify-evenly mt-[2rem] gap-[1rem]">
          {techStackImgs.map((img) => (
            <img
              key={crypto.randomUUID()}
              src={img}
              alt=""
              className="w-[100px] cursor-pointer"
            />
          ))}
        </div>
        <div className="">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
