import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const CoffeeCard = ({ card, coffee, setCoffee }) => {
  const { _id, chef, name, photo, taste } = card;

  const handleDelet = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your Coffee has been deleted.",
            "success"
          );

          fetch(
            `https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/coffees/${_id}`,
            {
              method: "Delete",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const mathchCoffee = coffee.filter((data) => data._id !== _id);
              setCoffee(mathchCoffee);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div className="text-black grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-10 items-center justify-between bg-[#F5F4F1] p-3 md:p-8">
      <div>
        <img className="h-[150px] w-full" src={photo} alt="" />
      </div>
      <div className="md:col-span-2 ">
        <h1 className="text-xs md:text-base font-bold mb-2">Name: {name}</h1>
        <h1 className="text-xs md:text-base font-bold mb-2">Chef: {chef}</h1>
        <h1 className="text-xs md:text-base font-bold mb-2"> Taste: {taste}</h1>
      </div>
      <div className="text-white  flex flex-col items-end">
        <Link to={`/coffees/${_id}`}>
          <AiOutlineEye className="bg-[#D2B48C] text-lg w-10 h-8 p-1 my-1 rounded-md cursor-pointer"></AiOutlineEye>
        </Link>
        <Link to={`/update/${_id}`}>
          <BsPencil className="bg-black text-lg w-10 h-8 p-2 my-1 rounded-md cursor-pointer"></BsPencil>
        </Link>
        <AiOutlineDelete
          onClick={() => handleDelet(_id)}
          className="bg-red-500 text-lg w-10 h-8 p-1 my-1 rounded-md cursor-pointer"
        ></AiOutlineDelete>
      </div>
    </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
  card: PropTypes.object.isRequired,
  coffee: PropTypes.array.isRequired,
  setCoffee: PropTypes.func.isRequired,
};
