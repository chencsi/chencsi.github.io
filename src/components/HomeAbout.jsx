import translations from "../utils/translations";
import useUI from "../hooks/useUI";
import { User } from "lucide-react";

function HomeAbout() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.about;

	return (
		<section
		className="flex flex-col items-center"
		>
			<div
				data-aos="fade-up"
				className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800" : "bg-zinc-100"} p-10 flex flex-col gap-5 max-w-[1000px] mx-10 rounded-4xl shadow-xl`}
			>
				<div className="flex flex-row gap-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full py-3 px-8 w-fit mx-auto shadow-lg">
					<User size="25" className="self-center" />
					<h3
						className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} font-extrabold text-2xl uppercase`}
					>
						{content?.h3}
					</h3>
				</div>
				<div
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: content?.p1 }}
				/>
				<p
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}
				>
					{content?.p2}
				</p>
			</div>
		</section>
	);
}

export default HomeAbout;
