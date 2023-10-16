import { useLoaderData } from "react-router-dom";
import UserList from "./UserList";
import { useState } from "react";
import bg from "../../assets/Rectangle 2.png";
import bg2 from "../../assets/Rectangle 18 (1).png";

const Users = () => {
  const users = useLoaderData();

  const [user, setUser] = useState(users);

  return (
    <div className="text-black px-2 md:px-5">
      <h1 className="mt-10 text-4xl font-rancho text-center font-bold ">
        our customar{" "}
      </h1>
      <table className="table hidden md:table  max-w-6xl mx-auto px-5 border my-10 text-black">
        {/* head */}
        <thead>
          <tr
            className="bg-cover bg-center  text-white"
            style={{ backgroundImage: `url("${bg}")` }}
          >
            <th className="">Serial</th>
            <th className="text-xs md:text-base">Name</th>
            <th className="text-xs md:text-base">Email</th>
            <th className="text-xs md:text-base">Last Login</th>
            <th className="hidden md:block"></th>
          </tr>
        </thead>
        <tbody
          className="bg-cover bg-center "
          style={{ backgroundImage: `url("${bg2}")` }}
        >
          {user?.map((data, index) => (
            <UserList
              key={data._id}
              user={data}
              totaluser={user}
              setTotaluser={setUser}
              count={index + 1}
            ></UserList>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

// https://i.ibb.co/BCWKgR9/man4.jpg
// https://i.ibb.co/q03YQnV/girl1.jpg
// https://i.ibb.co/2dS12H9/girl2.jpg
// https://i.ibb.co/6WmscJq/girl3.jpg
// https://i.ibb.co/2jmMFM2/man1.jpg
// https://i.ibb.co/P1HGCGZ/man3.jpg
