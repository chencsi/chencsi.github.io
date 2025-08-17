import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
    return (
        <div className="w-full h-full overflow-hidden">
            <Navigation />
            <div className="p-8">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;