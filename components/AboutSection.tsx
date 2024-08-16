import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="mb-40">
      <div className="relative h-[380px] md:h-[450px]">
        <motion.div
          initial={{ x: "-2000px" }}
          animate={{
            x: inView ? ["-2000px", "0px"] : "-2000px",
          }}
          transition={{ duration: 0.8, easings: easeOut }}
          className="w-full h-full bg-primary"
        ></motion.div>
        <motion.div ref={ref} className="absolute top-0 left-0 right-0 h-full  flex justify-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className=" top-0 bottom-0 left-0 right-0 flex justify-center flex-col items-center animate-none p-8"
          >
            <h3 className="text-white text-xl md:text-3xl  animation-none scale-x-110">
              Hi, I&apos;m Pranay. Nice to meet you
            </h3>
            <p className="text-white md:text-lg mt-8 max-w-[47rem] text-center animate-none ">
              I&apos;m a self-taught web developer with experience in designing new features from ideation to
              production. I take into consideration the user experience while writing reusable and efficient code. I
              passionately combine good design, technology, and innovation in all my projects, which I like to accompany
              from the first idea to release. Currently, I&apos;m focused on the backend development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
