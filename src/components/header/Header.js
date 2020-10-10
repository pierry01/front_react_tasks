import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <FontAwesomeIcon icon="check-circle" size="lg" /> Task Finisher
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
