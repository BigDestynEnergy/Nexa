import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";


 const ProtectedRoute = () => {
    const {user, authLoading} = useAuth();

    if(authLoading){
        return <div>Loading...</div>
    }
    if(!user){
        return <Navigate to="/signin" replace/>
    }

    return <Outlet/>
}

export default ProtectedRoute