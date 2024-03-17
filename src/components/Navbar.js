import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  } 
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="uppercase pr-6">profile</button>
          </Link>
          <button className="uppercase bg-red-600 px-6 py-2 rounded cursor-pointer" onClick={handleLogOut}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="uppercase pr-6">login</button>
          </Link>
          <Link to="/signup">
            <button className="uppercase bg-red-600 px-6 py-2 rounded cursor-pointer">
              signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
