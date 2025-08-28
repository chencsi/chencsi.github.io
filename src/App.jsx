import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./themes/muiTheme";
import { UIProvider } from "./contexts/UIContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: false,
			mirror: true,
			offset: 100,
			delay: 0,
		})
	}, []);

	return (
		<ThemeProvider theme={muiTheme}>
			<UIProvider>
				<RouterProvider router={routers} />
			</UIProvider>
		</ThemeProvider>
	);
}

export default App;
