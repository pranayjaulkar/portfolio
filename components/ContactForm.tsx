import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ContactForm() {
  const [slide, setSlide] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;

    window.location.href = `mailto:jaulkarpranay@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

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
            <p className="text-sm text-zinc-300">
              If you want to know more about me or my work, or if you would just like to say hello, send me a message.
              I&apos;d love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="text-zinc-300 text-sm space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  rows={5}
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-tertiary outline-none border border-gray-700 rounded-lg "
                />
              </div>
            </div>

            <div
              onMouseOver={() => setSlide(true)}
              onMouseOut={() => setSlide(false)}
              className="relative border border-primary border-opacity-70 overflow-hidden w-40 cursor-pointer rounded-full"
            >
              <Button
                type="submit"
                className="rounded-none bg-primary cursor-pointer w-full text-white relative z-20"
              >
                Contact
              </Button>{" "}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
