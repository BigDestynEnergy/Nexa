import { createContext, useContext, useState } from "react";

const Context = createContext();

export const SignedInProvider = ({children}) => {
    const [allowed, setAllowed] = useState(()=>{
        const saved = localStorage.getItem("allowed");
        return saved ? JSON.parse(saved) : null;
    })

    const allowUser = (newUser)=>{
        setAllowed(newUser);
        localStorage.setItem("allowed", JSON.stringify(newUser));
    }

    const removeUser = ()=>{
        localStorage.removeItem("allowed");
        setAllowed(null);
    }

    return (
        <Context.Provider value={{allowUser, removeUser, allowed}}>
            {children}
        </Context.Provider>
    )
}
export const useSignedIn = () => useContext(Context)