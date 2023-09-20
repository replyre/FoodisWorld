import React from "react";
import Navbar from "../components/Navbar";
import ContentMenu from "../components/ContentMenu";
import Fooditems from "../components/Fooditems";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContentMenu />
      <Fooditems />
    </>
  );
};

export default Home;
