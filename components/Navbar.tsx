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
      url: process.env.NEXT_PUBLIC_RESUME_LINK || "",
    },
  ];

  return (
    <div className="hidden md:block w-full transition-all duration-200 fixed z-50">
      <nav
        id="#home"
        className="bg-tertiary border border-gray-700 flex mx-auto max-w-[90%] px-4 mt-2 md:max-w-[75%] xl:max-w-[65%]"
      >
        <div className="py-1.5 w-full flex justify-between items-center">
          <div className="flex text-white text-sm items-center justify-start space-x-6">
            {sections.map((section, i) => {
              return (
                <Link
                  className="border-b-2 border-transparent hover:border-white drop-shadow-2xl"
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
        </div>
      </nav>
    </div>
  );
}
