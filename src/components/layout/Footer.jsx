import { Link } from "react-router-dom";
import navItems from "./navItems";

function Footer() {
	return (
		<div className="h-50 bg-zinc-400/10 py-5 flex flex-col justify-between">
			<ul className="flex flex-row gap-5 justify-center">
				{navItems
					.filter((item) => item.footer === true)
					.map((item) => (
						<li key={item.path}>
							<Link
								to={item.path}
								className="text-gray-400 hover:text-white transition-[color] duration-300"
							>
								{item.title}
							</Link>
						</li>
					))}
			</ul>

			<p className="text-center text-gray-400">
				Kód és design: Kevin Chen 💙 · © 2025
			</p>
		</div>
	);
}

export default Footer;
