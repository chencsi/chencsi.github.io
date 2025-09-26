import HomeAbout from "../components/HomeAbout";
import HomeEducation from "../components/HomeEducation";
import HomeHero from "../components/HomeHero";
import HomeHighlights from "../components/HomeHighlights";

function Home() {
	return (
		<div className="h-full flex flex-col gap-y-20 sm:gap-y-34">
			<div className="px-10">
				<HomeHero />
			</div>
			<div className="px-5">
				<HomeHighlights />
			</div>
			<HomeAbout />
			<HomeEducation />
		</div>
	);
}

export default Home;
