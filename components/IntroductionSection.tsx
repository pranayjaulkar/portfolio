import Image from "next/image";
import AvatarIcon from "@/components/assets/icons/avatar.svg";
import DevicesImage from "@/components/assets/images/hero-devices.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface IntroductionSectionProps {}

const IntroductionSection: React.FC<IntroductionSectionProps> = () => {
  const el = useRef(null);
  const introText =
    "I design and code beautifully simple things, and I love what I do.";

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
    <div className="h-full pt-0 flex flex-col items-center ">
      <div className="p-8 md:mt-24">
        <Image
          className="px-8 lg:px-0"
          src={AvatarIcon}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="pt-4 md:pt-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-secondary font-anton tracking-wide h-12 lg:h-20">
          <span ref={el}></span>
        </h1>
        <h2 className="mt-4 md:mt-8 text-xl md:text-2xl max-w-[80%] text-center w-full text-white drop-shadow-2xl ">
          {introText}
        </h2>
      </div>
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
  );
};
export default IntroductionSection;
