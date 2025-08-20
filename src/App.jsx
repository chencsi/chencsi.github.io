import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={routers} />
		</ThemeProvider>
	);
}

export default App;
