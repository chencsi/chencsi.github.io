const PrimaryContainer = ({ children, theme, aos }) => {
  return (
    <div className="mx-5 sm:mx-10">
      <div
        data-aos={aos && "fade-up"}
        className={
          `${theme === "dark" ? "text-zinc-300 bg-gradient-to-br from-zinc-800 to-zinc-900" : "bg-white text-zinc-900"} py-10 px-5 sm:p-10 flex flex-col gap-5 max-w-[1000px] mx-auto rounded-4xl shadow-xl`}
      >
        {children}
      </div>
    </div>
  );
}

export default PrimaryContainer;