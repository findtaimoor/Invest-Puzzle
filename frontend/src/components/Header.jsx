import React, { useEffect, useState, useRef } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {

  const [expanded, setExpanded] = useState(false);
  let isLoggedIn = 0;

  let navigate = useNavigate()
  isLoggedIn = localStorage.getItem('isLoggedIn') != undefined ? localStorage.getItem('isLoggedIn') : 0;

  console.log(isLoggedIn);
  // if (isLoggedIn == 0){
  //  navigate('/singin')
  //  return
  // }
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="header-main  bg-light "
      expanded={expanded}
    >
      <Container className="py-3 ">
        <Navbar.Brand href="/" className=" text-color brand ">
          <img src="../images/brand.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " ref={menuRef} onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link href="/" className="text-color pe-5">
              Home
            </Nav.Link>
            <Nav.Link href="/whatWeDo" className="text-color pe-5">
              What We Do
            </Nav.Link>
            <Nav.Link href="/aboutUs" className="text-color pe-5">
              About Us
            </Nav.Link>
            <Nav.Link href="/pricing" className="text-color">
              Plans
            </Nav.Link>
          </Nav>
          {
            isLoggedIn == 1 ?
              '' :
              <div className="d-flex">
                <Nav.Link as={NavLink} to="/signIn">
                  <Button
                    className=" me-4 btn signUp-button"
                    onClick={() => setExpanded(expanded)}
                  >
                    Sign In
                  </Button>
                </Nav.Link>

                <Nav.Link as={NavLink} to="/registration">
                  <Button className=" me-4  btn signUp-button1" onClick={() => setExpanded(expanded)}>
                    Sign Up
                  </Button>
                </Nav.Link>
              </div>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
