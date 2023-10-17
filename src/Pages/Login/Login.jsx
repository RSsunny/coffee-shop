import { Link } from "react-router-dom";
import logBg from "../../assets/11 3.png";
import logBg2 from "../../assets/Rectangle 18 (1).png";
import useAuth from "../../Hooks/useAuth";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

const Login = () => {
  const { userLogin } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
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
            Login Now...!
          </h1>
          <p className="text-center px-5 my-3 w-3/4 mx-auto">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center items-center  w-1/2 mx-auto py-5 "
          >
            <label htmlFor="name" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3 ">Email:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="email"
                name="email"
                id="21"
                required
              />
            </label>
            <label htmlFor="password" className="w-full px-10">
              <h1 className="text-2xl font-rancho my-3">Password:</h1>
              <input
                className="outline-none  p-3 w-full"
                type="password"
                name="password"
                id="22"
                required
              />
            </label>
            <br />
            <div className="px-10 w-full font-rancho text-2xl ">
              <input
                className="outline-none  p-3 w-full  border hover:bg-[#D2B48C] cursor-pointer"
                type="submit"
                value="Login"
              />
            </div>
            <div className="my-5 flex gap-3 items-center">
              <span className="border-2 border-black w-16"></span>
              <span className="font-rancho text-2xl">Or</span>
              <span className="border-2 border-black w-16"></span>
            </div>

            <div className="flex gap-10 mb-5 text-2xl ">
              <BsFacebook className="hover:scale-125 duration-300 cursor-pointer text-blue-700  "></BsFacebook>
              <FcGoogle className="hover:scale-125 duration-300 cursor-pointer   "></FcGoogle>
              <AiOutlineGithub className="hover:scale-125 duration-300 cursor-pointer   "></AiOutlineGithub>
            </div>

            <h1>
              You have no caccount?{" "}
              <Link to={"/register"} className="text-red-500 font-bold">
                Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
