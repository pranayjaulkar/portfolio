import Image from "next/image";
import AvatarIcon from "@/components/assets/icons/avatar.svg";
import DevicesImage from "@/components/assets/images/hero-devices.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/utils";
import Link from "next/link";

export default function IntroductionSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Pranay Jaulkar", "Fullstack Developer"],
      typeSpeed: 40,
      backDelay: 1000,
      backSpeed: 40,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="h-[70vh] sm:h-[101vh]">
      <div className="h-full pt-0 flex flex-col items-center">
        {/* Image */}
        <div className="p-8 sm:mt-24">
          <Image className="px-8 lg:px-0" src={AvatarIcon} width={200} height={200} alt="" />
        </div>

        {/* Name and Intro */}
        <div className="pt-4 sm:pt-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-secondary  h-12 lg:h-20">
            <span ref={el}></span>
          </h1>
          <h2 className="mt-4 md:mt-8 text-lg md:text-2xl max-w-[80%] text-center w-full text-white drop-shadow-2xl">
            I design and code beautifully simple things, and I love what I do.
          </h2>
          <div className="md:hidden mt-6  flex space-x-2 justify-center items-center">
            {links.map((LinkItem, i) => (
              <Link href={LinkItem.url} target="_blank" key={i} className=" text-lg font-normal p-2">
                <motion.div
                  initial={{ scale: 1, fill: "rgb(255,255,255)" }}
                  whileHover={{
                    scale: 1.2,
                    fill: "rgb(91, 233, 185)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <LinkItem.icon className="fill-inherit" width={25} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full mt-auto flex items-end">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.6, type: "spring" }}
            className="mt-auto mx-auto px-12 sm:px-40 md:px-16 lg:px-0"
          >
            <Image className="" src={DevicesImage} width={800} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
