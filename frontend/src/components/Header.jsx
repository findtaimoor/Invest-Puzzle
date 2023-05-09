import React, { useEffect, useState, useRef } from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const [expanded, setExpanded] = useState(false);
  let isLoggedIn = 0;

  let navigate = useNavigate();
  isLoggedIn =
    localStorage.getItem("isLoggedIn") != undefined
      ? localStorage.getItem("isLoggedIn")
      : 0;

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
    };
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("isLoggedIn", 0)
    navigate("/signIn");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="header-main  bg-light  "
      expanded={expanded}
    >
      <Container className="px-md-5 px-3" fluid>
        <Navbar.Brand href="/" className=" text-color brand ">
          <div className="brand-img">
            <img src="../images/brand 2.png" className="img-fluid" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
          ref={menuRef}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="text-color fw-bold pe-5">
              Home
            </Nav.Link>
            <Nav.Link href="/whatWeDo" className="text-color fw-bold pe-5">
              What We Do
            </Nav.Link>
            <Nav.Link href="/aboutUs" className="text-color fw-bold pe-5">
              About Us
            </Nav.Link>{" "}
            <Nav.Link href="/team" className="text-color fw-bold pe-5">
              Our Team
            </Nav.Link>
            <Nav.Link href="/pricing" className="text-color fw-bold">
              Plans
            </Nav.Link>
          </Nav>
          <div className="ms-auto">
            {isLoggedIn == 1 ? (
              <div className="d-flex">
                <div className="select-wrapper-logout">
                  <Dropdown className="d-flex ">
                    <Dropdown.Toggle
                      className="d-flex align-items-center border-0 drop-down fw-bold"
                      variant="bg-light"
                    >
                      <div className="pe-4">
                        <img
                          src="./images/profile.png"
                          alt="Profile Image"
                          className="img-fluid img-class"
                        />
                      </div>
                      Account{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item
                        onClick={() => navigate("/profile")}
                        className="NavItem font6"
                      >
                        <img src="./images/profile icon.svg" className="pe-2" />
                        Profile
                      </Dropdown.Item>
                      <hr className="my-1"/>
                      <Dropdown.Item
                        onClick={() => navigate("/profileSettings")}
                        className="NavItem font6"
                      >
                        <img
                          src="./images/settings icon.svg"
                          className="pe-2"
                        />
                        Profile settings
                      </Dropdown.Item>
                      <hr className="my-1"/>

                      <Dropdown.Item onClick={handleLogout} className="NavItem font6">
                        <img src="./images/signout icon.svg" className="pe-2" />
                        Sign out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ) : (
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
                  <Button
                    className=" me-4  btn signUp-button1"
                    onClick={() => setExpanded(expanded)}
                  >
                    Sign Up
                  </Button>
                </Nav.Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
