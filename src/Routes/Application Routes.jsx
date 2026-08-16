import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/Landing page";
import Signin from "../Forms/Sign in";
import Signup from "../Forms/Sign up";
import Homepage from "../Pages/Homepage";
import NotFound from "../Components/NotFound";
import CreateBusiness from "../Create Business Pages/CreateBusiness";
import AppLayout from "./Layout"
export default function ApplicationRouter(){
    return(
        <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<LandingPage/>}/>
           
            <Route element={<AppLayout/>}>
             <Route index element={<Homepage/>}/>
            <Route path="/create" element={<CreateBusiness/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
