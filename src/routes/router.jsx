import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute";
import EditProfile from "../pages/EditProfile";
import AuthLayout from "../pages/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import FindPartners from "../pages/FindPartners";
import DetailsPage from "../pages/DetailsPage";
import MyConnections from "../pages/MyConnections";
import axios from "axios";
import DashboradLayout from "../layouts/DashboradLayout";
import Overview from "../pages/Overview";
import About from "../pages/About";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";



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

            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/blog",
                element: <PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
            },

            {
                path: "/faq",
                element: <PrivateRoute>
                    <FAQ></FAQ>
                </PrivateRoute>
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
                element: <Overview />
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