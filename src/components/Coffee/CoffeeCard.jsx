import { useState } from "react";
import { AiOutlineEye,AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";



const CoffeeCard = ({card,coffee,setCoffee}) => {
   
    
    const {_id,chef,name,photo,taste}=card

    const handleDelet=_id=>{
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:"Delete"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const mathchCoffee=coffee.filter(data=>data._id !==_id)
            setCoffee(mathchCoffee)

        })
    }


    return (
        <div className="text-black grid grid-cols-4 gap-10 items-center justify-between bg-[#F5F4F1] p-8">
            <div>
                <img className="h-[150px] w-full" src={photo} alt="" />
            </div>
            <div className="col-span-2 ">
                <h1 className="text-xl font-bold mb-2">Name: {name}</h1>
                <h1 className="text-xl font-bold mb-2">Chef: {chef}</h1>
                <h1 className="text-xl font-bold mb-2"> Taste: {taste}</h1>
            </div>
            <div className="text-white  flex flex-col items-end">
                <Link to={`/coffees/${_id}`}><AiOutlineEye className="bg-[#D2B48C] text-lg w-10 h-8 p-1 my-3 rounded-md cursor-pointer"></AiOutlineEye></Link>
                <Link to={`/update/${_id}`}><BsPencil className="bg-black text-lg w-10 h-8 p-2 my-3 rounded-md cursor-pointer"></BsPencil></Link>
                <AiOutlineDelete onClick={()=>handleDelet(_id)} className="bg-red-500 text-lg w-10 h-8 p-1 my-3 rounded-md cursor-pointer"></AiOutlineDelete>


            </div>
        </div>
    );
};

export default CoffeeCard;