import { SKILLS } from "@/lib/utils";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function SkillSection() {
	return (
		<section id="skills" className="mx-4 md:mx-20 mb-80">
			<div className="md:ml-auto max-w-[1000px] xl:mr-28 2xl:mr-48">
				<h3 className="w-full text-center text-3xl md:text-4xl font-semibold text-white mb-10 md:mb-16">
					Technologies
				</h3>
				<div
					className={`grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-8 duration-1000 transition-all `}
				>
					{SKILLS.map((skill) => {
						const { ref: iconRef, inView } = useInView({
							triggerOnce: true,
							threshold: 0.2,
						});
						return (
							<div
								key={skill.name}
								ref={iconRef}
								className={
									"duration-1000 transition-all " +
									(inView
										? "scale-100 opacity-100 translate-x-0"
										: "scale-75 opacity-0 translate-x-[-30px]")
								}
							>
								<div className="flex flex-col space-y-4 items-center">
									<div className="size-14 md:size-16 p-3 md:px-0 flex justify-center items-center bg-slate-800 rounded-full">
										<Image
											src={skill.icon}
											width="35"
											alt=""
										/>
									</div>

									<h4 className="text-center text-xs md:text-sm  min-w-32 px-2 py-0.5 text-zinc-300 drop-shadow-2xl">
										{skill.name}
									</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
