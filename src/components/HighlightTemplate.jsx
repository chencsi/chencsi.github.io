const HighlightTemplate = ({title, text, icon, theme}) => {
  return (
    <div className="flex flex-col items-center gap-3 flex-1 max-w-[250px] sm:max-w-[350px]">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg p-2">
        {icon}
      </div>
      <div className="text-center">
        <h3
          className={`text-md sm:text-lg font-semibold ${theme === "dark" ? "text-zinc-300" : "text-zinc-800"}`}
        >
          {title}
        </h3>
        <p
          className={`text-sm sm:text-md text-gray-400 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default HighlightTemplate;