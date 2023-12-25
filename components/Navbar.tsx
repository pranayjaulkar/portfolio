"use client";
import GithubIcon from "@/components/icons/github-icon.svg";
import TwitterIcon from "@/components/icons/twitter-icon.svg"
import LinkedinIcon from "@/components/icons/linkedin-icon.svg";
import InstagramIcon from "@/components/icons/instagram-icon.svg";
import Image from "next/image";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center my-12 mx-auto max-w-[90%]  md:max-w-[75%] xl:max-w-[60%] ">
      <span className="font-bold text-xl md:text-3xl text-primary">Pranay Jaulkar</span>
      <div className=" flex space-x-4 justify-center items-center">
        <Image
          className="cursor-pointer  text-primary"
          src={GithubIcon}
          alt=""
          width={25}
          height={25}
        />
        <Image
          className="cursor-pointer  text-primary"
          src={TwitterIcon}
          alt=""
          width={25}
          height={25}
        />
        <Image
          className="cursor-pointer  text-primary"
          src={LinkedinIcon}
          alt=""
          width={25}
          height={25}
        />
        <Image
          className="cursor-pointer text-primary"
          src={InstagramIcon}
          alt=""
          width={25}
          height={25}
        />
      </div>
    </nav>
  );
};
export default Navbar;
