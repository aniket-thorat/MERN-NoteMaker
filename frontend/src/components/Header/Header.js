import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function Header({ setSearch }) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand >
          <Link to = "/">Note Zipper</Link>
          
          
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                 
                />
              </Form>
           
          </Nav>
          <Nav>
            {/* {userInfo ? ( */}
              <>
                <Nav.Link >
                  <Link to="/mynotes">
                  My Notes
                  </Link>
                  </Nav.Link>
                <NavDropdown
                  
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#">
                
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            {/* ) : ( */}
              <Nav.Link href="/login">Login</Nav.Link>
            {/* )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;