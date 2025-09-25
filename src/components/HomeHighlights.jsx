import useUI from "../hooks/useUI";
import { TabletSmartphone, Code, LayoutDashboard } from "lucide-react";
import translations from "../utils/translations";
import HighlightTemplate from "./HighlightTemplate";

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
      data-aos="fade-up"
      className="flex flex-row flex-wrap justify-center sm:flex-row mx-auto gap-y-10 gap-x-5 sm:gap-5 md:gap-10 max-w-[1000px] min-h-[200px]"
    >
      {content?.map((item, index) => {
        return (
          <HighlightTemplate
            title={item.h3}
            text={item.p}
            icon={icons[index]}
            theme={theme}
          />
        );
      })}
    </section>
  );
}

export default Highlights;
