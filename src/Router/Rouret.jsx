import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

import CoffeeDetailsCard from "../components/Coffee/CoffeeDetailsCard";
import CoffeeAdd from "../Pages/Update/CoffeeAdd";
import CoffeeUpdate from "../Pages/Update/CoffeeUpdate";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Users from "../Pages/User/Users";
import UserProfile from "../Pages/User/UserProfile";
import UserUpdate from "../Pages/User/UserUpdate";

const Rouret = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/coffees"
          ),
      },
      {
        path: "/newCoffee",
        element: <CoffeeAdd></CoffeeAdd>,
      },
      {
        path: `/coffees/:id`,
        element: <CoffeeDetailsCard></CoffeeDetailsCard>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/users"
          ),
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/users/${params.id}`
          ),
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateUsers/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/users/${params.id}`
          ),
        element: <UserUpdate></UserUpdate>,
      },
    ],
  },
]);

export default Rouret;
