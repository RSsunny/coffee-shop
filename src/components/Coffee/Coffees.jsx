import CoffeeCard from "./coffeeCard";

const Coffees = ({coffees,setCoffee}) => {
    

    return (
        <div className="grid grid-cols-2 gap-5 my-10 max-w-7xl mx-auto px-5">
            {
                coffees?.map(data=><CoffeeCard key={data._id} card={data} setCoffee={setCoffee} coffee={coffees}></CoffeeCard>)
            }
        </div>
    );
};

export default Coffees;