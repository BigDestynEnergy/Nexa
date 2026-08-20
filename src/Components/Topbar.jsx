import { useEffect, useRef, useState } from "react";
import { LuArrowRight, LuHouse, LuLogOut, LuPlus, LuSettings, LuSettings2, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Layout.css";

import { useLoading } from "../Contexts/Loading Context";
import { useAuth } from "../Contexts/Auth";
export default function Topbar(){
    const [isSigningOut, setIsSigningOut] = useState(false);

    const topbarNavigators = [
        {name: "Home", key:1, icon: LuHouse, path: "/home"},
        {name: "Settings", key:3, icon: LuSettings, path: "/settings"},
    ]

    const outsideClickRef = useRef();

    const navigate = useNavigate();
    const {startLoading} = useLoading();
    const {signOut} = useAuth();


    const signoutButtons = [
        {name: "Switch account", icon: LuPlus, id:1},
        {name: "Sign out", icon: LuArrowRight, id: 2}
    ]

    useEffect(()=>{
        const handleOutsideClick = (e) => {
           if(outsideClickRef.current && 
            !outsideClickRef.current.contains(e.target)){
                setIsSigningOut(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);
         return () => {
        document.removeEventListener("click", handleOutsideClick);
    };
    }, [])


    const signOutControls = (idx) => {
        switch(idx){
            case 1:
                navigate("/accounts");
                setIsSigningOut(false);
                break;
            case 2:
                startLoading(true);
                setIsSigningOut(false);
                setTimeout(()=>{
                    signOut();
                    startLoading(false);
                }, 1600)
        }
    }

    return(
      <header>
         <h2 onClick={()=>navigate("/home")}>NEXA</h2>
           <div className="topbar-buttons">
            {topbarNavigators.map(btn => (
                <NavLink
                key={btn.key}
                className={({isActive}) => isActive ? "active topbar-tab" : "topbar-tab"}
                to={btn.path}>
                    <btn.icon/>
                </NavLink>
            ))}

            <div className="logout-wrapper" ref={outsideClickRef}>
                
            <button onClick={()=>setIsSigningOut(!isSigningOut)}
            className="topbar-tab"
            >
                <LuLogOut/>
            </button>

            {isSigningOut && (
                <div className="signout-overlay">
                    <div className="signout-menu">
                        <div className="line"></div>
                        <h4>Sign out options</h4>
                {signoutButtons.map((btn, index) => (
                    <button key={btn.id}
                    onClick={()=>signOutControls(btn.id)}>
                           <span>{btn.name}</span>
                        <btn.icon/>
                     
                    </button>
                ))}
            </div>
                </div>
            )}
            </div>

           </div>
        
      </header>
    )
}
