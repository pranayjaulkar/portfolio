import Image from "next/image";
import Navbar from "@/components/Navbar";
import AvatarIcon from "@/components/icons/avatar.svg";
import DevicesImage from "@/components/images/hero-devices.svg";

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
          <h3 className="text-[#ffffff] text-3xl font-bold">
            Hi, I&apos;m Pranay. Nice to meet you
          </h3>
          <p className="text-[#ffffff] text-xl mt-8 max-w-[47rem] text-center">
            Since beginning my journey as a freelance designer over 11 years
            ago, I&apos;ve done remote work for agencies, consulted for
            startups, and collaborated with talented people to create digital
            products for both business and consumer use. I&apos;m quietly
            confident, naturally curious, and perpetually working on improving
            my chops one design problem at a time.
          </p>
        </div>
      </section>
    </main>
  );
}
