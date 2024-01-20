"use client";
import GithubIconLight from "@/components/icons/github-icon-light";
import TwitterIcon from "@/components/icons/twitter-icon-light";
import LinkedinIcon from "@/components/icons/linkedin-icon-light";
import InstagramIcon from "@/components/icons/instagram-icon-light";
import Link from "next/link";
interface NavbarProps {}

export const links = [
  { icon: GithubIconLight, url: "https://github.com/pranayjaulkar" },
  { icon: TwitterIcon, url: "https://twitter.com/pranay_jaulkar_" },
  {
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/pranay-jaulkar-30b513206/",
  },
  { icon: InstagramIcon, url: "https://www.instagram.com/pranay_jaulkar_/" },
];

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex h-[10%] mx-auto max-w-[90%]  md:max-w-[75%] xl:max-w-[60%]">
      <div className="py-8 w-full flex justify-between items-center">
        <span className="text-xl md:text-3xl text-primary font-anton tracking-wide">
          Pranay Jaulkar
        </span>
        <div className=" flex space-x-2 justify-center items-center">
          {links.map((LinkItem, i) => (
            <Link
              href={LinkItem.url}
              target="_blank"
              key={i}
              className=" fill-primary md:p-2 hover:fill-secondary"
            >
              <LinkItem.icon className="fill-inherit" width={25} />
            </Link>
          ))}
        </div>{" "}
      </div>
    </nav>
  );
};
export default Navbar;
