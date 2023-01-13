import { motion } from "framer-motion";

const PageStarter = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col gap-[6rem] pb-[7rem]">
        <h2 className="mt-[5rem] text-[4rem] sm:text-[5rem] text-center font-bold">
          {title}
        </h2>
        {children}
      </section>
    </motion.div>
  );
};

export default PageStarter;
