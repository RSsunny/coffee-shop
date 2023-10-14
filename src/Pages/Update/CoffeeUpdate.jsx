

import { Link, useLoaderData } from "react-router-dom";
import bgImage from "../../assets/11 3.png"
import Swal from "sweetalert2";

const CoffeeUpdate = () => {
    const coffee=useLoaderData()
    
    const handleUpdate=e=>{
        e.preventDefault()
        const form =e.target
        const name=form.name.value 
        const chef=form.chef.value 
        const supplier=form.supplier.value 
        const taste=form.taste.value 
        const category=form.category.value 
        const details=form.details.value 
        const photo=form.photo.value 
        const updareCoffee={name,chef,supplier,taste,category,details,photo}
        fetch(`http://localhost:5000/coffees/${coffee._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updareCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Update successfully',
                showConfirmButton: false,
                timer: 1500
              })
            
        })

    }
    return (
        <div className="bg-cover bg-center" style={{backgroundImage:`url("${bgImage}")`}}>
        <div className="max-w-7xl mx-auto px-5 text-black "  >
        <div className="py-5 md:py-10">
            <Link to={'/'} className="text-xl text-black font-bold px-4 py-2 hover:bg-[#D2B48C] rounded-md" >Back to home</Link>
        </div>
        <form onSubmit={handleUpdate} className="bg-[#F4F3F0] md:p-16 p-5 mb-10 md:mb-20">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-rancho">Update Existing Coffee Details</h1>
                <p className="lg:w-[700px] mx-auto my-5 text-xs md:text-base">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <div className="md:flex gap-5 justify-center items-center w-full ">
                <label htmlFor="name" className="w-1/2">
                    <h1>Name</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="name" id="" placeholder="Enter coffee name" defaultValue={coffee.name}/>
                </label>
                <label htmlFor="chef" className="w-1/2">
                    <h1>Chef</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="chef" id="" placeholder="Enter coffee chef" defaultValue={coffee.chef}/>
                </label>
                
            </div>
            <div className="md:flex gap-5 justify-center items-center w-full ">
                <label htmlFor="supplier" className="w-1/2">
                    <h1>Supplier</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="supplier" id="" placeholder="Enter coffee supplier" defaultValue={coffee.supplier}/>
                </label>
                <label htmlFor="taste" className="w-1/2">
                    <h1>Taste</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="taste" id="" placeholder="Enter coffee taste" defaultValue={coffee.taste}/>
                </label>
                
            </div>
            <div className="md:flex gap-5 justify-center items-center w-full ">
                <label htmlFor="category" className="w-1/2">
                    <h1>Category</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="category" id="" placeholder="Enter coffee category" defaultValue={coffee.category}/>
                </label>
                <label htmlFor="details" className="w-1/2">
                    <h1>Details</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="details" id="" placeholder="Enter coffee details" defaultValue={coffee.details}/>
                </label>
                
            </div>
            <div className="md:flex  justify-center items-center w-full ">
                <label htmlFor="photo" className="w-full">
                    <h1>Photo</h1>
                    <input className="w-full p-2 my-4 outline-none" type="text" name="photo" id="" placeholder="Enter photo URL" defaultValue={coffee.photo}/>
                </label>  
            </div>
            <div className="bg-[#D2B48C] text-center py-2 font-rancho cursor-pointer mt-5 ">
                <input className="cursor-pointer" type="submit" value="Update Coffee Details" />
            </div>

        </form>

        
        
        </div>
    </div>
    );
};



export default CoffeeUpdate;