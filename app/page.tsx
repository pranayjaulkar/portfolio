import Image from "next/image";
import Navbar from "@/components/Navbar";
import AvatarIcon from "@/components/icons/avatar.svg";
import DevicesImage from "@/components/images/hero-devices.svg";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <div className=" flex flex-col justify-center items-center pt-14">
          <h1 className="text-5xl font-bold">Fullstack Developer</h1>
          {/* <h2 className="text-7xl font-bold mt-4">Fullstack Developer</h2> */}
          <h2 className="mt-8 text-xl">
            I design and code beautifully simple things, and I love what I do.
          </h2>
          <Image
            className="mt-8"
            src={AvatarIcon}
            width={200}
            height={200}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <Image className="mt-16" src={DevicesImage} width={860} alt="" />
        </div>
      </section>{" "}
      <section>
        <div className="bg-primary p-20 flex justify-center flex-col items-center">
          <h3 className="text-white text-3xl font-bold">
            Hi, I&apos;m Pranay. Nice to meet you
          </h3>
          <p className="text-white text-xl mt-8 max-w-[47rem] text-center">
            I&apos;m a self-taught web developer with experience in designing
            new features from ideation to production, implementation of
            wireframes and design flows into high performance software
            applications. I take into consideration the user experience while
            writing reusable and efficient code. I passionately combine good
            design, technology, and innovation in all my projects, which I like
            to accompany from the first idea to release. Currently, I&apos;m
            focused on the backend development.
          </p>
        </div>
      </section>
      <section>
        <SkillSection />
      </section>
    </main>
  );
}
