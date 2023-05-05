import React, { useEffect, useState, useRef } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
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



  const handleLogout = () =>{
    localStorage.clear();
   navigate('/signIn');
   
  }

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
          <img src="../images/brand 2.png"  className="img-fluid"/>
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
            </Nav.Link> <Nav.Link href="/team" className="text-color fw-bold pe-5">
              Our Team
            </Nav.Link>
           
            <Nav.Link href="/pricing" className="text-color fw-bold">
              Plans
            </Nav.Link>
          </Nav>
         <div className="ms-auto">
         {isLoggedIn == 1 ? (
            <div className="d-flex">
              <Nav.Link as={NavLink} to="/profile">
                <div >
                 
                    <img
                      src="./images/girl.jpg"
                      alt="Profile Image"
                      className="img-fluid img-class"
                    />
        
                </div>
              </Nav.Link>

              <div className="select-wrapper-logout">
              <select
                    type="text"
                    className="form-cells-logout"
                  >
                    <option value="account" hidden >Account</option>
                    <option value="signOut" onClick={handleLogout}>Sign Out</option>
                    
                  </select>
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
