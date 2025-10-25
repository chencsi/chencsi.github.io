import useUI from "../../hooks/useUI";
import { TabletSmartphone, Code, LayoutDashboard } from "lucide-react";
import translations from "../../utils/translations";
import HighlightTemplate from "../HighlightTemplate";
import {motion} from "framer-motion";

function Highlights() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.highlights;
  const icons = [
    <TabletSmartphone size={40} className="stroke-zinc-50" />,
    <Code size={40} className="stroke-zinc-50" />,
    <LayoutDashboard size={40} className="stroke-zinc-50" />
  ]

  return (
    <section
      className="flex flex-row flex-wrap justify-center sm:flex-row gap-y-10 gap-x-3 sm:gap-5 md:gap-15 max-w-[1200px] mx-auto px-5"
    >
      {content?.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.3,
              bounce: 0.4
            }}
          >
            <HighlightTemplate
              title={item.h3}
              text={item.p}
              icon={icons[index]}
              theme={theme}
            />
          </motion.div>
        );
      })}
    </section>
  );
}

export default Highlights;
