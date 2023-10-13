import { Link } from "react-router-dom";
import bannerImg from "../../assets/Rectangle 2.png"

const Banner = () => {
    return (
        <div className="bg-cover bg-center flex justify-end items-center py-2 h-[500px] object-cover " style={{backgroundImage:`url("${bannerImg}")`}}>
            <div className="md:mr-10 lg:mr-32 px-2">
                <h1 className="md:text-2xl font-bold mb-5">Would you like a Cup of Delicious Coffee?</h1>
                <p className="md:w-[500px] text-xs md:text-base  mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to={'/'} className="px-4 md:px-6 py-2 bg-[#E3B577] text-white hover:bg-transparent hover:border">Learn More</Link>
            </div>
            
        </div>
    );
};

export default Banner;