import { Link, useLoaderData } from "react-router-dom";
import logBg from "../../assets/11 3.png";
import logBg2 from "../../assets/Rectangle 18 (1).png";

const UserUpdate = () => {
  const user = useLoaderData();
  const { _id, fristName, lastName, phone, email, photo, country } = user || {};

  const handlesubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.fristName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confPassword = form.confPassword.value;
    const photo = form.photo.value;
    const country = form.country.value;
    const user = {
      fristName,
      lastName,
      email,
      phone,
      password,
      confPassword,
      photo,
      country,
    };
    fetch(
      `https://coffee-shop-server-2-2cz1hiwi4-rabius-sunnys-projects.vercel.app/users/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          to={"/users"}
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
            Update Profile...!
          </h1>
          <p className="text-center px-5 my-3 w-3/4 mx-auto">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <form
            onSubmit={handlesubmite}
            className="flex flex-col justify-center items-center  w-full mx-auto py-5 "
          >
            <div className="flex w-full ">
              <label htmlFor="FristName" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Frist Name:</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="text"
                  name="fristName"
                  id="11"
                  defaultValue={fristName}
                />
              </label>
              <label htmlFor="lastName" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Last Name:</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="text"
                  name="lastName"
                  id="12"
                  defaultValue={lastName}
                />
              </label>
            </div>
            <div className="flex w-full ">
              <label htmlFor="email" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Email:</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="text"
                  name="email"
                  id="13"
                  defaultValue={email}
                />
              </label>
              <label htmlFor="phone" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Phone:</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="number"
                  name="phone"
                  id="14"
                  defaultValue={phone}
                />
              </label>
            </div>
            <div className="flex w-full ">
              <label htmlFor="photo" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Photo URL:</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="text"
                  name="photo"
                  id="18"
                  defaultValue={photo}
                />
              </label>
              <label htmlFor="country" className="w-full px-10">
                <h1 className="text-2xl font-rancho my-3 ">Country</h1>
                <input
                  className="outline-none  p-3 w-full"
                  type="text"
                  name="country"
                  id="19"
                  defaultValue={country}
                />
              </label>
            </div>
            <div className="flex w-full ">
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
            </div>
            <br />

            <div className="px-10 w-full font-rancho text-2xl ">
              <input
                className="outline-none  p-3 w-full  border hover:bg-[#D2B48C] cursor-pointer"
                type="submit"
                value="Update Profile"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
