import { Link } from "react-router-dom";
import logo from "../../assets/logo1 1.png"
import bgNav from "../../assets/Rectangle 1.png"

const Navbar = () => {
    return (
        <div className="bg-cover bg-center flex justify-between items-center px-5 lg:px-20 py-2 font-rancho" style={{backgroundImage:`url("${bgNav}")`}}>
            <div className="flex gap-2 items-center ">
                <img className="w-12" src={logo} alt="" />
                <h1 className="text-2xl ">Espresso Emporium</h1>
            </div>
            <div>
                <Link to={'/login'} className="text-xl text-[#E3B577]">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;