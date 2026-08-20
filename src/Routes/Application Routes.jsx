import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/Landing page";
import Signin from "../Forms/Sign in";
import Signup from "../Forms/Sign up";
import Homepage from "../Pages/Homepage";
import NotFound from "../Components/NotFound";
import CreateBusiness from "../Create Business Pages/CreateBusiness";
import AppLayout from "./Layout"
import Settings from "../Pages/Settings";
import ProtectedRoute from "./Protected Route";
import PublicRoute from "./Public Route";
import BusinessPage from "../Components/ParamRoute";
import SwitchAccount from "../Components/Switch Account";
import ExplorePage from "../public pages/Explore";

export default function ApplicationRouter(){
    return(
        <Routes>
            <Route element={<PublicRoute/>}>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<LandingPage/>}/>
            
            </Route>

            <Route path="/explore" element={<ExplorePage/>}/>
            
           <Route element={<ProtectedRoute/>}>
           <Route element={<AppLayout/>}>
             <Route path="/home" element={<Homepage/>}/>
            <Route path="/create" element={<CreateBusiness/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="accounts" element={<SwitchAccount/>}/>
            </Route>
            <Route path="/nexa/:id" element={<BusinessPage/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
