import { createContext, useContext, useState } from "react";
import Popup from "../Blocks/Popup";

const Context = createContext();

export const PopupProvider = ({children}) => {
    const [pop, setPop] = useState({
        msg:"", icon: 0, isOpen:false
    })

   function notify(icon, msg, timeout = 3000){
    setPop({
        msg, icon, isOpen:true
    })
    setTimeout(() => {
        setPop((prev) => ({...prev, isOpen:false}))
    }, timeout);
   }

   return(
    <Context.Provider value={{notify}}>
        {children}
        <Popup isOpen={pop.isOpen}
        msg={pop.msg}
        icon={pop.icon} />
    </Context.Provider>
   )
}
export const usePopup = ()=> useContext(Context);