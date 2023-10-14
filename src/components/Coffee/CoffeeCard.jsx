import { AiOutlineEye,AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";



const CoffeeCard = ({card}) => {
    console.log(card);
    const {chef,name,photo,taste}=card



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
                <AiOutlineEye className="bg-[#D2B48C] text-lg w-10 h-8 p-1 my-3 rounded-md cursor-pointer"></AiOutlineEye>
                <BsPencil className="bg-black text-lg w-10 h-8 p-2 my-3 rounded-md cursor-pointer"></BsPencil>
                <AiOutlineDelete className="bg-red-500 text-lg w-10 h-8 p-1 my-3 rounded-md cursor-pointer"></AiOutlineDelete>

            </div>
        </div>
    );
};

export default CoffeeCard;