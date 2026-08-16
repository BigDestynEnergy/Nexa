import { useState } from "react";
import { LuArrowRight, LuHouse, LuLogOut, LuPlus, LuSettings2, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import "../Create Styles/Topbar.css";
export default function Topbar(){
    const [isSigningOut, setIsSigningOut] = useState(false);

    const topbarNavigators = [
        {name: "Home", key:1, icon: LuHouse, path: "/"},
        {name: "Profile", key: 2, icon: LuUser, path: "/profile"},
        {name: "Settings", key:3, icon: LuSettings2, path: "/settings"},
    ]

    const navigate = useNavigate();


    const signoutButtons = [
        {name: "Add existing account", icon: LuPlus},
        {name: "Sign out", icon: LuArrowRight}
    ]

    return(
        <div className="home-topbar">
           <div className="topbar-buttons">
            {topbarNavigators.map(btn => (
                <NavLink
                key={btn.key}
                className={({isActive}) => isActive ? "active topbar-tab" : "topbar-tab"}
                to={btn.path}>
                    <btn.icon/>
                </NavLink>
            ))}

            <button onClick={()=>setIsSigningOut(!isSigningOut)}
            className="topbar-tab"
            >
                <LuLogOut/>
            </button>

            {isSigningOut && (
                <div className="signout-menu">
                {signoutButtons.map((btn, index) => (
                    <button key={index}>
                           <span>{btn.name}</span>
                        <btn.icon/>
                     
                    </button>
                ))}
            </div>
            )}
           </div>
        </div>
    )
}
