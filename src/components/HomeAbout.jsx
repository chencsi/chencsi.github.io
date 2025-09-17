import translations from "../utils/translations";
import useUI from "../hooks/useUI";
import { User } from "lucide-react";
import PrimaryContainer from "./PrimaryContainer";
import PrimaryBadgeTitle from "./PrimaryBadgeTitle";

function HomeAbout() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.about;

  return (
    <section
      className="flex flex-col items-center"
    >
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
      </PrimaryContainer>
    </section>
  );
}

export default HomeAbout;
