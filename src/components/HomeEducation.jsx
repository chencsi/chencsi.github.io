const data = [
	{
		name: "BMSZC Neumann János Informatikai Technikum",
        time: "2020-2025",
		description:
			"Itt betekintést nyerhettem a Full-Stack fejlesztésbe, adatbázis kezelést és konténerizációt tanultunk.",
	},
	{
		name: "Gábor Dénes Egyetem",
        time: "2025-",
		description:
			"Jelenleg az első félévemet töltöm itt, mérnökinformatikus szakon és izgatottan várom, milyen további skilleket sajátíthatok még itt el.",
	},
];

function HomeEducation() {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="500"
			className="flex flex-col gap-2 max-w-[1000px] mx-auto"
		>
			<h2 className="text-zinc-300 font-extrabold text-5xl uppercase text-shadow mb-5 text-center">
				Tanulmányok
			</h2>
			<div className="flex flex-row flex-wrap gap-5">
				{data.map((item) => (
					<div
						key={item.name}
						class="block max-w-sm min-h-50 p-6 bg-white border border-zinc-200 rounded-lg shadow-sm bg-zinc-700 border-zinc-800"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
							{item.name}
						</h5>
                        <p className="text-zinc-300 mb-1 text-lg">{item.time}</p>
						<p class="font-normal text-zinc-400">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeEducation;
