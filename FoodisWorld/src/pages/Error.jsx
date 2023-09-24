import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-red-200 h-[100vh] flex flex-col justify-center items-center">
      <p className="text-3xl text-red-600"> Error!</p>
      <p className="text-xl text-red-700"> Page not found.</p>
      <button
        className=" bg-green-500 p-2  rounded-md hover:bg-green-400 text-white mt-4 active:scale-95 min-w-[200px]"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Error;
