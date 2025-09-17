import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./components/Layout";
import NotFound from "./views/NotFound";
import References from "./views/References";
import Contact from "./views/Contact";

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
        path: "/references",
        element: <References />
      },
      {
        path: "contact",
        element: <Contact />
      },
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
