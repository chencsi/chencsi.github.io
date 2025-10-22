import { Book, Braces } from "lucide-react";
import useUI from "../../hooks/useUI";
import translations from "../../utils/translations";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EducationBox = ({ education, theme }) => {
  const backgroundColor = theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/90";

  return (
    <div
      key={education.h5}
      className={`flex flex-row h-full w-full`}
    >
      <div className={`${backgroundColor} rounded-l-2xl z-10 left-2 h-2/3 flex flex-col justify-center self-center shadow-xl`}>
        <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} sm:text-xl [writing-mode:vertical-lr] rotate-180 font-thin p-1`}>
          {education.p1}
        </p>
      </div>
      <div
        className={`${backgroundColor} flex flex-col gap-1 sm:gap-2 pt-3 sm:pt-4 px-4 rounded-2xl backdrop-blur-xl w-full shadow-xl z-10 sm:min-h-[200px]`}
      >
        <h5 className={`${theme === "dark" ? "text-zinc-50" : "text-zinc-700"} text-lg sm:text-2xl font-bold`}>
          {education.h5}
        </h5>
        <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"} text-sm`}>
          {education.p2}
        </p>
        <div className="flex flex-row gap-1">
          {education?.badges?.map((badge) => {
            return (
              <span key={badge} className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                {badge}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  );
}

function HomeEducation() {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.education;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const firstBox = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const secondBox = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const backgroundColor = theme === "dark" ? "bg-gradient-to-r from-slate-800 via-zinc-800 to-slate-800" : "bg-white/90";

  return (
    <section ref={ref} className="relative h-[500vh] md:h-[300vw] px-2 rounded-4xl">
      <motion.div
        className="sticky top-26 sm:top-30 h-[36rem] sm:h-[40rem] max-w-[1400px] rounded-3xl shadow-xl mx-auto overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-500 flex flex-row gap-x-65 sm:gap-x-5"
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <motion.div style={{ x: firstBox }} className="w-full h-full flex flex-row">
          <div className="w-[94vw] sm:w-[90vw] self-center flex flex-col items-center gap-5">
            <div className="bg-white/20 rounded-full mx-auto px-8 py-3 text-zinc-100 font-extrabold uppercase text-shadow text-center flex flex-row gap-2 items-center">
              <Book />
              <h3 className="text-2xl sm:text-4xl">{content?.h3}</h3>
            </div>
            <p className="text-zinc-100 text-center max-w-md md:max-w-2xl lg:max-w-4xl px-5 mx-auto sm:text-xl font-semibold">
              {content?.p}
            </p>
          </div>
        </motion.div>
        <motion.div style={{ x: secondBox }} className="min-w-[1700px] sm:min-w-[1900px] sm:max-w-[4600px] h-full flexpr-20">

          <div className="flex flex-row px-20 h-full py-5">
            {content?.educations?.slice().reverse().map((education, index) => {

              const educations = content?.educations;
              const even = index % 2 == 0;
              const first = index === 0;
              const last = index === educations?.length - 1;

              return (
                <div key={index} className={`flex ${even ? "flex-row" : "flex-row"} ${even && "justify-start"}`}>
                  <div className={`flex ${!even ? "flex-col-reverse" : "flex-col"}`}>
                    <div className="h-full" />
                    <div className="grid grid-cols-3 grid-rows-[1fr_0fr_1fr] h-full items-center text-center">
                      {
                        !even &&
                        <div className={`col-start-2 h-full w-2 mx-auto ${backgroundColor}`}></div>
                      }
                      <div className={`row-start-2 col-span-3 w-full h-2 relative ${backgroundColor} ${first && "rounded-l-full"} ${last && "rounded-r-full"}`}>
                        <div className={`absolute w-6 h-6 rounded-full left-1/2 -translate-x-1/2 -translate-y-1/3 ${backgroundColor}`}></div>
                      </div>
                      {
                        even &&
                        <div className={`col-start-2 row-start-3 h-full w-2 mx-auto ${backgroundColor}`}></div>
                      }
                    </div>
                    <div className="h-full max-w-sm sm:max-w-lg ">
                      <EducationBox education={education} theme={theme} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeEducation;
