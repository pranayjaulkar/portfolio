interface ContactSectionProps {}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { links } from "./Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [slide, setSlide] = useState(false);
  return (
    <div className="w-full h-screen relative ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute w-full h-full backdrop-blur-md"
      ></motion.div>
      <div className="absolute p-8 md:p-32 lg:px-60 lg:py-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          className="w-full text-3xl md:text-5xl text-center text-white font-bold mb-10 md:mb-20 font-anton tracking-wide"
        >
          Contact
        </motion.h3>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, duration: 1.5 },
            }}
            className="w-full lg:w-[60%] xl:w-[40%] mb-20 md:mb-0"
          >
            <div className="text-xl text-white space-y-4 mb-16">
              <span className="font-bold text-3xl">Connect with me</span>
              <p>
                If you want to know more about me or my work, or if you would
                just like to say hello, send me a message. I&apos;d love to hear
                from you.
              </p>
            </div>
            <form className="space-y-8">
              <div className="space-y-8">
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="name">
                      Name
                    </Label>
                  </div>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white rounded-lg "
                  />
                </div>
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="email">
                      Email
                    </Label>
                  </div>

                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    className="bg-white rounded-lg "
                  />
                </div>
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="message">
                      Message
                    </Label>
                  </div>

                  <Textarea
                    rows={5}
                    id="message"
                    placeholder="Enter your message"
                    className="bg-white rounded-lg "
                  />
                </div>
              </div>
              <div>
                <div className="relative border border-white border-opacity-70 overflow-hidden w-40 rounded-none cursor-pointer ">
                  <div
                    style={{ transform: `translateX(${slide ? 0 : -200})` }}
                    className="absolute w-full h-full"
                  ></div>
                  <Button
                    type="submit"
                    className="rounded-none bg-transparent w-full text-white text-md"
                  >
                    <a href="mailTo:jaulkarpranay@gmail.com">Submit</a>
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.5, duration: 1.5 },
            }}
            className="flex flex-col justify-center items-center  lg:items-end space-y-16 text-center lg:text-end  text-3xl  text-white"
          >
            <div>
              <div className="text-secondary font-anton tracking-wide">
                Email
              </div>
              <div className=" text-lg font-normal">
                jaulkarpranay@gmail.com
              </div>
            </div>
            <div>
              <div className="text-secondary font-anton tracking-wide">
                Address
              </div>
              <div className=" text-lg font-normal">
                Hudkeshwar, Nagpur, Maharashtra, India
              </div>
            </div>
            <div>
              <div className="text-secondary font-anton tracking-wide">
                Social Links
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                {links.map((LinkItem, i) => (
                  <Link
                    href={LinkItem.url}
                    target="_blank"
                    key={i}
                    className=" text-lg font-normal p-2"
                  >
                    <motion.div
                      initial={{ scale: 1, fill: "white" }}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
