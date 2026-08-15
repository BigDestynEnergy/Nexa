import "../Styles/Notfound.css"
import { GrAndroid } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound(){
    const location = useLocation();
    const nav = useNavigate();
    return(
        <div className="not-found">

            <GrAndroid/>
            <h2>Error: 404</h2>
            <p>
                {location.pathname === "Admin" || location.pathname === "admin" ? 
            "Sorry you do not have permission to visit this url" : `This page "${location.pathname}" doesn't exist`
            }.
            </p>
            <p>Try a different URL or go <span className="goto" onClick={()=>nav('/home')}>Home</span></p>

        </div>
    )
}