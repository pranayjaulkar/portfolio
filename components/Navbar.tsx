"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/utils";

export default function Navbar() {
  const sections = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1D9_FJkcShGipmZLyk7WYha9Bl43JxDgk/view?usp=sharing",
    },
  ];
  return (
    <div className="hidden md:block fixed top-0 z-50 bg-primary w-full">
      <nav id="#home" className="flex h-[10%] mx-auto max-w-[90%]  md:max-w-[75%] xl:max-w-[65%]">
        <div className="py-6 w-full flex justify-between items-center">
          <div className="flex text-white lg:text-lg  items-center justify-start space-x-6">
            {sections.map((section, i) => {
              return (
                <Link
                  className="border-b-2 border-transparent hover:border-white"
                  key={i}
                  href={section.url}
                  target={section.name === "Resume" ? "_blank" : ""}
                >
                  {section.name}
                </Link>
              );
            })}
          </div>
          <div className="flex space-x-2 justify-center items-center">
            {links.map((LinkItem, i) => (
              <Link key={i} href={LinkItem.url} target="_blank" className="md:p-2 fill-white hover:fill-primary">
                <motion.div
                  initial={{ scale: 1, fill: "rgb(255,255,255)" }}
                  whileHover={{
                    scale: 1.2,
                    fill: "rgb(91, 233, 185)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <LinkItem.icon className="fill-inherit" width={25} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
