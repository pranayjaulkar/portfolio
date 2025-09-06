import Image from "next/image";
import AvatarIcon from "@/components/assets/icons/avatar.svg";
import { motion } from "framer-motion";
import { links } from "@/lib/utils";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <section className="h-screen mb-52">
      <div className="h-full pt-0 flex flex-col items-center">
        {/* Image */}
        <div className="p-8 sm:mt-24">
          <Image className="px-8 lg:px-0" src={AvatarIcon} width={150} height={150} alt="" />
        </div>

        {/* Name and Intro */}
        <div className="pt-4 sm:pt-8 flex flex-col max-w-[1200px]">
          <h1 className="text-zinc-300 flex flex-col space-y-6 p-4">
            <span className="w-fit">Hi, my name is</span>
            <span className="text-6xl font-black text-secondary ">Pranay Jaulkar.</span>
            <span className="text-6xl font-black text-secondary ">I build things for the web.</span>
            <span className="max-w-[800px]">
              I&apos;m a self-taught web developer with experience in designing new features from ideation to
              production. Currently, I&apos;m focused on the backend development and devops.
            </span>
          </h1>
          <div className="md:hidden mt-6  flex space-x-2 justify-center items-center">
            {links.map((linkItem, i) => (
              <Link href={linkItem.url} target="_blank" key={i} className=" text-lg font-normal p-2">
                <motion.div
                  initial={{ scale: 1, fill: "rgb(255,255,255)" }}
                  whileHover={{
                    scale: 1.2,
                    fill: "rgb(91, 233, 185)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <linkItem.icon className="fill-inherit" width={25} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
