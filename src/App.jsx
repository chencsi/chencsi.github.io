import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./themes/muiTheme";
import { UIProvider } from "./contexts/UIContext";

function App() {
	return (
		<ThemeProvider theme={muiTheme}>
			<UIProvider>
				<RouterProvider router={routers} />
			</UIProvider>
		</ThemeProvider>
	);
}

export default App;
