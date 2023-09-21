import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
const FoodCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col justify-between">
      <div className="flex flex-col  rounded-lg gap-2">
        <img
          src={item.img}
          className="w-auto h-[138px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />

        <div className="text-sm flex justify-between ">
          <h2 className="w-[150px]">{item.name}</h2>
          <span className="text-green-500 ">₹ {item.price}</span>
        </div>

        <p className="text-sm font-normal">{item.desc.split(".")[0]}.</p>
      </div>
      <div className="flex justify-between  ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {item.rating}
        </span>

        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm "
          onClick={() => {
            dispatch(
              addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                rating: item.rating,
                img: item.img,
                qty: 1,
              })
            );
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
