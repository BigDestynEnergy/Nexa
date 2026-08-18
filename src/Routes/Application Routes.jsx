import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/Landing page";
import Signin from "../Forms/Sign in";
import Signup from "../Forms/Sign up";
import Homepage from "../Pages/Homepage";
import NotFound from "../Components/NotFound";
import CreateBusiness from "../Create Business Pages/CreateBusiness";
import AppLayout from "./Layout"
import Settings from "../Pages/Settings";
import Profile from "../Pages/Profile";
import ProtectedRoute from "./Protected Route";
import PublicRoute from "./Public Route";
import BusinessPage from "../Components/ParamRoute";

export default function ApplicationRouter(){
    return(
        <Routes>
            <Route element={<PublicRoute/>}>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<LandingPage/>}/>
            </Route>
            
           <Route element={<ProtectedRoute/>}>
           <Route element={<AppLayout/>}>
             <Route path="/home" element={<Homepage/>}/>
            <Route path="/create" element={<CreateBusiness/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="profile" element={<Profile/>}/>
            </Route>
            <Route path="/nexa/:id" element={<BusinessPage/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
