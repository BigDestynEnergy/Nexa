
import { createContext, useContext, useState } from "react";

const StepsContext = createContext();

export const StepsProvider = ({children}) => {
    const steps = [
        {name: "Basics", path: "/", complete: false, stepNumber: 1},
        {name: "Branding", path: "/branding", complete: false, stepNumber: 2},
        {name: "Contact", path: "/contact", complete: false, stepNumber: 3},
        {name: "Location", path: "/location", complete: false, stepNumber: 4},
        {name: "URL", path: "/url", complete: false, stepNumber: 5},
        {name: "Preview", path: "/preview", complete: false, stepNumber: 6},
    ]

    const [businessForm, setBusinessForm] = useState({
        name:"", category:"", description:"",
        type:"",
    })

    return(
        <StepsContext.Provider value={{steps, businessForm, setBusinessForm }}>
            {children}
        </StepsContext.Provider>
    )


}
export const useSteps = () => useContext(StepsContext);