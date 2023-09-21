import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = ({ item }) => {
  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3">
      <MdDelete className="absolute right-7 hover:text-red-500" />
      <img src={item.img} className="w-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800 "> {item.name} </h2>
        <div className="flex justify-between ">
          <span>₹ {item.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 translate-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 translate-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
