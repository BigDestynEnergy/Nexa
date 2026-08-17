import { Navigate, Outlet } from "react-router-dom";
import { useSignedIn } from "../Z-Index/SignedIn"

 const ProtectedRoute = () => {
    const {allowed} = useSignedIn();

    if(!allowed) return <Navigate to="/" replace/>
    return <Outlet/>
}

export default ProtectedRoute