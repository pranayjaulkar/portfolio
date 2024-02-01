interface AboutSectionProps {}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div className="h-[380px] md:h-[450px]">
      <div className=" h-full bg-primary flex justify-center ">
        <div className=" top-0 bottom-0 left-0 right-0 flex justify-center flex-col items-center animate-none p-8">
          <h3 className="text-white text-xl md:text-3xl  animation-none font-anton scale-x-110 tracking-wider ">
            Hi, I&apos;m Pranay. Nice to meet you
          </h3>
          <p className="text-white text-md md:text-xl mt-8 max-w-[47rem] text-center animate-none ">
            I&apos;m a self-taught web developer with experience in designing
            new features from ideation to production. I take into consideration
            the user experience while writing reusable and efficient code. I
            passionately combine good design, technology, and innovation in all
            my projects, which I like to accompany from the first idea to
            release. Currently, I&apos;m focused on the backend development.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
