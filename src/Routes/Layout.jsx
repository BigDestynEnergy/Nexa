import Topbar from "../Components/Topbar";
import {Outlet} from "react-router-dom";

export default function AppLayout(){
  
  return(
    <div className="app-layout">
    <Topbar/>
      <Outlet/>
    </div>
  )
}
