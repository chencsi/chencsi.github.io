import Hero from "../components/Hero";
import Highlights from "../components/Highlights";

function Home() {
	return (
		<main className="flex flex-col gap-20">
			<Hero />
            <Highlights />
		</main>
	);
}

export default Home;
