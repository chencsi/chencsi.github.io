import { Link } from "react-router-dom";
import translations from "../../utils/translations";
import useUI from "../../hooks/useUI";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.layout?.footer;
  const pages = translations[lang]?.layout?.nav?.links;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`${theme === "dark" ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-300"} p-5 md:p-10 border-t flex flex-col gap-10 md:gap-15`}
    >
      <div className="grid grid-cols-3 gap-5 md:gap-35 max-w-[1200px] mx-auto">
        <h6 className="place-self-center font-bold text-4xl md:text-6xl [writing-mode:vertical-rl] rotate-180"><span className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-indigo-500">K</span>evin</h6>
        <div className="space-y-5">
          <h6 className="text-lg md:text-xl font-semibold">{content?.pages}</h6>
          <div className="space-y-4">
            {Array.isArray(pages) && pages.map((tab) => (
              <div key={tab.path} className="relative cursor-pointer hover:text-blue-400 transition-[color] duration-300 text-sm sm:text-md">
                <Link to={tab.path} onClick={scrollToTop}>{tab.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h6 className="text-lg md:text-xl font-semibold">{content?.further}</h6>
          <div className="flex flex-row gap-3">
            <a href={content?.links?.linkedin} target="_blank" className="bg-zinc-500/20 w-fit p-2 md:p-3 cursor-pointer hover:bg-zinc-500/30 transition-colors duration-300"><Linkedin fill="white" /></a>
            <a href={content?.links?.github} target="_blank" className="bg-zinc-500/20 w-fit p-2 md:p-3 cursor-pointer hover:bg-zinc-500/30 transition-colors duration-300"><Github fill="white" /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-zinc-500">{content?.p}</p>
    </div>
  );
}

export default Footer;
