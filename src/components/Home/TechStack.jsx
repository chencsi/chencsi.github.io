import { Layers } from "lucide-react";
import useUI from "../../hooks/useUI";
import { motion } from "framer-motion";
import translations from "../../utils/translations";
import PrimaryBadgeTitle from "../Elements/PrimaryBadgeTitle";
import { techStackTools } from "../../utils/techStack";

const TechStack = () => {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.techStack;

  return (
    <section className="px-5 md:px-10 space-y-10">
      <PrimaryBadgeTitle icon={Layers} title="Tech Stack" />
      <div className="space-y-2">
        <h4 className="font-black uppercase text-center text-3xl">{content?.h4}</h4>
        <p className="text-zinc-300 text-center">{content?.p}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5 w-fit mx-auto">
        {content?.items.map((item) => (
          <motion.div
            className="max-w-2xs sm:max-w-md bg-zinc-800/40 border border-zinc-800 rounded-2xl overflow-hidden mx-auto select-none"
            whileHover="hover"
            whileTap="hover"
            initial={{ y: 0 }}
            variants={{
              hover: {
                y: -8,
                boxShadow: "0 20px 50px -12px rgba(99, 102, 241, 0.5)",
                border: "1px solid rgba(99, 102, 241, 0.5)"
              }
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="block mx-auto h-2 bg-gradient-to-br from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              variants={{
                hover: { width: "100%" }
              }}
            ></motion.div>
            <div className="p-7 space-y-3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-fit p-3 text-3xl rounded-xl">{item.icon}</div>
              <h5 className="font-black text-2xl sm:text-3xl">{item.name}</h5>
              <p className="text-zinc-300 max-w-sm text-sm sm:text-base">{item.description[lang]}</p>
              <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap text-xs sm:text-sm">
                {item.tags.map((tag) => (
                  <p className="px-3 py-2 rounded-full bg-zinc-800/50 text-zinc-300">{tag}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;