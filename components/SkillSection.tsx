import { getSkills } from "@/lib/utils";
import { motion } from "framer-motion";
import Section from "./Section";

import Image from "next/image";

export default function SkillSection() {
  const skills = getSkills();
  const variants = {
    initialScale: { scale: 0.7, opacity: 0, x: "-30px" },
    scaleIn: {
      scale: [0.8, 1],
      opacity: [0, 1],
      x: ["-30px", "0px"],
      transition: { duration: 2, type: "spring" },
    },
    deflate: { borderRadius: ["24px", "30px", "50px", "999px"] },
    inflate: {
      scale: [1, 1.15],
      transition: { duration: 0.3, delay: 0 },
    },
  };
  return (
    <Section title="TECHNOLOGIES AND TOOLS">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12 justify-items-center">
        {skills.map((skill) => (
          <motion.div
            variants={variants}
            initial="initialScale"
            whileInView="scaleIn"
            key={skill.name}
            className="space-y-4 flex flex-col items-center"
          >
            <motion.div
              variants={variants}
              animate="deflate"
              whileHover="inflate"
              className=" w-20 h-20  md:w-24 md:h-24 p-4 md:px-0 flex justify-center items-center bg-slate-800 rounded-full"
            >
              <Image src={skill.icon} width={skill.name === "NextJS" ? "70" : "55"} alt="" />
            </motion.div>

            <h4 className="text-center text-white md:text-lg lg:text-xl">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
