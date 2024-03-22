"use client";
import GithubIconLight from "@/components/assets/icons/github-icon-light";
import TwitterIcon from "@/components/assets/icons/twitter-icon-light";
import LinkedinIcon from "@/components/assets/icons/linkedin-icon-light";
import InstagramIcon from "@/components/assets/icons/instagram-icon-light";
import Link from "next/link";
import { motion } from "framer-motion";
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

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex h-[10%] mx-auto max-w-[90%]  md:max-w-[75%] xl:max-w-[60%]">
      <div className="py-8 w-full flex justify-between items-center">
        <span className="text-xl md:text-3xl text-primary font-anton tracking-wide">
          Pranay Jaulkar
        </span>
        <div className=" flex space-x-2 justify-center items-center">
          {links.map((LinkItem, i) => (
            <Link
              key={i}
              href={LinkItem.url}
              target="_blank"
              className="md:p-2 fill-primary hover:fill-secondary"
            >
              <motion.div
                initial={{ scale: 1, fill: "rgb(110, 7, 243)" }}
                whileHover={{
                  scale: 1.4,
                  fill: "rgb(91, 233, 185)",
                }}
                transition={{ duration: 0.6 }}
              >
                <LinkItem.icon className="fill-inherit" width={25} />
              </motion.div>
            </Link>
          ))}
        </div>{" "}
      </div>
    </nav>
  );
};
export default Navbar;
