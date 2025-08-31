import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";

function Hero() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.pages?.home?.hero;

	return (
		<section
			className={`${theme === "dark" ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-700"} rounded-xl shadow-lg flex sm:flex-row items-center flex-col-reverse justify-between gap-5 sm:gap-15 py-10 px-5 sm:py-15 sm:px-10 md:px-20 max-w-[600px] md:max-w-[800px] mx-auto`}
		>
			<div className="flex flex-col self-center text-center sm:text-left sm:gap-1">
				<h1 className="sm:text-left text-4xl sm:text-4xl md:text-5xl font-bold">
					{content?.h1}
				</h1>
				<h2
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} text-xl text-md`}
				>
					{content?.h2}
				</h2>
				<p
					className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"} text-sm leading-relaxed`}
				>
					{content?.p}
				</p>
				<Link to={"/contact"}>
					<Button
						sx={{
							mx: { xs: "auto", sm: 0 },
							mr: { xs: "auto", sm: "auto" },
							mt: 2,
							px: 2,
						}}
						variant="contained"
					>
						{content?.button}
					</Button>
				</Link>
			</div>
			<div className="block max-w-50 max-h-50 md:max-w-60 md:max-h-60 overflow-hidden rounded-full bg-blue-400 select-none pointer-events-none shadow-xl">
				<img
					src="/portrait.png"
					alt={content?.imgAlt}
					className="w-full h-full object-cover object-[50%_10%] shadow-lg"
				/>
			</div>
		</section>
	);
}

export default Hero;
