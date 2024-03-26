import { getSkills } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
interface SkillSectionProps {}

const SkillSection: React.FC<SkillSectionProps> = () => {
  const skills = getSkills();
  const variants = {
    initialFadeIn: { opacity: 0 },
    fadeIn: { opacity: 1, transition: { duration: 2 } },
    initialScale: { scale: 0.7, opacity: 0, x: "-30px" },
    scaleIn: {
      scale: [0.8, 1],
      opacity: [0, 1],
      x: ["-30px", "0px"],
      transition: { duration: 2, type: "spring" },
    },
    deflate: { borderRadius: ["24px", "30px", "50px", "999px"] },
    inflate: {
      borderRadius: ["999px", "50px", "30px", "18px"],
      transition: { duration: 0.3, delay: 0 },
    },
  };
  return (
    <motion.div className="max-w-[75%] md:max-w-[65%] xl:max-w-[55%] mx-auto">
      <motion.h3
        variants={variants}
        initial="initialFadeIn"
        whileInView="fadeIn"
        className="flex justify-center items-center text-4xl md:text-6xl text-primary mb-16 md:mb-24  font-anton tracking-wide"
      >
        Technologies and Tools
      </motion.h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12 justify-items-center">
        {skills.map((skill) => (
          <motion.div
            variants={variants}
            initial="initialScale"
            whileInView="scaleIn"
            key={skill.name}
            className="space-y-4 flex flex-col items-center justify-between "
          >
            <motion.div
              variants={variants}
              animate="deflate"
              whileHover="inflate"
              className=" w-20 h-20  md:w-24 md:h-24 p-4 md:px-0 flex justify-center items-center  bg-gray-800 rounded-full"
            >
              <Image
                src={skill.icon}
                width={skill.name === "NextJS" ? "70" : "55"}
                alt=""
              />
            </motion.div>

            <h4 className="text-center text-white">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default SkillSection;
