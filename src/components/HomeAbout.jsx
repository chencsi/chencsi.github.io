import translations from "../utils/translations";
import useUI from "../hooks/useUI";
import { User } from "lucide-react";
import PrimaryContainer from "./PrimaryContainer";
import PrimaryBadgeTitle from "./PrimaryBadgeTitle";

function HomeAbout() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.about;
  const educationContent = translations[lang]?.pages?.home?.education;


  return (
    <PrimaryContainer theme={theme} aos>
      <PrimaryBadgeTitle
        icon={<User />}
        title={content?.h3}
        theme={theme}
      />
      <div
        dangerouslySetInnerHTML={{ __html: content?.p1 }}
      />
      <p
        className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}
      >
        {content?.p2}
      </p>

      <div className="mt-6 border-l-2 border-blue-400 ml-2 px-6 pt-5 space-y-6">
        <div className="relative">
          <div className="absolute -left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
          <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-100" : "text-black"}`}>
            {content?.education?.school1?.name || "University Name"}
          </h4>
          <p className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm`}>
            {content?.education?.school1?.years || "2018 - 2022"}
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
          <h4 className={`text-lg font-semibold ${theme === "dark" ? "text-zinc-100" : "text-black"}`}>
            {content?.education?.school2?.name || "Another University"}
          </h4>
          <p className={`${theme === "dark" ? "text-zinc-400" : "text-zinc-600"} text-sm`}>
            {content?.education?.school2?.years || "2014 - 2018"}
          </p>
        </div>
      </div>
    </PrimaryContainer>
  );
}

export default HomeAbout;
