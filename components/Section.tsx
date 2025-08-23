import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const variants = {
    initialFadeIn: { opacity: 0 },
    fadeIn: { opacity: 1, transition: { duration: 2 } },
  };
  return (
    <motion.section
      className={cn(
        "mx-10 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-64 mb-40",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
