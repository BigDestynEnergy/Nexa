import "../App Styles/Null.css"
import { LuCircleCheck, LuTriangleAlert } from "react-icons/lu";

export default function Popup({isOpen, msg,icon}){
   
    if(!isOpen) return null;
    return(
        <div className="popup-overlay">
            <div className="card">
               {icon === 1 &&  <LuTriangleAlert style={{color:"var(--nexa-warning)"}} />}
                {icon === 2 && <LuCircleCheck style={{color:"var(--nexa-success)"}} />}
                <div className="msg">{msg}</div>
            </div>
        </div>
    )
}