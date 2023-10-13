import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const Rouret = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])


export default Rouret;