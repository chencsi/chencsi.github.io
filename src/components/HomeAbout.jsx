import translations from "../utils/translations";
import useUI from "../hooks/useUI";

function HomeAbout() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.about;

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="500"
			className="flex flex-col gap-2 max-w-[1000px] mx-auto"
		>
			<h3 className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} font-extrabold text-5xl uppercase text-shadow mb-5`}>
				{content?.h3}
			</h3>
			<p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}>
				{content?.p1}
			</p>
			<p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}>
				{content?.p2}
			</p>
		</div>
	);
}

export default HomeAbout;
