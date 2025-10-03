import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../src/components/Header/Header";

const Rootlayout = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Rootlayout;
