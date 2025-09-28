import useUI from "../hooks/useUI";
import translations from "../utils/translations";
import { motion } from "framer-motion";

const EducationBox = ({ item, theme }) => {
  return (
    <div
      key={item.h5}
      className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/50"} max-w-sm backdrop-blur-xl py-5 px-5 rounded-2xl flex flex-col items-center gap-1 shadow-xl ${theme === "dark" && "shadow-zinc-950/30"}`}
    >
      <h5 class={`${theme === "dark" ? "text-zinc-50" : "text-zinc-700"} mb-2 text-2xl font-bold`}>
        {item.h5}
      </h5>
      <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} mb-1 text-lg`}>
        {item.p1}
      </p>
      <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}`}>
        {item.p2}
      </p>
    </div>
  );
}

function HomeEducation() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.education;

  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-10"
      >
      </motion.div>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-2 max-w-[1000px] mx-auto px-5 sm:px-0">
        <h3 className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} font-extrabold text-5xl uppercase text-shadow mb-5 text-center`}>
          {content?.h3}
        </h3>

        <div className="flex flex-row gap-5">
          {content?.schools?.map((item) => (
            <EducationBox item={item} theme={theme} />
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default HomeEducation;
