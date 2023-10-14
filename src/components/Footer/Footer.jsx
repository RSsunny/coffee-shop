import footerBg from "../../assets/Rectangle 17.png"

const Footer = () => {
    return (
        <div className="bg-cover bg-center flex justify-center py-2 font-rancho" style={{backgroundImage:`url("${footerBg}")`}}>
            <h1 className="text-xs md:text-xl  py-2 text-center px-2">Copyright Espresso Emporium ! All Rights Reserved</h1>
        </div>
    );
};

export default Footer;