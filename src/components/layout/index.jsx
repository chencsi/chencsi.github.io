import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import useUI from "../../hooks/useUI";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const { theme } = useUI();
  const [routeChange, setRouteChange] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = theme === "dark"
      ? "linear-gradient(to bottom right, #18181b, #09090b)"
      : "linear-gradient(to bottom right, #f1f5f9, #e5e7eb)";
    return () => { document.body.style.background = ""; };
  }, [theme]);

  useEffect(() => {
    if (routeChange) {
      const timeout = setTimeout(() => {
        navigate(routeChange);
        setRouteChange(null);
        setMenuOpen(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [routeChange, navigate]);

  return (
    <>
      <nav className="w-full overflow-hidden h-25">
        <Navigation onRouteChange={setRouteChange} closeMenu={{setMenuOpen, menuOpen}}  />
      </nav>
      <AnimatePresence mode="wait">
        <motion.main
          key={routeChange || "main"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="pb-50 mt-2 flex flex-col gap-20 min-h-screen"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
