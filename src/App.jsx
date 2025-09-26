import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { UIProvider } from "./contexts/UIContext";

function App() {
  return (
    <UIProvider>
      <RouterProvider router={routers} />
    </UIProvider>
  );
}

export default App;
