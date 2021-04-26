import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const styleLink = {
    fontSize: "18px",
    margin: "5px",
  };
  return (
    <div>
      <Nav as="ul">
        <Link to="/todo" style={styleLink}>
          <li>Todo List</li>
        </Link>
        <Link to="/profile" style={styleLink}>
          <li>Profile</li>
        </Link>
        <Link to="/users" style={styleLink}>
          <li>Users</li>
        </Link>
      </Nav>
    </div>
  );
};

export default Header;
