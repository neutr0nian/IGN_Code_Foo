import React from "react";
import { Container, Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="brand"><h2>IGN</h2></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll" className="">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="w-500">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
