import { useContext } from "react"
import UIContext from "../themes/UIContext"

const UseUI = () => {
    const context = useContext(UIContext);

    if (!context) {
        throw new Error('useUI is not used within UIContext.Provider')
    }

    return context;
}

export default UseUI;