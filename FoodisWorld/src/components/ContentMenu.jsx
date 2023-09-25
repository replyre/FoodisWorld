import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
const ContentMenu = () => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    let cat = ["All", ...new Set(FoodData.map((food) => food.category))];
    setCategories(cat);
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">What time it is?</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {category.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-500 hover:text-white ${
                selectedCategory === category ? "bg-red-500 text-white" : ""
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentMenu;
