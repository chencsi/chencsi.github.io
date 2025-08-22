import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
	return (
		<>
			<nav className="w-full overflow-hidden h-25">
				<Navigation />
			</nav>
			<main className="pt-5 px-3 flex flex-col gap-20 min-h-screen">
				<Outlet />
			</main>
			<footer>
                <Footer />
            </footer>
		</>
	);
};

export default Layout;
