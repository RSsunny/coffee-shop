
import { BsPencil} from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEye} from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';




const UserList = ({user,totaluser,setTotaluser,count}) => {
    
    const {_id,fristName,lastName,email,photo,country}=user||{}
    
   

    const handledelete=(_id)=>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            
            const remaining=totaluser.filter(data=>data._id!==_id)
            setTotaluser(remaining)
            console.log(data);
            
        })
    }
    
    return (
        <tr>
            <th className="hidden md:block text-center">
                {count}
            </th>
                <td className="border">
                <div className="flex items-center space-x-3">
                <div className="avatar hidden md:block">
                <div className="mask mask-squircle w-12 h-12 ">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className=" text-xs md:text-base ">{fristName} {lastName}</div>
                <div className="text-sm opacity-50 hidden md:block">{country}</div>
                </div>
                </div>
                </td>
                <td className="text-xs md:text-base  border">
                    {email}
                </td>
                <td className="">Purple</td>
                <th className="hidden md:block">
                    <div className="flex items-center justify-center gap-5 text-xl">
                        <Link to={`/users/${_id}`}>
                        <FaEye className="hover:bg-[#E3B577] w-8 h-8 p-1 rounded-full cursor-pointer"></FaEye>
                        </Link>
                        <Link to={`/updateUsers/${_id}`}><BsPencil className="hover:bg-[#015309] hover:text-white w-8 h-8 p-1 rounded-full cursor-pointer"></BsPencil></Link>
                        <RiDeleteBinLine onClick={()=>handledelete(_id)} className="hover:bg-[#841111] w-8 h-8 p-1 rounded-full hover:text-white cursor-pointer"></RiDeleteBinLine>
                    </div>

                </th>
            </tr>
    );
};

export default UserList;


UserList.propTypes={
    user:PropTypes.object.isRequired,
    totaluser:PropTypes.array.isRequired,
    setTotaluser:PropTypes.func.isRequired,
    count:PropTypes.number.isRequired

}