import React from "react";
import Navbar from "../components/Navbar";
import ContentMenu from "../components/ContentMenu";
import Fooditems from "../components/Fooditems";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContentMenu />

      <Fooditems />
      <Cart />
    </>
  );
};

export default Home;
