import React from "react";
import {
    Container,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Badge,
} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="brand">
                        <img
                            src="src/logo.svg"
                            width="42"
                            height="45"
                            className="align-top"
                            alt=""
                        />{''}
                      IGN
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        ></Nav>
                        <Nav.Item>
                            <Nav.Link className="text-dark wt-500" href="#">
                                News
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-dark wt-500"
                                eventKey="link-1"
                            >
                                Videos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark wt-500" href="#">
                                Reviews
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-dark wt-500"
                                eventKey="link-1"
                            >
                                Shows
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="text-dark wt-500"
                                eventKey="link-1"
                            >
                                Wikis
                            </Nav.Link>
                        </Nav.Item>
                        <Button className="wt-500" variant="light">
                            Profile{" "}
                            <Badge className="ml-2" bg="danger">
                                9
                            </Badge>
                        </Button>
                        {/* <Form className="w-500">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
