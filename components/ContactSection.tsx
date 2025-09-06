import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactSection() {
  return (
    <section className="mx-10 md:mx-20 lg:mx-40 xl:mx-52 2xl:mx-64 mb-40">
      <div className="flex lg:max-w-[1000px] mx-auto space-x-10">
        <ContactForm />
        <ContactInfoCard />
      </div>
    </section>
  );
}
