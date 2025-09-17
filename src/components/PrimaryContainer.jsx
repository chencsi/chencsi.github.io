const PrimaryContainer = ({ children, theme, aos }) => {
  return (
    <div
      data-aos={aos && "fade-up"}
      className={
        `${theme === "dark" ? "text-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800" : "bg-zinc-100 text-zinc-900"} p-10 flex flex-col gap-5 max-w-[1000px] mx-10 rounded-4xl shadow-xl`}
    >
      {children}
    </div>
  );
}

export default PrimaryContainer;