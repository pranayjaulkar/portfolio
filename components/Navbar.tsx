"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import OpenInNewWindowIcon from "./assets/icons/open-in-new-window-icon";
import { links } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const sections = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
    {
      name: "Resume",
      url: process.env.NEXT_PUBLIC_RESUME_LINK || "",
    },
  ];

  return (
    <div
      style={{ background: "linear-gradient(221deg, #23024d, #0f0c28)" }}
      className="flex md:block w-full transition-all duration-200 fixed z-50  bg-tertiary border-b border-gray-700"
    >
      <nav id="#home" className="flex mx-auto w-full px-4 md:max-w-[75%] xl:max-w-[65%]">
        <div className="py-2 md:py-1.5 w-full flex justify-between items-center">
          <div className="hidden md:flex text-white text-sm items-center justify-start space-x-6">
            {sections.map((section, i) => (
              <Link
                className="border-b-[1px] border-transparent hover:border-white drop-shadow-2xl text-xs flex items-center space-x-2"
                key={i}
                href={section.url}
                target={section.name === "Resume" ? "_blank" : ""}
              >
                {section.name}
                {section.name === "Resume" && <OpenInNewWindowIcon className="fill-white ml-2" width={14} />}
              </Link>
            ))}
          </div>
          <div className="w-full md:w-fit flex items-center justify-between">
            <div className="flex flex-row-reverse md:flex-row space-x-reverse md:space-x-px space-x-4 justify-center items-center">
              {links.map((linkItem, i) => (
                <Link key={i} href={linkItem.url} target="_blank" className="md:p-2 fill-white hover:fill-primary">
                  <motion.div
                    initial={{ scale: 1, fill: "rgb(255,255,255)" }}
                    whileHover={{
                      scale: 1.2,
                      fill: "rgb(91, 233, 185)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <linkItem.icon className="fill-inherit" width={20} />
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link className="md:hidden" href={process.env.NEXT_PUBLIC_RESUME_LINK || ""}>
              <Button className="bg-primary h-8 text-white">Resume</Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
