import Image from "next/image";
import AvatarIcon from "@/components/assets/icons/avatar.svg";
import { motion } from "framer-motion";
import { links } from "@/lib/utils";
import Link from "next/link";

export default function IntroductionSection() {

  return (
    <section className="h-screen">
      <div className="h-full pt-0 flex flex-col items-center">
        {/* Image */}
        <div className="p-8 sm:mt-24">
          <Image
            className="px-8 lg:px-0"
            src={AvatarIcon}
            width={150}
            height={150}
            alt=""
          />
        </div>

        {/* Name and Intro */}
        <div className="pt-4 sm:pt-8 flex flex-col space-y-4 max-w-[1000px]">
          <p className="text-base text-secondary">Hi, my name is</p>
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Pranay Jaulkar.
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              I build things for the web.
            </h2>
          </div>
          <p className="text-base text-secondary drop-shadow-2xl max-w-[700px]">
            I&apos;m a self-taught web developer with experience in designing
            new features from ideation to production.Currently, I&apos;m focused on the backend development and devops.
          </p>
          <div className="md:hidden mt-6  flex space-x-2 justify-center items-center">
            {links.map((linkItem, i) => (
              <Link
                href={linkItem.url}
                target="_blank"
                key={i}
                className=" text-lg font-normal p-2"
              >
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
