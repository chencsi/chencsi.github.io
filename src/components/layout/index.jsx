import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import useUI from "../../hooks/useUI";
import { Fab } from "@mui/material";
import { Bot } from "lucide-react";
import GemmaChat from "../GemmaChat";
import { useState } from "react";

const Layout = () => {
	const { theme } = useUI();
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow(!show);
	}

	return (
		<div
			className={`${theme === "dark" ? "bg-gradient-to-tr bg-zinc-800" : "bg-zinc-300"}`}
		>
			<nav className="w-full overflow-hidden h-25">
				<Navigation />
			</nav>
			<main className="pb-50 flex flex-col gap-20 min-h-screen">
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
			<div className="fixed right-5 bottom-5">
				<Fab color="primary" aria-label="add" onClick={() => toggleShow(!show)}>
					<Bot size="30" />
				</Fab>
			</div>
			{show && (
				<div className="bg-black/10 backdrop-blur-2xl z-40 fixed h-screen w-screen top-0 left-0">
					<div className="flex flex-row h-full w-full items-center">
						<div className="w-full">
							<GemmaChat toggleShow={toggleShow} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Layout;
