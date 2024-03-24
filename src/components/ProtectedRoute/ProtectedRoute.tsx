import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { useAuth } from "@/contexts/authContext/AuthProvider";

export default function ProtectedRoute() {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
            navigate('/signin', {replace: true});
        } else {
            navigate('/dashboard', {replace: true});
        }
    }, [navigate, user]);

    return <Outlet />;
}