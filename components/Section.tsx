import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const variants = {
    initialFadeIn: { opacity: 0 },
    fadeIn: { opacity: 1, transition: { duration: 2 } },
  };
  return (
    <motion.section
      className={cn("mx-10 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-64 mb-40", className)}
    >
      <motion.h3
        variants={variants}
        initial="initialFadeIn"
        whileInView="fadeIn"
        className="flex justify-center items-center text-center font-black text-4xl md:text-5xl text-secondary mb-16 md:mb-24"
      >
        {title}
      </motion.h3>
      {children}
    </motion.section>
  );
}
