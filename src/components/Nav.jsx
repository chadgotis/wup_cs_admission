import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-2" fixed="top">
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Wesleyan University-Philippines Aurora
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
