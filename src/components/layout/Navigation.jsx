import { Link, useNavigate, useLocation } from "react-router-dom";
import useUI from "../../hooks/useUI";
import { useEffect, useState } from "react";
import translations from "../../utils/translations";
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react";

function Navigation({ onRouteChange }) {
  const { theme, toggleTheme, lang, toggleLang } = useUI();
  const content = translations[lang]?.layout?.nav;
  const [selectedTab, setSelectedTab] = useState();
  const [pendingPath, setPendingPath] = useState(null);
  const location = useLocation();

  console.log('lang:', lang);
  console.log('translations:', translations);
  console.log('content:', content);
  console.log('links:', content?.links);

  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    setSelectedTab(path);
    setPendingPath(path);
    if (onRouteChange) onRouteChange(path);
  };

  const Logo = () => {
    return (
      <Link to="/">
        <h1 className="uppercase flex items-baseline font-black px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500 text-4xl">
            K
          </span>
          <span className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} text-3xl`}>
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
    return <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/50"} h-16 backdrop-blur-xl py-2 px-2 rounded-full flex flex-row items-center gap-1 shadow-xl ${theme === "dark" && "shadow-zinc-950/30"}`}>{children}</div>
  }

  if (!lang || !Array.isArray(content?.links)) {
    return <p className="text-center mt-5">{content?.links.map(item => <p>{item}</p>)}</p>;
  }
  return (
    <div
      id="navigation"
      className="fixed z-50 w-full flex flex-row justify-between px-5 py-5 items-center select-none"
    >
      <div className="flex gap-2">

        <Bubble>
          {Logo()}
        </Bubble>
        <Bubble>
          <motion.button
            className={`${theme === "dark" ? "hover:bg-white/10" : "hover:bg-zinc-400/20"} w-10 h-10 p-2 cursor-pointer hover:bg-white/10 transition-colors duration-300 rounded-full`}
            type="button"
            onClick={() => {
              toggleLang()
            }}
          >
            {lang === "hu" ? <p>HU</p> : <p>EN</p>}
          </motion.button>
          <div className="h-full w-[1px] bg-zinc-500/40 rounded-full mx-1" />
          <motion.button
            className={`${theme === "dark" ? "hover:bg-white/10" : "hover:bg-zinc-400/20"} w-10 h-10  p-2 cursor-pointer transition-colors duration-300 rounded-full`}
            type="button"
            onClick={() => {
              toggleTheme()
            }}
          >
            {theme === "dark" ?
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 400 }}>
                <Moon strokeWidth={1.5} />
              </motion.div> :
              <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 400 }}>
                <Sun strokeWidth={1.5} />
              </motion.div>
            }
          </motion.button>
        </Bubble>
      </div>


      <Bubble>
        {NavItems()}
      </Bubble>
    </div>
  );
}

export default Navigation;
