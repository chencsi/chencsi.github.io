import { Link } from "react-router-dom";
import translations from "../../utils/translations";
import useUI from "../../hooks/useUI";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.layout?.footer;
  const pages = translations[lang]?.layout?.nav?.links;
  return (
    <div
      className={`${theme === "dark" ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-300"} p-10 border-t flex flex-col gap-15`}
    >
      <div className="grid grid-cols-3 gap-15 lg:gap-35 max-w-[1200px] mx-auto">
        <h6 className="font-bold text-6xl [writing-mode:vertical-rl] rotate-180"><span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">K</span>evin</h6>
        <div className="space-y-5">
          <h6 className="text-xl font-semibold">{content?.pages}</h6>
          <div className="space-y-4">
            {Array.isArray(pages) && pages.map((tab) => (
              <div key={tab.path} className="relative cursor-pointer">
                <span className="z-20">{tab.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h6 className="text-xl font-semibold">{content?.further}</h6>
          <div className="flex flex-row gap-3">
            <a href={content?.links?.linkedin} target="_blank" className="bg-zinc-500/20 w-fit p-3 cursor-pointer"><Linkedin fill="white" /></a>
            <a href={content?.links?.github} target="_blank" className="bg-zinc-500/20 w-fit p-3"><Github fill="white" /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-zinc-500">{content?.p}</p>
    </div>
  );
}

export default Footer;
