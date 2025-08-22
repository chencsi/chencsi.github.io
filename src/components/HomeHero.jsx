import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();

	return (
		<section className="bg-zinc-900 rounded-xl shadow-lg flex sm:flex-row items-center flex-col-reverse justify-between gap-5 sm:gap-15 py-10 px-5 sm:py-15 sm:px-10 md:px-20 max-w-[600px] md:max-w-[800px] mx-auto">
			<div className="flex flex-col self-center text-center sm:text-left sm:gap-1">
				<h1 className="sm:text-left text-4xl sm:text-4xl md:text-5xl font-bold">
					Kevin Chen
				</h1>
				<h2 className="text-xl text-md text-gray-300">
					Frontend fejlesztő hallgató
				</h2>
				<p className="text-sm text-gray-400 leading-relaxed">
					Letisztult és felhasználóbarát weboldalakat építek.
				</p>
				<Button
					sx={{
						mx: { xs: "auto", sm: 0 },
						mr: { xs: "auto", sm: "auto" },
						mt: 2,
						px: 2,
					}}
					variant="contained"
					onClick={() => navigate("/contact")}
				>
					Kapcsolat
				</Button>
			</div>
			<div className="block max-w-50 max-h-50 md:max-w-60 md:max-h-60 overflow-hidden rounded-full bg-blue-400 select-none pointer-events-none shadow-xl">
				<img
					src="/portrait.png"
					alt="'Portrait photo'"
					className="w-full h-full object-cover object-[50%_10%] shadow-lg"
				/>
			</div>
		</section>
	);
}

export default Hero;
