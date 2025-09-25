import { Link, useNavigate, useLocation } from "react-router-dom";
import useUI from "../../hooks/useUI";
import { useEffect, useState } from "react";
import translations from "../../utils/translations";
import { motion, useCycle } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react";

function Navigation({ onRouteChange, closeMenu }) {
  const { theme, toggleTheme, lang, toggleLang } = useUI();
  const content = translations[lang]?.layout?.nav;
  const [selectedTab, setSelectedTab] = useState();
  const [pendingPath, setPendingPath] = useState(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location]);

  useEffect(() => {
    if (closeMenu.menuOpen === false && isOpen === true) {
      toggleOpen();
    }
  }, [closeMenu.menuOpen, isOpen, toggleOpen])

  const handleClick = (path) => {
    setSelectedTab(path);
    setPendingPath(path);
    if (onRouteChange) onRouteChange(path);
  };

  const Logo = () => {
    return (
      <Link to="/">
        <h1 className="uppercase flex items-baseline font-black w-12 h-12 justify-center pt-[0.25rem] sm:pt-[0.1rem]">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500 text-4xl">
            K
          </span>
          <span className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} text-2xl`}>
            c
          </span>
        </h1>
      </Link>
    )
  }

  const NavItems = () => {
    return Array.isArray(content?.links) && content?.links.map((tab) => (
      <p key={tab.path} className="py-3 px-3 relative cursor-pointer" onClick={() => handleClick(tab.path)}>
        <span className="z-20">{tab.name}</span>
        {selectedTab === tab.path && (
          <motion.div
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            onLayoutAnimationComplete={() => {
              if (pendingPath) {
                setPendingPath(null);
              }
            }}
            className={`${theme === "dark" ? "bg-white/10" : "bg-zinc-400/20"} rounded-full h-full w-full absolute top-0 left-0 z-10`}
          />
        )}
      </p>
    ));
  };

  const Bubble = ({ children }) => {
    return <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/50"} h-16 w-fit backdrop-blur-xl py-2 px-2 rounded-full flex flex-row items-center gap-1 shadow-xl ${theme === "dark" && "shadow-zinc-950/30"}`}>{children}</div>
  }

  if (!lang || !Array.isArray(content?.links)) {
    return <p className="text-center mt-5">{content?.links.map(item => <p>{item}</p>)}</p>;
  }
  return (
    <div
      id="navigation"
      className="fixed z-50 w-full flex flex-row gap-2 justify-between px-5 py-5 items-center select-none"
    >
      <Bubble>
        <Logo />
      </Bubble>

      <Bubble>
        <motion.button
          className={`${theme === "dark" ? "hover:bg-white/10" : "hover:bg-zinc-400/20"} w-10 h-10 p-2 cursor-pointer transition-colors duration-300 rounded-full`}
          type="button"
          onClick={() => {
            toggleLang()
          }}
        >
          {lang === "hu" ? <p>HU</p> : <p>EN</p>}
        </motion.button>
        <div className="h-full w-[1px] bg-zinc-500/40 rounded-full mx-1" />
        <motion.button
          className={`${theme === "dark" ? "hover:bg-white/10" : "hover:bg-zinc-400/20"} w-10 h-10 p-2 cursor-pointer transition-colors duration-300 rounded-full`}
          type="button"
          onClick={() => {
            toggleTheme()
          }}
        >
          {theme === "dark" ?
            <Moon strokeWidth={1.5} /> :
            <Sun strokeWidth={1.5} />
          }
        </motion.button>
      </Bubble>

      <div className="hidden sm:flex flex-1 justify-end">
        <Bubble>
          <NavItems />
        </Bubble>
      </div>

      <motion.div className="flex sm:hidden justify-end">
        <Bubble>
          <motion.button
            className="p-3 cursor-pointer"
            onClick={() => {
              toggleOpen();
              closeMenu.setMenuOpen(true);
            }}
          >
            <Menu />
          </motion.button>
        </Bubble>

        <motion.div
          className={`fixed top-0 right-0 bottom-0 ${theme === "dark" ? "bg-zinc-900/95" : "bg-white/95"} backdrop-blur-md shadow-xl w-full z-50`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 50 }}
          style={{ zIndex: 999 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-end items-center mb-8">
              <motion.button
                className={`${theme === "dark" ? "hover:bg-white/10" : "hover:bg-zinc-400/20"} p-10 rounded-full`}
                onClick={() => toggleOpen()}
              >
                <X />
              </motion.button>
            </div>
            <div className="flex flex-col gap-5 mx-10 items-end">
              <div className="h-[1px] bg-white/10 w-full" />
              {Array.isArray(content?.links) && content?.links.map((tab) => (
                <motion.div
                  key={tab.path}
                  className={`p-3 cursor-pointer rounded-lg w-full relative ${selectedTab === tab.path ? (theme === "dark" ? "bg-white/10" : "bg-zinc-400/20") : ""}`}
                  onClick={() => {
                    handleClick(tab.path);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-end">
                    {tab.name}
                  </p>
                </motion.div>
              ))}
              <div className="h-[1px] bg-white/10 w-full" />
            </div>
          </div>
        </motion.div>

        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleOpen()}
          />
        )}
      </motion.div>
    </div>
  );
}

export default Navigation;
