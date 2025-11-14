import { use } from "react";
import { useLocation } from "react-router";
import {Loading} from "../pages/Loading";
import { Navigate } from "react-router";
import { AuthContext } from "./provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user,loading } = use(AuthContext);
    const location=useLocation()

    if(loading){
        return <Loading/>;
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>


}

export default PrivateRoute