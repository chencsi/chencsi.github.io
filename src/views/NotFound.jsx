import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const naviate = useNavigate();
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl font-extrabold">Hoppá!</h1>
            <p>Sajnos az általad keresett oldal nem létezik. :(</p>
            <Button variant="contained" onClick={() => naviate("/")}>Vissza a főoldalra</Button>
        </div>
    )
}

export default NotFound;