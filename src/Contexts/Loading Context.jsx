import { createContext, useContext, useState } from "react";
import Loading from "../Blocks/Loading";

const Context = createContext();

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    function startLoading (state) {
        setIsLoading(state);
    }

    return(
        <Context.Provider value={{startLoading}}>
            {children}
            <Loading isOpen={isLoading}/>
        </Context.Provider>
    )
}

export const useLoading = () => useContext(Context);