import React from "react";
import PropTypes from "prop-types";
import NavBar from "./../NavBar/NavBar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = (props) => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

Root.propTypes = {};

export default Root;
