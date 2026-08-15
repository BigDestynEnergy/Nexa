import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/Landing page";
import Signin from "../Forms/Sign in";
import Signup from "../Forms/Sign up";
import Homepage from "../Pages/Homepage";

export default function ApplicationRouter(){
    return(
        <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<Homepage/>}/>
        </Routes>
    )
}