import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/utils";

export default function ContactInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.3, duration: 1 },
      }}
      className="flex flex-col space-y-6 text-zinc-300 text-sm"
    >
      <div className="flex flex-col space-y-1">
        <span className="text-secondary text-base">Email</span>
        <div>jaulkarpranay@gmail.com</div>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-secondary text-base">Address</span>
        <div>Hudkeshwar, Nagpur, Maharashtra, India</div>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-secondary text-base">Social Links</span>
        <div className=" flex space-x-4 items-center">
          {links.map((linkItem, i) => (
            <Link href={linkItem.url} target="_blank" key={i}>
              <motion.div
                initial={{ scale: 1, fill: "rgb(255,255,255)" }}
                whileHover={{
                  scale: 1.2,
                  fill: "rgb(91, 233, 185)",
                }}
                transition={{ duration: 0.2 }}
              >
                <linkItem.icon className="fill-inherit" width={25} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
