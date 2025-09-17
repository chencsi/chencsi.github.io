import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import useUI from "../../hooks/useUI";

const Layout = () => {
  const { theme } = useUI();

  return (
    <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-900 to-zinc-950" : "bg-gradient-to-br from-slate-100 to-zinc-200"}`}>
      <nav className="w-full overflow-hidden h-25">
        <Navigation />
      </nav>
      <main className="pb-50 mt-5 flex flex-col gap-20 min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
