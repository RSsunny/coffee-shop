import { Link, useLoaderData } from "react-router-dom";
import bgDetails from "../../assets/11 3.png"

const CoffeeDetailsCard = () => {
    const coffeeDetails=useLoaderData()
    const {chef,name,photo,taste}=coffeeDetails
   
    return (
        <div className="bg-cover bg-center py-20" style={{backgroundImage:`url("${bgDetails}")`}}>
            <div className="py-5 md:py-10 max-w-7xl mx-auto ">
            <Link to={'/'} className="text-xl text-black font-bold px-4 py-2 hover:bg-[#D2B48C] rounded-md" >Back to home</Link>
        </div>
            <div className="text-black flex justify-center gap-20  items-center p-20 max-w-7xl mx-auto px-5 bg-[#F4F3F0] ">
                <div>
                    <img className="w-80" src={photo} alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-5">Niceties</h1>
                    <h1 className="text-base font-bold mb-1">Name: {name}</h1>
                    <h1 className="text-base font-bold mb-1">Chef: {chef}</h1>
                    <h1 className="text-base font-bold mb-1"> Taste: {taste}</h1>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetailsCard;