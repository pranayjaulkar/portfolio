interface ContactSectionProps {}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { links } from "@/lib/utils";

export default function ContactSection() {
  const [slide, setSlide] = useState(false);

  return (
    <section className="w-full h-[1200px] lg:h-[800px] relative ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full backdrop-blur-xl"
      ></motion.div>
      <div className="absolute w-full p-8 md:px-32 lg:px-20 xl:px-40 2xl:px-60 lg:py-12">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          className="w-full text-4xl md:text-5xl font-black text-center text-secondary mb-10 md:mb-16    "
        >
          CONTACT
        </motion.h3>
        <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 1 },
            }}
            className="w-full lg:w-[400px] xl:w-[500px] lg:mr-12 mb-20 md:mb-0"
          >
            <div className="text-xl text-white space-y-2 mb-10">
              <span className="text-secondary font-bold text-3xl">Connect with me</span>
              <p className="text-lg">
                If you want to know more about me or my work, or if you would just like to say hello, send me a message.
                I&apos;d love to hear from you.
              </p>
            </div>
            <form className="space-y-6">
              <div className="space-y-6">
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="name">
                      Name
                    </Label>
                  </div>

                  <Input id="name" type="text" placeholder="Enter your name" className="bg-white rounded-lg " />
                </div>
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="email">
                      Email
                    </Label>
                  </div>

                  <Input id="email" type="text" placeholder="Enter your email" className="bg-white rounded-lg " />
                </div>
                <div className=" ">
                  <div className="mb-2">
                    <Label className=" text-white text-lg" htmlFor="message">
                      Message
                    </Label>
                  </div>

                  <Textarea rows={5} id="message" placeholder="Enter your message" className="bg-white rounded-lg " />
                </div>
              </div>
              <div>
                <div
                  onMouseOver={() => setSlide(true)}
                  onMouseOut={() => setSlide(false)}
                  className="relative border border-primary border-opacity-70 overflow-hidden w-40 cursor-pointer rounded-full"
                >
                  <div
                    style={{
                      transform: `translateX(${slide ? "0px" : "-160px"}) rotate(${slide ? "0deg" : "45deg"})`,
                    }}
                    className="absolute origin-top-right z-0 transition-all duration-200 ease-out bg-primary w-full h-52"
                  ></div>
                  <a
                    className=" w-full h-full block"
                    onClick={() => console.log("something")}
                    href="mailTo:jaulkarpranay@gmail.com"
                  >
                    <Button
                      type="submit"
                      className="rounded-none bg-transparent hover:bg-transparent w-full text-white text-md"
                    >
                      <span className=" z-20 ">Submit</span>
                    </Button>
                  </a>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 1 },
            }}
            className="flex flex-col lg:w-[400px] xl:w-[500px] items-center  lg:items-start space-y-16 text-center lg:text-start text-3xl text-white"
          >
            <div>
              <div className="text-secondary font-bold">Email</div>
              <div className=" text-lg font-normal">jaulkarpranay@gmail.com</div>
            </div>
            <div>
              <div className="text-secondary font-bold">Address</div>
              <div className=" text-lg font-normal">Hudkeshwar, Nagpur, Maharashtra, India</div>
            </div>
            <div>
              <div className="text-secondary font-bold">Social Links</div>
              <div className=" flex space-x-2 justify-center items-center">
                {links.map((LinkItem, i) => (
                  <Link href={LinkItem.url} target="_blank" key={i} className=" text-lg font-normal p-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
