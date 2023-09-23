import React from "react";
import FoodCart from "./FoodCart";
import foodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`${name} added to cart`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {foodData
          .filter((item) => {
            return category === "All"
              ? item.name.toLowerCase().includes(search.toLowerCase())
              : item.category === category &&
                  item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => {
            return (
              <FoodCart item={item} key={item.id} handleToast={handleToast} />
            );
          })}
      </div>
    </>
  );
};

export default Fooditems;
