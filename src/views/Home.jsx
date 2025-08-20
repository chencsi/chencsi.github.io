import Hero from "../components/Hero";
import Highlights from "../components/Highlights";

function Home() {
	return (
		<main className="flex flex-col gap-10">
			<Hero />
            <Highlights />
		</main>
	);
}

export default Home;
