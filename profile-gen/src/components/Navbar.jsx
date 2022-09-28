import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-top">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        <div className="logos">
          <img
            src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-shopping-bag-icon-png-image_695741.jpg"
            alt=""
            width="40px"
            height="40px"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
