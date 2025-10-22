import { ArrowRight, ChartNoAxesColumn } from "lucide-react";
import useUI from "../../hooks/useUI";
import { skills } from "../../utils/skills"
import translations from "../../utils/translations";
import PrimaryBadgeTitle from "../Elements/PrimaryBadgeTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProgressBar = ({ skill, index }) => {
  const { theme, lang } = useUI();

  function formatExperienceYears(years) {
    if (years == null) return '';
    const totalMonths = Math.round(years * 12);
    if (totalMonths <= 0) return 'kezdő';
    if (totalMonths < 6) {
      return `${totalMonths} hónap`;
    }
    const yearsWhole = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    if (yearsWhole === 0) {
      return months === 6 ? '6 hónap' : `${months} hónap`;
    }
    if (months === 0) return `${yearsWhole} év`;
    if (months === 6) return `${yearsWhole} év 6 hónap`;
    return `${yearsWhole} év ${months} hónap`;
  }

  return (
    <div className="mb-6">
      <p className="font-bold" id={`skill-${skill.id}-label`}>
        {typeof skill.name === 'object' ? skill.name[lang] : skill.name}
      </p>

      <div
        className="relative w-full bg-zinc-300/30 mt-1 rounded-full h-10 overflow-hidden shadow"
        role="progressbar"
        aria-labelledby={`skill-${skill.id}-label`}
        aria-valuenow={skill.value ?? 0}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          transition={{ delay: (index + 1) / 10, type: "spring", damping: 15 }}
          style={{ minWidth: "1%" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-start px-2 pointer-events-none">
          <span
            className="text-sm font-semibold text-white bg-black/30 px-3 py-1 rounded-full"
            aria-live="polite"
          >
            {skill.value}% - {formatExperienceYears(skill.years)}
          </span>
        </div>
      </div>
    </div>
  );
};

const HomeSkills = () => {
  const { theme, lang } = useUI();
  const content = translations[lang]?.pages?.home?.skills;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className="space-y-10 py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, staggerChildren: 0.1 }}

    >
      <PrimaryBadgeTitle
        title={content?.h3}
        icon={ChartNoAxesColumn}
        theme={theme}
      />
      <div
        className="grid grid-cols-1 lg:grid-cols-2 px-10 md:px-15 gap-10 max-w-[1200px] mx-auto"
      >
        <div className="space-y-5">
          <h4 className="font-black uppercase text-center text-2xl">{content?.coding}</h4>
          <div className="rounded-xl border border-zinc-400/30 p-5 max-w-xl mx-auto lg:mx-none">
            <div className="space-y-3">
              {skills?.coding.slice().sort((a, b) => b.value - a.value).map((skill, index) => (
                <ProgressBar key={skill.id} index={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h4 className="font-black uppercase text-center text-2xl">{content?.professional}</h4>
          <div className="rounded-xl border border-zinc-500/30 p-5 max-w-xl mx-auto lg:mx-none">
            <div className="space-y-3">
              {skills?.professional.slice().sort((a, b) => b.value - a.value).map((skill, index) => (
                <ProgressBar key={skill.id} index={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[250px] sm:max-w-lg lg:max-w-[1000px] mx-auto flex flex-row justify-end">
        <Link
          to="/references"
          onClick={scrollToTop}
          className="text-blue-400 hover:text-blue-500 transition-[color] duration-300 flex">
          <span>Tovább a referenciákhoz</span>
          <ArrowRight size="26" />
        </Link>
      </div>
    </motion.div>
  );
}

export default HomeSkills;