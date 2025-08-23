import useUI from "../hooks/useUI";
import { TabletSmartphone, Code, LayoutDashboard } from "lucide-react";

function Highlights() {
	const { theme } = useUI();

	return (
		<section className="flex flex-row mx-auto gap-5 md:gap-10">
			<div className="flex flex-col items-center gap-3">
				<div className="bg-blue-500/30 rounded-xl shadow-lg p-2">
					<TabletSmartphone size={40}/>
				</div>
				<div className="text-center">
					<p
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						Reszponzív weboldalak
					</p>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						Minden eszközre optimalizált megjelenítés.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3">
				<div className="bg-amber-500/30 rounded-xl shadow-lg p-2">
					<Code size={40}/>
				</div>
				<div className="text-center">
					<p
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						Modern technológiák
					</p>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						React, Angular, Laravel és TailwindCSS
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3">
				<div className="bg-green-500/30 rounded-xl shadow-lg p-2">
					<LayoutDashboard size={40}/>
				</div>
				<div className="text-center">
					<p
						className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
					>
						UI/UX fókusz
					</p>
					<p
						className={`text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
					>
						Letisztult és felhasználóbarát felhasználói élmény.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Highlights;
