import React from "react";
import "./NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <header>
      <Navbar className="header" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><h4><b>Navbar</b></h4></Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav" style={{ marginLeft: "auto" }}>
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-home" style={{ marginRight: "5px" }}></i>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>
                  <img src={gallery} width="20px" className="gallery mb-2" alt="gallery-icon"/>
                  Gallery
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <img src={about} width="20px" className="mb-2" alt="about-icon"/>
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i class="fas fa-phone" style={{ marginRight: "5px" }}></i>
                  ContactUs
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
}
