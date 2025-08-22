import { useContext } from "react"
import UIContext from "../contexts/UIContext"

const useUI = () => {
    const context = useContext(UIContext);

    if (!context) {
        throw new Error('useUI is not used within UIContext.Provider')
    }

    return context;
}

export default useUI;