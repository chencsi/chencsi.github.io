import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout";
import NotFound from "./views/NotFound";

export const routers = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
