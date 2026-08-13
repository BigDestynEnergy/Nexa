import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/Landing page";
import NotFound from "../More/NotFound";

export default function ApplicationRouter(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}