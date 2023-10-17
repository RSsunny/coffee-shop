import { Link } from "react-router-dom";
import logBg from "../../assets/11 3.png";
import logBg2 from "../../assets/Rectangle 18 (1).png";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const handlesubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.fristName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confPassword = form.confPassword.value;
    const user = { fristName, lastName, email, phone, password, confPassword };

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch(
          "https://coffee-shop-server-2-q6b79vhaz-rabius-sunnys-projects.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="bg-cover bg-center text-black py-10"
      style={{ backgroundImage: `url("${logBg}")` }}
    >
      <div className="py-5 max-w-7xl mx-auto ">
        <Link
          to={"/"}
          className="text-3xl text-black font-rancho px-4 py-2 hover:bg-[#D2B48C] rounded-md"
        >
          Back to home
        </Link>
      </div>
      <div
        className="max-w-7xl mx-auto px-5  flex justify-center items-center py-10 bg-cover bg-center"
        style={{ backgroundImage: `url("${logBg2}")` }}
      >
        <div>
          <h1 className="text-4xl font-rancho text-center my-3">
            Register Now...!
          </h1>
          <p className="text-center px-5 my-3 w-3/4 mx-auto">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <form
            onSubmit={handlesubmite}
            className="flex flex-col justify-center items-center  w-1/2 mx-auto py-5 "
          >
            <label htmlFor="FristName" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3 ">Frist Name:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="text"
                name="fristName"
                id="11"
                required
              />
            </label>
            <label htmlFor="lastName" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3 ">Last Name:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="text"
                name="lastName"
                id="12"
                required
              />
            </label>
            <label htmlFor="email" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3 ">Email:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="text"
                name="email"
                id="13"
                required
              />
            </label>
            <label htmlFor="phone" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3 ">Phone:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="number"
                name="phone"
                id="14"
                required
              />
            </label>
            <label htmlFor="password" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3">Password:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="password"
                name="password"
                id="15"
                required
              />
            </label>
            <label htmlFor="confPassword" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3">Confrim Password:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="password"
                name="confPassword"
                id="16"
                required
              />
            </label>
            <br />
            <div className="px-10 w-full font-rancho text-2xl ">
              <input
                className="outline-none  p-3 w-full  border hover:bg-[#D2B48C] cursor-pointer"
                type="submit"
                value="Register"
              />
            </div>
            <div className="my-5 flex gap-3 items-center">
              <span className="border-2 border-black w-16"></span>
              <span className="font-rancho text-2xl">Or</span>
              <span className="border-2 border-black w-16"></span>
            </div>

            <h1>
              You have a caccount?{" "}
              <Link to={"/login"} className="text-green-500 font-bold">
                Login
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
