const PrimaryBadgeTitle = ({ title, icon, theme }) => {
  return (
    <div className="flex flex-row gap-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full py-3 px-8 w-fit mx-auto shadow-lg items-center">
      {icon}
      <h3
        className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-700"} font-extrabold text-2xl uppercase`}
      >
        {title}
      </h3>
    </div>
  );
}

export default PrimaryBadgeTitle;