import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decQty, incQty, removeFromCart } from "../redux/CartSlice";
const ItemCard = ({ item, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 hover:text-red-500"
        onClick={() => dispatch(removeFromCart({ id: item.id }))}
      />
      <img src={item.img} className="w-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800 "> {item.name} </h2>
        <div className="flex justify-between ">
          <span>₹ {item.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() => {
                if (qty > 1) {
                  dispatch(decQty({ id: item.id }));
                }
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 translate-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incQty({ id: item.id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 translate-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
