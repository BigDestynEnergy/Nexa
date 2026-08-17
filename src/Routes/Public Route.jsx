import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/Auth";

const PublicRoute = () => {
    const { user, authLoading } = useAuth();

    if (authLoading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;