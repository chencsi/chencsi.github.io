import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import useUI from "../../hooks/useUI";

const Layout = () => {
	const { theme } = useUI();

	return (
		<div className={`${theme === "dark" ? "bg-zinc-800" : "bg-zinc-300"}`}>
			<nav className="w-full overflow-hidden h-25">
				<Navigation />
			</nav>
			<main className="pt-5 px-3 flex flex-col gap-20 min-h-screen">
				<Outlet />
			</main>
			<footer>
                <Footer />
            </footer>
		</div>
	);
};

export default Layout;
