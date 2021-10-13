import React from "react";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function HeaderBottom() {
  return (
    <>
      <Navbar
        bg="warning "
        expand="lg"
        variant="light"
        className="headerBottom"
      >
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Container>
          <div className="d-flex justify-content-between w-100p">
            <div>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className=""
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="#features">Features</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="#electronic">Electronic</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="#pages">Pages</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="blog">Blog</Nav.Link>
                <div className="mx-2 p-1 seperator">|</div>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </div>
            <div>
              <div className="todayDeals">
                <Nav.Link href="#todayDeals">TODAY DEALS</Nav.Link>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
export default HeaderBottom;
