import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import developerImage from "./assets/images/developer.png";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [slide, setSlide] = useState(false);

  return (
    <section id="about" className="w-full mb-80 mt-80 px-8 md:px-32 xl:px-60 2xl:px-72 flex items-center">
      <motion.div
        transition={{ delay: 0.5, duration: 0.8 }}
        animate={
          inView
            ? {
                x: [40, 0],
                opacity: [0, 1],
              }
            : ""
        }
        className="w-full lg:max-w-[500px] xl:max-w-[700px] flex-1"
      >
        <div className="flex items-center w-full mb-8">
          <h3 className="w-full text-center md:text-left text-3xl md:text-4xl font-semibold text-white">About me</h3>
        </div>
        <div ref={ref} className="flex flex-col w-full space-y-8 text-zinc-300 text-sm">
          <p>
            I&apos;m a Full-Stack Developer with experience building scalable web applications, Shopify apps, and
            e-commerce platforms using the MERN stack and modern frameworks like Next.js, Remix, and Angular. At
            VowelWeb, I&apos;ve developed apps for platforms like ShipIndia and ExpressText, integrating APIs,
            automating workflows, and improving customer engagement.
          </p>
          <p>
            I enjoy creating solutions that combine clean, responsive UIs with robust backend logic, and I&apos;m always
            exploring new tools in web development, databases, and DevOps. I&apos;m also passionate about sharing
            knowledge with the developer community and building side projects that let me experiment and grow.
          </p>

          <p>I&apos;m open to opportunities where I can contribute, learn, and build impactful products.</p>

          <div
            onMouseOver={() => setSlide(true)}
            onMouseOut={() => setSlide(false)}
            className="relative border border-primary border-opacity-70 overflow-hidden w-40 cursor-pointer rounded-full"
          >
            <Link href="#contact">
              <Button
                type="submit"
                className="rounded-none bg-primary cursor-pointer w-full text-white relative z-20"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        transition={{ delay: 1.2, duration: 0.8 }}
        animate={
          inView
            ? {
                x: [40, 0],
                opacity: [0, 1],
              }
            : ""
        }
        className="hidden lg:flex ml-10 flex-1 2xl:flex-none lg:ml-20 w-[500px]"
      >
        <Image src={developerImage} alt="" className="size-full" />
      </motion.div>
    </section>
  );
}
