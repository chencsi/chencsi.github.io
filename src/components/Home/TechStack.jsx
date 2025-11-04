import { Layers } from "lucide-react";
import useUI from "../../hooks/useUI";
import { motion } from "framer-motion";
import PrimaryBadgeTitle from "../Elements/PrimaryBadgeTitle";

const TechStack = () => {
  const { theme, lang } = useUI();

  const techStackTools = [
    {
      id: 1,
      icon: '💻',
      name: 'VS Code',
      description: 'My primary code editor with custom extensions and themes for optimal productivity',
      tags: ['Editor', 'Daily']
    },
    {
      id: 2,
      icon: '🎨',
      name: 'Figma',
      description: 'Design and prototype user interfaces before diving into code',
      tags: ['Design', 'UI/UX']
    },
    {
      id: 3,
      icon: '🔀',
      name: 'Git & GitHub',
      description: 'Version control and collaboration platform for all my projects',
      tags: ['VCS', 'Essential']
    },
    {
      id: 4,
      icon: '⚡',
      name: 'Vite',
      description: 'Lightning-fast build tool for modern web development workflows',
      tags: ['Build Tool', 'Fast']
    },
    {
      id: 5,
      icon: '🐳',
      name: 'Docker',
      description: 'Containerization for consistent development and deployment environments',
      tags: ['DevOps', 'Container']
    },
    {
      id: 6,
      icon: '🖥️',
      name: 'Linux',
      description: 'Primary development environment for powerful command-line workflows',
      tags: ['OS', 'Terminal']
    }
  ];

  return (
    <section className="px-5 space-y-10">
      <PrimaryBadgeTitle icon={Layers} title="Tech Stack" />
      <h4 className="font-black uppercase text-center text-3xl">Tools & Technologies</h4>
      <div className="grid grid-cols-2 gap-5">
        {techStackTools.map((item) => (
          <motion.div
            className="p-4 max-w-md bg-zinc-800 rounded-2xl"
          >
            <h5 className="font-black">{item.name}</h5>
            <p>{item.description}</p>
            <div className="flex flex-row gap-x-2 gap-y-3 flex-wrap">
              {item.tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;