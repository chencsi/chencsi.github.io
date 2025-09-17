import { Briefcase, BriefcaseBusiness, Folder, FolderKanban, Star, User } from "lucide-react";
import useUI from "../hooks/useUI";
import PrimaryContainer from "../components/PrimaryContainer";
import PrimaryBadgeTitle from "../components/PrimaryBadgeTitle";
import translations from "../utils/translations";

function References() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.references;

  return content && (
    <section className="w-full h-full flex flex-col items-center">
      <PrimaryContainer theme={theme}>
        <PrimaryBadgeTitle
          title={content?.h3}
          icon={<FolderKanban />}
          theme={theme}
        />
        <div className="flex flex-col gap-y-10 sm:gap-y-20 min-h-screen">
          {content?.references.map((reference, index) => {
            return (
              <div key={reference.img} className={`flex flex-col-reverse ${index % 2 == 0 ? 'sm:flex-row' : "sm:flex-row-reverse"} gap-10`}>
                <img src={reference.img} alt={reference.h4} className="border border-zinc-700 rounded-4xl w-full" />
                <div className="w-full py-5">
                  <h4 className="text-center text-3xl font-bold">{reference.h4}</h4>
                  <div className="flex flex-wrap py-3 justify-center gap-2">
                    {reference.badges.map((item) => {
                      return (
                        <span key={item} className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                          {item}
                        </span>
                      )
                    })}
                  </div>
                  <p className="text-justify">{reference.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PrimaryContainer>
    </section>
  );
}

export default References;