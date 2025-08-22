import { createContext } from "react";

const UIContext = createContext({
	theme: null,
	lang: null,
	toggleTheme: () => {},
	setLang: () => {},
});

export default UIContext;