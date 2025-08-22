import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { ThemeProvider } from "@mui/material";
import UIContext from "./contexts/UIContext";
import muiTheme from "./themes/muiTheme";
import { useState } from "react";

function App() {
	const [theme, setTheme] = useState('light');
	const [lang, setLang] = useState('hu');

	const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
	const setLanguage = (newLang) => setLang(newLang);

	const contextValue = {
		theme,
		lang,
		toggleTheme,
		setLanguage
	}

	return (
		<ThemeProvider theme={muiTheme}>
			<UIContext.Provider value={contextValue}>
				<RouterProvider router={routers} />
			</UIContext.Provider>
		</ThemeProvider>
	);
}

export default App;
