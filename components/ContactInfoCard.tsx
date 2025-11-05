import React from "react";
import Link from "next/link";
import { links } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

export default function ContactInfoCard() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div
			ref={ref}
			className={`flex flex-col space-y-6 text-zinc-300 text-sm transition-all duration-1000 ease-in-out ${
				inView
					? "opacity-100 translate-x-0"
					: "opacity-0 translate-x-[20px]"
			}`}
		>
			<div className="flex flex-col space-y-1">
				<span className="text-secondary text-base">Email</span>
				<div>jaulkarpranay@gmail.com</div>
			</div>
			<div className="flex flex-col space-y-1">
				<span className="text-secondary text-base">Address</span>
				<div>Hudkeshwar, Nagpur, Maharashtra, India</div>
			</div>
			<div className="flex flex-col space-y-2">
				<span className="text-secondary text-base">Social Links</span>
				<div className=" flex space-x-4 items-center">
					{links.map((linkItem, i) => (
						<Link href={linkItem.url} target="_blank" key={i}>
							<div className="hover:scale-125 text-white fill-white  hover:text-[#5be9b9] hover:fill-[#5be9b9] transition-all duration-300">
								<linkItem.icon
									className="fill-inherit"
									width={25}
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
