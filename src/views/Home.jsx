import HomeAbout from "../components/HomeAbout";
import HomeHero from "../components/HomeHero";
import HomeHighlights from "../components/HomeHighlights";

function Home() {
	return (
		<div className="h-full flex flex-col gap-y-34">
			<HomeHero />
			<HomeHighlights />
			<HomeAbout />
		</div>
	);
}

export default Home;
