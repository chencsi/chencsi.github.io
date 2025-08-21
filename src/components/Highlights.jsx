function Highlights() {
	return (
		<section className="flex flex-row mx-auto gap-5 md:gap-10">
			<div className="flex flex-col items-center gap-3">
				<div className="bg-blue-500/10 rounded-xl shadow-lg w-10 h-10"></div>
				<div className="text-center">
					<p className="text-lg font-semibold text-white">Első highlight</p>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3">
				<div className="bg-yellow-500/10 rounded-xl shadow-lg w-10 h-10"></div>
				<div className="text-center">
					<p className="text-lg font-semibold text-white">Második highlight</p>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3">
				<div className="bg-green-500/10 rounded-xl shadow-lg w-10 h-10"></div>
				<div className="text-center">
					<p className="text-lg font-semibold text-white">Harmadik highlight</p>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur
					</p>
				</div>
			</div>
		</section>
	);
}

export default Highlights;
