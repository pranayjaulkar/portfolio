import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [slide, setSlide] = useState(false);

  return (
    <div className="flex flex-col">
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
          <div className="flex flex-col space-y-6 mb-10">
            <span className="text-secondary font-bold text-4xl">Connect with me</span>
            <p className="text-sm text-zinc-200">
              If you want to know more about me or my work, or if you would just like to say hello, send me a message.
              I&apos;d love to hear from you.
            </p>
          </div>
          <form className="flex flex-col space-y-6" action="@mailto:jaulkarpranay@gmail.com">
            <div className="text-zinc-200 text-sm space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">Name</label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  rows={5}
                  id="message"
                  placeholder="Enter your message"
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
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
                    className="rounded-none bg-transparent hover:bg-transparent w-full text-zinc-300"
                  >
                    <span className="z-20 ">Submit</span>
                  </Button>
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
