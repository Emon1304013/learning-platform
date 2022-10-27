import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Faq from "../pages/Others/Faq";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
               path:'/courses',
               element:<Courses></Courses>,
               loader: ()=> fetch('https://kamals-care-server.vercel.app/courses') 
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params}) => fetch(`https://kamals-care-server.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params}) => fetch(`https://kamals-care-server.vercel.app/checkout/${params.id}`)
            },
            {
                path:'/profile',
                element:<UserProfile></UserProfile>
            }
        ]
    }
])

export default router;