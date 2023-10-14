import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

import CoffeeDetailsCard from "../components/Coffee/CoffeeDetailsCard";
import CoffeeAdd from "../Pages/Update/CoffeeAdd";
import CoffeeUpdate from "../Pages/Update/CoffeeUpdate";

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
                path:"/newCoffee",
                element:<CoffeeAdd></CoffeeAdd>
            },
            {
                path:`/coffees/:id`,
                element:<CoffeeDetailsCard></CoffeeDetailsCard>,
                loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<CoffeeUpdate></CoffeeUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    }
])


export default Rouret;