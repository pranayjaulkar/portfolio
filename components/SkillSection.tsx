import { SKILLS } from "@/lib/utils";
import { motion } from "framer-motion";
import Section from "./Section";

import Image from "next/image";

export default function SkillSection() {
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
      scale: [1, 1.08],
      transition: { duration: 0.3, delay: 0 },
    },
  };
  return (
    <Section title="TECHNOLOGIES">
      <div className="mx-auto max-w-[1200px]">
        <h3 className="w-full flex text-7xl font-semibold text-white mb-16 items-center">
          Technologies
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 justify-items-center gap-y-10 gap-x-[100px]">
          {SKILLS.map((skill) => (
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
                className="w-16 h-16 p-3 md:px-0 flex justify-center items-center bg-slate-800 rounded-full"
              >
                <Image src={skill.icon} width="35" alt="" />
              </motion.div>

              <h4 className="text-center text-white font-semibold drop-shadow-2xl">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
