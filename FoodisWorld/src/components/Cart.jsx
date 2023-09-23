import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { TbShoppingCartOff } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totPrice = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty * item.price,
    0
  );
  // console.log(cartItems);

  return (
    <>
      <div
        className={`right-0 fixed top-0 w-full lg:w-[20vw] h-full p-5 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(false);
            }}
            className="border-2 border-gray-600 text-gray-600 font-bold text-xl p-1 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer "
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ItemCard item={item} key={item.id} qty={item.qty} />
          ))
        ) : (
          <h2 className="text-center text-xl font-bold text-red-700 flex justify-center items-center gap-2 ">
            <TbShoppingCartOff className="text-2xl" /> Empty Cart
          </h2>
        )}

        <div className="absolute bottom-0 w-[20vw]">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => {
              navigate("/success");
            }}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <div>
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 hover:cursor-pointer hover:bg-slate-100 active:bg-green-200 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          }`}
        />
      </div>
    </>
  );
};

export default Cart;
