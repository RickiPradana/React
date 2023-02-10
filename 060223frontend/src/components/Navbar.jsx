import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import logo from "../images/KAICommuter.png";
import "../index.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
        <div>
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src={logo}
                                width="112"
                                height="28"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    IT Dev KCI
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <NavLink
                                        className="text-black text-decoration-none me-4 mt-1"
                                        to="/dashboard"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        className="text-black text-decoration-none me-4 mt-1"
                                        to="/products"
                                    >
                                        Product
                                    </NavLink>
                                    <NavLink
                                        className="text-black text-decoration-none me-4 mt-1"
                                        to="/users"
                                    >
                                        User
                                    </NavLink>
                                    {/* <NavDropdown
                                        title="Welcome back ..."
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown> */}
                                    {/* <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 border-0"
                                            aria-label="Search"
                                        />
                                        <Button className="border-0" variant="outline-success">Search</Button>
                                    </Form> */}
                                </Nav>
                                {/* <NavDropdown
                                    className='mt-2 mx-3'
                                    title="Welcome back ..."
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <button onClick={logout} className="bg-transparent border-0">
                                            Logout
                                        </button>
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                                <NavLink className="text-black text-decoration-none me-4 mt-1" to="/dashboard">Welcome back <strong> {user && user.name}</strong></NavLink>
                                <Form className="d-flex">
                                    <button
                                        onClick={logout}
                                        className="bg-transparent border-0"
                                    >
                                        Logout
                                    </button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Header