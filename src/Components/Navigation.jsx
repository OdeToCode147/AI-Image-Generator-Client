import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand mr-auto" to="/">
          <img src={logo} alt="" className="img-fluid w-50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
          <Link style={{ textDecoration: "none" }} to="/new">
            <div
              className=" collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <span className="ml-auto px-2 btn btn-outline-dark">
                Generate an image
              </span>
            </div>
          </Link>
        
      </nav>
    </div>
  );
};

export default Navigation;
