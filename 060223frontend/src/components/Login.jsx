import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';

const Login1 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    return (
        <div>
            <Container className="mt-5 justify-content-center">
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Card className="text-center">
                            <Card.Header><h1>Form Login</h1></Card.Header>
                            <Card.Body>
                                <Card.Title>Sign In</Card.Title>
                                <Card.Text>
                                    <form onSubmit={Auth}>
                                        {isError && <h4 className="has-text-centered text-danger">{message}</h4>}
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><IoMailOutline /></InputGroup.Text>
                                            <Form.Control
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email"
                                                aria-label="Email"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><IoKeyOutline /></InputGroup.Text>
                                            <Form.Control
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="******"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <div className="d-grid gap-2">
                                            <Button type="submit" variant="primary">
                                                {isLoading ? "Loading..." : "Login"}
                                            </Button>
                                        </div>
                                    </form>

                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login1