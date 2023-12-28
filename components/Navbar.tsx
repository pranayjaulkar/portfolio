"use client";
import GithubIconLight from "@/components/icons/github-icon-light";
import TwitterIcon from "@/components/icons/twitter-icon-light";
import LinkedinIcon from "@/components/icons/linkedin-icon-light";
import InstagramIcon from "@/components/icons/instagram-icon-light";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center my-12 mx-auto max-w-[90%]  md:max-w-[75%] xl:max-w-[60%] ">
      <span className="font-bold text-xl md:text-3xl text-primary">
        Pranay Jaulkar
      </span>
      <div className=" flex space-x-4 justify-center items-center">
        <GithubIconLight
          className=" fill-primary hover:fill-secondary"
          width={25}
        />
        <TwitterIcon
          className=" fill-primary hover:fill-secondary"
          width={25}
        />
        <LinkedinIcon
          className=" fill-primary hover:fill-secondary"
          width={25}
        />
        <InstagramIcon
          width={25}
          className=" fill-primary hover:fill-secondary"
        />
      </div>
    </nav>
  );
};
export default Navbar;
