import { useLocation, useNavigate } from "react-router-dom";
import "../App Styles/Null.css"
import { GrAndroid } from "react-icons/gr";

export default function NotFound(){
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="not-found">
            <GrAndroid/>
            <h1>Error</h1>
            {location.pathname === '/admin' || location.pathname === "/Admin" ? 
            'Sorry you do not have authorization for this page' :
            `This page "${location.pathname}" doesn't exist`
        }
            <p>Try something else or go <span onClick={()=>navigate('/')} style={{textDecoration:'underline'}}>Home</span></p>
        </div>
    )
}