import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import Feature from "../../components/feature/Feature";

import Coffees from "../../components/Coffee/Coffees";


const Home = () => {
    const coffeeinfo=useLoaderData()
    
    const title1={
        miniTitle:"--- Sip & Savor ---",
        mainTitle:"Our Popular Products"
    }
    return (
        <>
        <Banner></Banner>
        <Feature></Feature>
        <Title title={title1}></Title>
        <div className="text-center my-5">
        <Link to={'/updates'} className="text-center px-4 py-2 bg-[#E3B577] hover:bg-transparent hover:border hover:text-black font-bold">Add Coffee</Link>
        </div>
        <Coffees coffees={coffeeinfo}></Coffees>
        
        </>
    );
};

export default Home;