import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrimaryButtonBase = ({ children, theme }) => {
  return (
    <motion.button
      type="button"
      className="mt-2 bg-gradient-to-br from-blue-500 to-indigo-500 px-5 py-1 rounded-lg text-lg text-zinc-50 cursor-pointer"
      style={{
        transition: "all 0.2s",
      }}
      whileHover={{
        scale: 1.05,
        background: "linear-gradient(to bottom right, rgb(37, 99, 235), rgb(79, 70, 229))"
      }}
      animate={{
        scale: 1
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20
      }}
    >
      {children}
    </motion.button>
  );
};

const PrimaryButton = ({ children, link }) => {
  if (link !== undefined) {
    return (
      <Link to={link}>
        <PrimaryButtonBase>{children}</PrimaryButtonBase>
      </Link>
    );
  }
  return <PrimaryButtonBase>{children}</PrimaryButtonBase>;
};

export default PrimaryButton;