import Image from "next/image";
import AvatarIcon from "@/components/assets/icons/avatar.svg";

export default function IntroductionSection() {
  return (
    <section id="home" className="h-screen mb-52">
      <div className="h-full pt-0 flex flex-col items-center">
        {/* Image */}
        <div className="p-8 mt-24 md:mt-40">
          <Image
            className="px-8 lg:px-0"
            src={AvatarIcon}
            width={150}
            height={150}
            alt=""
          />
        </div>

        {/* Name and Intro */}
        <div className="pt-4 sm:pt-8 flex flex-col max-w-[1200px]">
          <h1 className="text-zinc-300 flex flex-col space-y-4 md:space-y-6 p-4 text-sm px-6">
            <span className="w-fit text-white">Hi, my name is</span>
            <span className="text-3xl sm:text-5xl font-black text-secondary ">
              Pranay Jaulkar.
            </span>
            <span className="text-3xl sm:text-5xl font-black text-secondary ">
              I build things for the web.
            </span>
            <span className="max-w-[800px]">
              I&apos;m a self-taught web developer with experience in designing
              new features from ideation to production. Currently, I&apos;m
              focused on the backend development and devops.
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
