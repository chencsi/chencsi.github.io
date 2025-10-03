import { useEffect, useState } from "react";
import { motion, scale } from "framer-motion"
import useUI from "../hooks/useUI";

const Bubble = ({ children }) => {
  const { theme } = useUI();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobileView = window.innerWidth < 768;
      if (scrollPosition > 100 && !isMobileView) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: isScrolled ? 0.7 : 1 }}
      animate={{ opacity: isScrolled ? 0.7 : 1 }}
      whileHover={{ opacity: 1 }}
      whileTap={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 shadow-zinc-950/30" : "bg-white/50"} h-16 w-fit backdrop-blur-xl py-2 px-2 rounded-full flex flex-row items-center gap-1 shadow-xl`}>{children}</div>
    </motion.div>
  );
}

export default Bubble;