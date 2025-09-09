import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [slide, setSlide] = useState(false);

  return (
    <section id="about" className="w-full mb-80 mt-80 px-8 md:px-20">
      <motion.div
        transition={{ delay: 0.5, duration: 1 }}
        animate={
          inView
            ? {
                x: [40, 0],
                opacity: [0, 1],
              }
            : ""
        }
        className="w-full md:max-w-[1200px] mx-auto"
      >
        <div className="flex items-center w-full mb-8">
          <h3 className="w-full text-center md:text-left text-3xl md:text-4xl font-semibold text-white">
            About me
          </h3>
        </div>
        <div
          ref={ref}
          className="flex flex-col w-full md:max-w-[800px] space-y-8 text-zinc-200 text-sm"
        >
          <p>
            I&apos;m a Full-Stack Developer with experience building scalable
            web applications, Shopify apps, and e-commerce platforms using the
            MERN stack and modern frameworks like Next.js, Remix, and Angular.
            At VowelWeb, I&apos;ve developed apps for platforms like ShipIndia
            and ExpressText, integrating APIs, automating workflows, and
            improving customer engagement.
          </p>
          <p>
            I enjoy creating solutions that combine clean, responsive UIs with
            robust backend logic, and I&apos;m always exploring new tools in web
            development, databases, and DevOps. I&apos;m also passionate about
            sharing knowledge with the developer community and building side
            projects that let me experiment and grow.
          </p>

          <p>
            I&apos;m open to opportunities where I can contribute, learn, and
            build impactful products.
          </p>

          <div
            onMouseOver={() => setSlide(true)}
            onMouseOut={() => setSlide(false)}
            className="relative border border-primary border-opacity-70 overflow-hidden w-40 cursor-pointer rounded-full"
          >
            <div
              style={{
                transform: `translateX(${slide ? "0px" : "-160px"}) rotate(${
                  slide ? "0deg" : "45deg"
                })`,
              }}
              className="absolute origin-top-right z-0 transition-all duration-200 ease-out bg-primary w-full h-52"
            ></div>
            <Link href="#contact">
              <Button
                href="#contact"
                type="submit"
                className="rounded-none md:bg-transparent hover:bg-transparent w-full text-zinc-300 relative z-20"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
