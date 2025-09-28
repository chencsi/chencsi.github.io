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
        icon={User}
        title={content?.h3}
        theme={theme}
      />
      <div className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-800"} flex flex-col gap-5 md:text-lg font-[500] text-justify`}>
        <p
          dangerouslySetInnerHTML={{ __html: content?.p1 }}
        />
      </div>
    </PrimaryContainer>
  );
}

export default HomeAbout;
