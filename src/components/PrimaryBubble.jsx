import useUI from "../hooks/useUI";

const Bubble = ({ children }) => {
  const { theme } = useUI();
  return <div className={`${theme === "dark" ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900/80" : "bg-white/50"} h-16 w-fit backdrop-blur-xl py-2 px-2 rounded-full flex flex-row items-center gap-1 shadow-xl ${theme === "dark" && "shadow-zinc-950/30"}`}>{children}</div>
}

export default Bubble;