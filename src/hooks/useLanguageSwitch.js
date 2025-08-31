import { useContext, useCallback } from "react";
import UIContext from "../contexts/UIContext";

export default function useLanguageSwitch() {
	const { lang, setLanguage } = useContext(UIContext);

	const checked = lang === "hu";

	const handleChange = useCallback(
		(e) => setLanguage(e.target.checked ? "hu" : "en"),
		[setLanguage],
	);

	return [checked, handleChange];
}
