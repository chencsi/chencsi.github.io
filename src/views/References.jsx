import { Briefcase, BriefcaseBusiness, Folder, FolderKanban, Star, User } from "lucide-react";
import useUI from "../hooks/useUI";

function References() {
  const { theme, lang } = useUI();

  const content = {
    h3: "Referenciák",
    references: [
      {
        h4: "Uranus",
        img: "/assets/uranus.jpg",
        badges: [
          "React Native",
          "Expo",
          "Nativewind"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima excepturi, velit odit dolorum sed expedita ducimus commodi reprehenderit, iure consectetur, voluptatem ex consequatur quia dolorem asperiores perspiciatis temporibus voluptas?"
      },
      {
        h4: "Vagy idén vagy soha",
        img: "/assets/vagyidenvagysoha.jpg",
        badges: [
          "React",
          "Vite",
          "MaterialUI",
          "TailwindCSS"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima excepturi, velit odit dolorum sed expedita ducimus commodi reprehenderit, iure consectetur, voluptatem ex consequatur quia dolorem asperiores perspiciatis temporibus voluptas?"
      },
      {
        h4: "Web Task Evaulator (WTE)",
        img: "/assets/wte.jpg",
        badges: [
          "Vue",
          "Pinia",
          "FormKit",
          "Laravel",
          "TailwindCSS"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima excepturi, velit odit dolorum sed expedita ducimus commodi reprehenderit, iure consectetur, voluptatem ex consequatur quia dolorem asperiores perspiciatis temporibus voluptas?"
      },
      {
        h4: "WTE - Chrome Extension",
        img: "/assets/wte.jpg",
        badges: [
          "Vue",
          "Pinia",
          "FormKit",
          "Laravel",
          "TailwindCSS"
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima excepturi, velit odit dolorum sed expedita ducimus commodi reprehenderit, iure consectetur, voluptatem ex consequatur quia dolorem asperiores perspiciatis temporibus voluptas?"
      },
    ]
  }

  return (
    <div className="w-full h-full px-10">
      <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800" : "bg-zinc-100"} p-10 block mx-auto space-y-10 max-w-[1000px] rounded-4xl shadow-xl`}>
        <div className="flex flex-row items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full py-3 px-8 w-fit mx-auto shadow-lg">
          <FolderKanban size="25" />
          <h3
            className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} font-extrabold text-2xl uppercase`}
          >
            Referenciák
          </h3>
        </div>
        <div className="flex flex-col gap-y-10 sm:gap-y-20 min-h-screen">
          {content.references.map((reference, index) => {
            return (
              <div key={reference.img} className={`flex flex-col-reverse ${index % 2 == 0 ? 'sm:flex-row' : "sm:flex-row-reverse"} gap-10`}>
                <img src={reference.img} alt={reference.h4} className="border border-zinc-700 rounded-4xl w-full" />
                <div className="w-full py-5">
                  <h4 className="text-center text-3xl font-bold">{reference.h4}</h4>
                  <div className="flex flex-wrap py-3 justify-center gap-2">
                    {reference.badges.map((item) => {
                      return (
                        <span key={item} class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
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
      </div>
    </div>
  );
}

export default References;