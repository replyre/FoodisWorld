import React from "react";
import FoodCart from "./FoodCart";
import foodData from "../data/FoodData.js";

const Fooditems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {foodData.map((item) => {
        return <FoodCart item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Fooditems;
