import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link id="link">
            <Navbar.Brand>My Store</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link id="link">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link id="link">
              <Nav.Link>Insert Product</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
