import useUI from "../../hooks/useUI";
import translations from "../../utils/translations";
import PrimrayButton from "../Elements/PrimaryButton";

function Hero() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.hero;

	return (
		<section
			className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-100" : "bg-white text-zinc-700"} rounded-4xl shadow-xl flex sm:flex-row items-center flex-col-reverse justify-between gap-y-5 sm:gap-10 lg:gap-y-15 py-10 px-3 sm:py-15 sm:px-10 md:px-15 max-w-[600px] md:max-w-[800px] lg:max-w-[900px] mx-auto`}
		>
			<div className="flex flex-col self-center text-center sm:text-left gap-1 sm:gap-2">
				<h1 className="sm:text-left text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-black">
					<span className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">K</span>evin Chen
				</h1>
				<h2
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} text-lg md:text-xl`}
				>
					{content?.h2}
				</h2>
				<p
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"} md:text-lg leading-relaxed`}
				>
					{content?.p}
				</p>
				<PrimrayButton link="/contact">
          {content?.button}
        </PrimrayButton>
			</div>
			<div className="block max-w-50 max-h-50 md:max-w-60 md:max-h-60 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 select-none pointer-events-none shadow-xl">
				<img
					src="/portrait.png"
          loading="lazy"
					alt={content?.imgAlt}
					className="w-full h-full object-cover object-[50%_10%] shadow-lg"
				/>
			</div>
		</section>
	);
}

export default Hero;
