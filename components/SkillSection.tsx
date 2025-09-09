import { SKILLS } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillSection() {
  const variants = {
    initialScale: { scale: 0.7, opacity: 0, x: "-30px" },
    scaleIn: {
      scale: [0.8, 1],
      opacity: [0, 1],
      x: ["-30px", "0px"],
      transition: { duration: 1, type: "spring" },
    },
    deflate: { borderRadius: ["24px", "30px", "50px", "999px"] },
    inflate: {
      scale: [1, 1.08],
      transition: { duration: 0.3, delay: 0 },
    },
  };
  return (
    <section id="skills" className="mx-4 md:mx-20 mb-80">
      <div className="md:ml-auto max-w-[1000px] xl:mr-28 2xl:mr-48">
        <h3 className="w-full text-center text-3xl md:text-4xl font-semibold text-white mb-10 md:mb-16">
          Technologies
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-8">
          {SKILLS.map((skill) => (
            <motion.div
              variants={variants}
              initial="initialScale"
              whileInView="scaleIn"
              key={skill.name}
            >
              <div className="flex flex-col space-y-4 items-center">
                <motion.div
                  variants={variants}
                  animate="deflate"
                  whileHover="inflate"
                  className="size-14 md:size-16 p-3 md:px-0 flex justify-center items-center bg-slate-800 rounded-full"
                >
                  <Image src={skill.icon} width="35" alt="" />
                </motion.div>

                <h4 className="text-center text-xs md:text-sm  min-w-32 px-2 py-0.5 text-zinc-300 drop-shadow-2xl">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
