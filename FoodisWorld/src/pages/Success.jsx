import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="flex flex-col justify-center">
          <h2 className="text-center text-3xl font-semibold mb-2">
            Order Successfull!
          </h2>
          <p>Your order has been successfully placed</p>
          <button
            className=" bg-green-500 p-2  rounded-md hover:bg-green-400 text-white mt-4 active:scale-95"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
