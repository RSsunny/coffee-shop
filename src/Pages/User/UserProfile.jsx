import { Link, useLoaderData } from "react-router-dom";

import bg from "../../assets/11 3.png"

const UserProfile = () => {
    const user=useLoaderData()
    console.log(user);
    const {fristName,lastName,phone,email,photo}=user||{}
    return (
        <div className="text-black bg-cover bg-center py-10" style={{backgroundImage:`url("${bg}")`}}>
             <div className="p-5 max-w-6xl mx-auto ">
            <Link to={'/users'} className="text-3xl text-black font-rancho px-4 py-2 hover:bg-[#D2B48C] rounded-md" >Back to home</Link>
            </div>
            <div className="max-w-6xl mx-auto px-5 flex gap-10">
                <div className="w-72 border p-2 h-[700px] text-center rounded-md">
                    <div>
                        <img className="mx-auto my-2" src={photo} alt="" />
                    </div>
                    <h1>{fristName} {lastName}</h1>
                    <p>{phone}</p>
                    <h2>{email}</h2>
                </div>
                <div className="flex-1 border p-5 rounded-md">
                    <h1>My Profile</h1>
                </div>
            </div>
           
        </div>
    );
};

export default UserProfile;