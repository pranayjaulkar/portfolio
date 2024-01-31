import Image from "next/image";
import AvatarIcon from "@/components/icons/avatar.svg";
import DevicesImage from "@/components/images/hero-devices.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

interface IntroductionSectionProps {}

export const IntroductionSection: React.FC<IntroductionSectionProps> = () => {
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
    <div className="h-[90%] flex flex-col items-center ">
      <div className="p-8">
        <Image
          className="px-8 lg:px-0"
          src={AvatarIcon}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="pt-4 md:pt-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-primary font-anton tracking-wide h-12 lg:h-20">
          <span ref={el}></span>
        </h1>
        <h2 className="mt-4 md:mt-8 text-md md:text-xl max-w-[80%] text-center w-full text-white drop-shadow-2xl " >
          I design and code beautifully simple things, and I love what I do.
        </h2>
      </div>
      <div className="w-full mt-auto flex items-end">
        <Image
          className="mt-auto mx-auto px-8 md:px-16 lg:px-0  slideIn"
          src={DevicesImage}
          width={800}
          alt=""
        />
      </div>
    </div>
  );
};
export default IntroductionSection;
