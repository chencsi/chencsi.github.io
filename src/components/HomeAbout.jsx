function HomeAbout() {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="500"
			className="flex flex-col gap-2 max-w-[1000px] mx-auto"
		>
			<h2 className="text-zinc-300 font-extrabold text-5xl uppercase text-shadow mb-5">
				Rólam
			</h2>
			<p>
				A nevem Kevin és {0} éve kezdtem el foglalkozni programozással, azonban a programozás iránti érdeklődésem egészen általános iskolás koromra nyúlik vissza. Azóta abszolút elszánt vagyok iránta. Ez idő alatt egy szoftverfejlesztő és -tesztelő technikusi kézpést végeztem el, most pedig az egyetemi éveim kezdem meg mérnökinformatikus szakon. Eddig számos iskolai és saját projektben vettem részt, ezekre pontosabban a <a href="/references" className="text-blue-400 hover:underline">referenciáknál</a> térek ki.
			</p>
			<p>
				Célom, hogy felhasználóbarát weboldalakat és webalkalmazásokat építsek, amik valós problémákra találnak megoldást. Folyamatosan naprakészen tartom a tudástáram, hogy a legújabb technológiákat használjam.
			</p>
		</div>
	);
}

export default HomeAbout;
