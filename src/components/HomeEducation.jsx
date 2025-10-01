import { Book, Braces } from "lucide-react";
import useUI from "../hooks/useUI";
import translations from "../utils/translations";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EducationBox = ({ education, theme }) => {
  return (
    <div
      key={education.h5}
      className={`flex flex-row w-md sm:w-lg items-center`}
    >
      <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/90"} rounded-l-2xl z-10 left-2 h-3/4 flex flex-col justify-center shadow-xl`}>
        <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-700"} text-xl [writing-mode:vertical-lr] rotate-180 font-thin p-1`}>
          {education.p1}
        </p>
      </div>
      <div
        className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/90"} py-5 px-5 rounded-2xl backdrop-blur-xl w-full shadow-xl z-10 min-h-[250px] min-w-[300px]`}
      >
        <h5 className={`${theme === "dark" ? "text-zinc-50" : "text-zinc-700"} mb-2 text-2xl font-bold min-h-15`}>
          {education.h5}
        </h5>
        <p className={`${theme === "dark" ? "text-zinc-300" : "text-zinc-600"}`}>
          {education.p2}
        </p>
        <div className="flex flex-row gap-1 my-1">
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);


  return (
    <section ref={ref} className="relative h-[300vh] p-5 md:p-10 rounded-4xl">
      <motion.div
        className="sticky top-26 sm:top-30 h-[75vh] sm:h-[45rem] max-w-[1400px] mx-auto py-10 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-500 flex flex-col gap-5"
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <motion.div style={{ x }} className="w-[760%] md:w-[500%] lg:w-[4200px] h-full flex gap-20 lg:gap-35">
          <div className="self-center w-[13%] md:w-[20%] lg:w-[30%] xl:w-[30%] flex flex-col items-center gap-5">
            <div className="bg-white/20 rounded-full mx-auto px-8 py-3 text-zinc-100 font-extrabold text-4xl sm:text-4xl uppercase text-shadow text-center flex flex-row gap-2 items-center">
              <Book />
              <h3>{content?.h3}</h3>
            </div>
            <p className="text-zinc-100 text-center max-w-md md:max-w-2xl lg:max-w-4xl px-5 mx-auto text-xl font-semibold">
              {content?.p}
            </p>
          </div>
          <div className="flex flex-row gap-40 px-5 h-full relative">
            {content?.educations?.slice().reverse().map((education, index) => {
              const even = index % 2 == 0;

              return (
                <div key={index} className={`${index === 0 && "ml-10"} flex ${even ? "flex-col-reverse" : "flex-col"} ${even && "justify-start"}`}>
                  <EducationBox education={education} theme={theme} />
                  <div className={`${even ? "-top-20 flex-col" : "-bottom-20 flex-col-reverse"} relative left-1/2 flex`}>
                    <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900" : "bg-white/90"} w-2 h-20 left-0 absolute self-center`} />
                    <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800 to-zinc-900" : "bg-white/90"} w-6 h-6 absolute left-0 -translate-x-1/3 rounded-full z-10`}></div>
                    <p className={`text-2xl font-extrabold -left-5 absolute ${even ? "-top-10" : "-bottom-10"}`}>{education.p1.split("-")[0]}</p>
                  </div>
                </div>
              );
            })}
            <div
              initial={{ width: 0 }}
              className="absolute top-1/2 -translate-y-10 h-20 w-full flex flex-col justify-center"
            >
              <div className={`${theme === "dark" ? "bg-gradient-to-r from-zinc-800/90 to-zinc-900/90" : "bg-white/90"} h-2 w-full rounded-full`} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeEducation;
