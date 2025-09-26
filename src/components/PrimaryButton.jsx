import { Link } from "react-router-dom";

const PrimaryButtonBase = ({ children, theme }) => {
  return (
    <button
      type="button"
      className="mt-2 bg-gradient-to-br from-blue-500 to-indigo-500 px-5 py-1 rounded-lg text-lg text-zinc-50 hover:from-blue-600 hover:to-indigo-600 hover:scale-105 cursor-pointer transition"
    >
      {children}
    </button>
  );
};

const PrimaryButton = ({ children, link }) => {
  if (link !== undefined) {
    return (
      <div>
        <Link to={link}>
          <PrimaryButtonBase>{children}</PrimaryButtonBase>
        </Link>
      </div>
    );
  }
  return <PrimaryButtonBase>{children}</PrimaryButtonBase>;
};

export default PrimaryButton;