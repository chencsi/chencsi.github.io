const PrimaryBadgeTitle = ({ title, icon: Icon }) => {
  return (
    <div className="flex flex-row gap-2 bg-gradient-to-br from-blue-500 to-indigo-500 text-zinc-100 rounded-full py-3 px-8 w-fit mx-auto shadow-lg items-center">
      <Icon size={24} />
      <h3
        className={"font-extrabold text-xl sm:text-2xl md:text-3xl uppercase"}
      >
        {title}
      </h3>
    </div>
  );
}

export default PrimaryBadgeTitle;