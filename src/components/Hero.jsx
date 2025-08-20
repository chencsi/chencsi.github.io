import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();

	return (
		<section className="bg-zinc-900 rounded-xl p-5 shadow-lg flex flex-row justify-between items-center gap-5 p-15 max-w-[800px] mx-auto">
			<div className="flex flex-col items-center">
				<h1 className="text-center text-5xl font-bold">Kevin Chen</h1>
				<h2 className="text-xl md:text-xl text-gray-300 mt-2">
					Frontend fejlesztő hallgató
				</h2>
				<p className="text-gray-400 leading-relaxed">
					Letisztult és felhasználóbarát weboldalakat építek.
				</p>
				<Button sx={{mt: 2}} variant="contained" onClick={() => navigate("/contact")}>
					Kapcsolat
				</Button>
			</div>
			<div className="block w-60 h-60 overflow-hidden rounded-full bg-blue-400 select-none pointer-events-none shadow-xl">
				<img
					src="/portrait.png"
					alt="'Portrait photo'"
					className="w-full h-full object-cover object-[50%_15%] shadow-lg"
				/>
			</div>
		</section>
	);
}

export default Hero;
