import React from "react";
import FoodCart from "./FoodCart";
import foodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";

const Fooditems = () => {
  const handleToast = (name) => toast.success(`${name} added to cart`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {foodData.map((item) => {
          return (
            <FoodCart item={item} key={item.id} handleToast={handleToast} />
          );
        })}
      </div>
    </>
  );
};

export default Fooditems;
