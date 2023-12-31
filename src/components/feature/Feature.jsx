import icon1 from "../../assets/1 1.png"
import icon2 from "../../assets/2 1.png"
import icon3 from "../../assets/3 1.png"
import icon4 from "../../assets/4 1.png"

const Feature = () => {
    return (
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-5 lg:gap-10 p-5  bg-[#ECEAE3] ">
            <div className="text-black flex space-y-3 flex-col ">
                <img className="w-12" src={icon1} alt="" />
                <h1 className=" font-rancho text-2xl">Awesome Aroma</h1>
                <p className="text-xs  lg:w-44">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="text-black flex space-y-3 flex-col ">
                <img className="w-12" src={icon2} alt="" />
                <h1 className=" font-rancho text-2xl">High Quality</h1>
                <p className="text-xs lg:w-44">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="text-black flex space-y-3 flex-col ">
                <img className="w-12" src={icon3} alt="" />
                <h1 className=" font-rancho text-2xl">Pure Grades</h1>
                <p className="text-xs lg:w-44">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="text-black flex space-y-3 flex-col ">
                <img className="w-12" src={icon4} alt="" />
                <h1 className=" font-rancho text-2xl">Proper Roasting</h1>
                <p className="text-xs lg:w-44">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            
        </div>
    );
};

export default Feature;