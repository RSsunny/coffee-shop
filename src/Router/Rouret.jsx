import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Update from "../Pages/Update/Update";

const Rouret = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/coffees')
            },
            {
                path:"/updates",
                element:<Update></Update>
            }
        ]
    }
])


export default Rouret;