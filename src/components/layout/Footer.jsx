import { Link } from "react-router-dom";
import translations from "../../utils/translations";
import useUI from "../../hooks/useUI";

function Footer() {
	const { theme, lang } = useUI();
	const content = translations[lang]?.layout?.footer;

	return (
		<div
			className={`${theme === "dark" ? "bg-zinc-950" : "bg-zinc-50"} py-5 flex flex-col gap-5`}
		>
			<p className="text-center text-zinc-500">{content?.p}</p>
		</div>
	);
}

export default Footer;
