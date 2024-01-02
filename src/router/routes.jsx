import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/SignUp/Signup";
import NotFound from "../pages/NotFound/NotFound";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/Jobs/JobDetails";
import Favourites from "../pages/Favourite/Favourites";
import PrivateRoutes from "./PrivateRoutes";
import Applies from "../pages/Application/Applies";
import Apply from "../pages/Application/Apply";


const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/jobs',
                    element:<Jobs/>,
                    loader:()=>fetch('http://localhost:9000/jobs'),
                    errorElement:<ErrorPage/>
                },
                {
                    path:"/jobs/:jobid",
                    element:<PrivateRoutes><JobDetails/></PrivateRoutes>,
                    loader:({params})=>fetch(`http://localhost:9000/jobs/${params.jobid}`),
                    errorElement:<ErrorPage/>
                },
                {
                    path:'/favourite',
                    element:<Favourites/>
                },
                {
                    path:'/applies',
                    element:<Applies/>
                },
                {
                    path:'/apply',
                    element:<Apply/>
                },
            ]
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'*',
            element:<NotFound/>
        },
    ]
)

export default routes;