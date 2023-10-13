import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Mainlayout = () => {
    return (
        <div className="text-white">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;