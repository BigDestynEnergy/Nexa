import Topbar from "../Components/Topbar";
import {Outlet} from "react-router-dom";
import "../Styles/Pages.css"
export default function AppLayout(){
  
  return(
    <div className="app-layout">
    <Topbar/>
      <Outlet/>
    </div>
  )
}
