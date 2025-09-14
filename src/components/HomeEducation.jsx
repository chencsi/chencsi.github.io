import useUI from "../hooks/useUI";
import translations from "../utils/translations";

function HomeEducation() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.education;

	return (
		<section
			data-aos="fade-up"
			className="flex flex-col gap-2 max-w-[1000px] mx-auto px-5 sm:px-0"
		>
			<h3
				className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} font-extrabold text-5xl uppercase text-shadow mb-5 text-center`}
			>
				{content?.h3}
			</h3>
			<div className="flex flex-row flex-wrap gap-5">
				{content?.schools?.map((item) => (
					<div
						key={item.h5}
						class={`${theme === "dark" ? "bg-zinc-700 border-zinc-800" : "bg-zinc-100 border-zinc-50"} block max-w-[500px] md:max-w-xs lg:max-w-sm min-h-50 p-6 border rounded-lg shadow-md mx-auto`}
					>
						<h5
							class={`${theme === "dark" ? "text-zinc-50" : "text-zinc-700"} mb-2 text-2xl font-bold tracking-tight`}
						>
							{item.h5}
						</h5>
						<p
							className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-1 text-lg`}
						>
							{item.p1}
						</p>
						<p
							className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}`}
						>
							{item.p2}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default HomeEducation;
