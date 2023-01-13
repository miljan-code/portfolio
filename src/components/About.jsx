import { Link } from "react-router-dom";

import PageStarter from "./PageStarter";
import mypic from "../assets/me-2.jpg";

import { FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageStarter title="Here is my story.">
      <div className="">
        <div className="hidden sm:block">
          <img
            src={mypic}
            alt="miljan gicic"
            className="rounded-2xl w-[30rem] float-left mr-[3rem] mb-5"
          />
        </div>
        <p className="text-justify mt-[-.5rem] leading-[1.7] font-normal dark:font-light text-[1.8rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas neque
          maiores quaerat facilis! Est nobis culpa minima saepe animi. Vel.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          soluta officia perferendis ut explicabo earum nisi consequatur
          corrupti mollitia non, eius dolore voluptatibus reiciendis
          consequuntur sunt ducimus magnam autem veritatis.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aut
          sed atque accusantium, numquam nihil minima quisquam iusto soluta quis
          id doloribus enim, quas totam molestiae, saepe distinctio vitae quam
          ipsam. In perferendis rem numquam mollitia magni ad beatae dolore,
          tempora hic dolorum corporis vel perspiciatis aperiam consectetur
          dolor esse.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius qui
          inventore pariatur quas mollitia facere illo placeat. Perspiciatis
          iste, impedit harum quis temporibus rerum necessitatibus minus, aut
          alias et earum. Vero, assumenda incidunt. Esse rem ipsam explicabo
          molestias quo nostrum?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, nulla
          deleniti distinctio cum aspernatur corrupti rerum. Consequuntur
          possimus eaque vero autem suscipit quidem. Voluptatibus corporis
          placeat laudantium beatae nihil quidem sunt! Sed et earum ipsam
          necessitatibus natus molestiae perspiciatis debitis rerum numquam
          similique veniam, eveniet ut unde doloribus suscipit quis cupiditate
          eligendi a incidunt corporis animi libero, quae deleniti? Consequuntur
          harum cumque ut maiores quibusdam reprehenderit reiciendis dolorem
          deserunt commodi accusantium veritatis quos velit recusandae modi,
          fugit debitis quod atque nostrum sunt sequi dignissimos exercitationem
          nobis voluptatem porro. Culpa minus, quasi aut laboriosam repellat
          exercitationem fuga corporis ipsa quod quo.
        </p>
        <div className="flex gap-10">
          <Link
            to="/"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Resume{" "}
            <span className="mt-1">
              <FaDownload size={15} />
            </span>
          </Link>
          <Link
            to="about"
            className="mt-[4rem] text-3xl font-semibold bg-primaryDark text-white hover:bg-black dark:bg-white px-6 py-4 rounded-full dark:text-bgcol dark:hover:bg-primary transition-all inline-flex items-center gap-2 mx-auto ss:mx-0"
          >
            Email{" "}
            <span className="mt-1">
              <HiMail size={18} />
            </span>
          </Link>
        </div>
      </div>
    </PageStarter>
  );
};

export default About;
