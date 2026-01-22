import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute";
import EditProfile from "../pages/EditProfile";
import AuthLayout from "../pages/AuthLayout";
import Register from "../pages/Register";
// import Forget from "../pages/Forget";
import ErrorPage from "../pages/ErrorPage";
import FindPartners from "../pages/FindPartners";
import DetailsPage from "../pages/DetailsPage";
import MyConnections from "../pages/MyConnections";
import axios from "axios";
import DashboradLayout from "../layouts/DashboradLayout";
import Overview from "../pages/Overview";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => axios.get("https://study-mates-projects.vercel.app/partners/top-rated")
            },
            {
                path: '/find-partners',
                element: <PrivateRoute>
                    <FindPartners />
                </PrivateRoute>,
                loader: () => axios.get('https://study-mates-projects.vercel.app/partners'),
            },
            {
                path: "/details/:id",
                element: <DetailsPage />,
                loader: async ({ params }) => {
                    const res = await axios.get(`https://study-mates-projects.vercel.app/partners/${params.id}`);
                    return res.data;
                },
            },


            // {
            //     path: '/service/:id',
            //     element: <PrivateRoute>
            //         {/* <ServiceCard></ServiceCard> */}
            //         <CardDetails></CardDetails>
            //     </PrivateRoute>,
            //     hydrateFallbackElement: <p>Loading...</p>
            // },
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
            // {
            //     path: "/auth/resetPass",
            //     element: <Forget></Forget>,
            // },
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    },
    {
        path: "dashboard",
        element: <DashboradLayout />,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
            {
                path: 'editprofile',
                element: <PrivateRoute>
                    <EditProfile></EditProfile>
                </PrivateRoute>,
            },
            {
                path: "overview",
                element: <Overview/>
            },
            {
                path: 'my-connections',
                element:
                    <MyConnections />

            },
        ]
    }

]);


export default router