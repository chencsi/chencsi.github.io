import { motion } from "framer-motion"

const PrimaryContainer = ({ children, theme }) => {
  
  return (
    <div className="mx-5 sm:mx-10">
      <motion.div
        className={
          `${theme === "dark" ? "text-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-900" : "bg-white text-zinc-900"} py-10 px-5 sm:p-10 flex flex-col gap-5 max-w-[1000px] mx-auto rounded-4xl shadow-xl`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PrimaryContainer;