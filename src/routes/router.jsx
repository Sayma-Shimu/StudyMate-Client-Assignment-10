import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Services from "../pages/Services";
import PrivateRoute from "../components/PrivateRoute";
import EditProfile from "../pages/EditProfile";
// import ServiceCard from "../components/ServiceCard";
import AuthLayout from "../pages/AuthLayout";
import Register from "../pages/Register";
import Forget from "../pages/Forget";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../components/CardDetails";
import FindPartners from "../pages/FindPartners";

import DetailsPage from "../pages/DetailsPage";
import MyConnections from "../pages/MyConnections";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch("http://localhost:3000/partners/top-rated"),
            },
            {
                path: '/find-partners',
                element: <FindPartners />,
                loader: () => fetch('http://localhost:3000/partners').then(res => res.json())
            },

            {
                path: '/services',
                element: <Services />
            },

            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },

            {
                path: '/editprofile',
                element: <PrivateRoute>
                    <EditProfile></EditProfile>
                </PrivateRoute>,
            },
            {
        path: "/details/:id",
        element: <DetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/partners/${params.id}`).then((res) =>
            res.json()
          ),
      },
{
    path:'/my-connections',
    element: 
        <MyConnections/>
   
},

            {
                path: '/service/:id',
                element: <PrivateRoute>
                    {/* <ServiceCard></ServiceCard> */}
                    <CardDetails></CardDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <p>Loading...</p>
            },
        ]
    },

    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,

        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/auth/resetPass",
                element: <Forget></Forget>,
            },
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    }

]);


export default router