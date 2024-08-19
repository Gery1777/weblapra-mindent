import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../images/logo.png";

function Navigation() {
  return (
    <Navbar
      bg="light-nav"
      //   data-bs-theme="light"
      fixed="top"
      className={"bg-primary navbar"}
      id="navbar"
      collapseOnSelect
      expand="md"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            style={{
              maxHeight: "40px",
            }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="navigation"
            style={{
              gap: 50,
              // width: "100%",
              // justifyContent: "space-around",
              // alignItems: "center",
            }}
          >
            <Nav.Link href="#about">Rólunk</Nav.Link>
            <Nav.Link href="#services">Kínálatunk</Nav.Link>
            <Nav.Link href="#works">Munkáink</Nav.Link>
            <Nav.Link href="#contact">Kapcsolat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
