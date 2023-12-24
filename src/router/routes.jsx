import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/SignUp/Signup";
import NotFound from "../pages/NotFound/NotFound";
import Users from "../pages/Users/Users";
import UserDetails from "../pages/Users/userDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";


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
                    path:'/users',
                    element:<PrivateRoutes><Users/></PrivateRoutes>,
                    loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
                    errorElement:<ErrorPage/>
                },
                {
                    path:"/users/:userid",
                    element:<UserDetails/>,
                    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
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