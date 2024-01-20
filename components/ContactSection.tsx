interface ContactSectionProps {}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { links } from "./Navbar";
import Link from "next/link";

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <div className="w-full bg-primary p-8 md:p-32 lg:px-60 lg:py-20">
      <h3 className="w-full text-3xl md:text-5xl text-center text-white font-bold mb-10 md:mb-20 font-anton tracking-wide">
        Contact
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full lg:w-[60%] xl:w-[40%] mb-20 md:mb-0">
          <div className="text-xl text-white space-y-4 mb-16">
            <span className="font-bold text-3xl">Connect with me</span>
            <p>
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I&apos;d love to hear from
              you.
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
              <div className="relative border border-white border-opacity-70 overflow-hidden w-40 rounded-none">
                <div className="absolute w-0 hover:w-52 h-20 bg-white "></div>
                <Button
                  type="submit"
                  // className="bg-transparent hover:bg-transparent w-full bg-primary text-white hover:text-primary text-md"
                >
                  <a href="mailTo:jaulkarpranay@gmail.com">Submit</a>
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center  lg:items-end space-y-16 text-center lg:text-end  text-3xl  text-white">
          <div>
            <div className="text-secondary font-anton tracking-wide">Email</div>
            <div className=" text-lg font-normal">jaulkarpranay@gmail.com</div>
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
                  className=" fill-white text-lg font-normal p-2 hover:fill-secondary"
                >
                  <LinkItem.icon className="fill-inherit" width={25} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
