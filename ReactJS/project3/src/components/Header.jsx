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
          <Navbar.Brand>
            <Link id="link" to="/">
              My Store
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link id="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="link" to="/insert">
                Insert Product
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
