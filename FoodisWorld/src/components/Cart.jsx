import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";

const Cart = () => {
  return (
    <>
      <div className="right-0 fixed top-0 w-full lg:w-[20vw] h-full p-5 bg-white">
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold text-xl p-1 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer " />
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className="absolute bottom-0 w-[20vw]">
          <h3 className="font-semibold text-gray-800">Items:</h3>
          <h3 className="font-semibold text-gray-800"> total Amount:</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
