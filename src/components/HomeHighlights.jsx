import useUI from "../hooks/useUI";
import { TabletSmartphone, Code, LayoutDashboard } from "lucide-react";
import translations from "../utils/translations";

function Highlights() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.highlights;

	return (
		<section
			data-aos="fade-up"
			className="flex flex-row flex-wrap justify-center sm:flex-row mx-auto gap-10 sm:gap-5 md:gap-10 max-w-[1000px] min-h-[200px]"
		>
			<div className="flex flex-col items-center gap-3 flex-1 min-w-[150px]">
				{/* <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg p-2"> */}
				<div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg p-2">
					<TabletSmartphone size={40} className="stroke-zinc-50" />
				</div>
				<div className="text-center">
					<h3
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						{content?.blue?.h3}
					</h3>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						{content?.blue?.p}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3 flex-1 min-w-[150px]">
				<div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg p-2">
					<Code size={40} className="stroke-zinc-50" />
				</div>
				<div className="text-center">
					<h3
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						{content?.yellow?.h3}
					</h3>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						{content?.yellow?.p}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3 flex-1 min-w-[150px]">
				<div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg p-2">
				{/* <div className="bg-gradient-to-br from-violet-500 to-purple-600  rounded-xl shadow-lg p-2"> */}
					<LayoutDashboard size={40} className="stroke-zinc-50" />
				</div>
				<div className="text-center">
					<h3
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						{content?.green?.h3}
					</h3>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						{content?.green?.p}
					</p>
				</div>
			</div>
		</section>
	);
}

export default Highlights;
