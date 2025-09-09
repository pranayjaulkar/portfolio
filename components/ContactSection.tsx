import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-10 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-64 mb-40">
      <div className="flex flex-col md:flex-row lg:max-w-[1000px] mx-auto md:space-x-10">
        <ContactForm />
        <ContactInfoCard />
      </div>
    </section>
  );
}
