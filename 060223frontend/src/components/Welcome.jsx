import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Welcome1 = () => {
    return (
        <>
            <Container>
                <Breadcrumb>
                    {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item> */}
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>
            {/* </Container>
            <Container className="mb-2"> */}
                <Row>
                    <Col className="mb-2">
                        <Card className="text-center border-0">
                            <Card.Header className="border-0">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="text-center border-0">
                            <Card.Header className="border-0">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="text-center border-0">
                            <Card.Header className="border-0">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                    <Col className="mb-2">
                        <Card className="text-center border-0">
                            <Card.Header className="border-0">Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            {/* </Container>
            <Container className="mb-2"> */}
                <Card className="text-center border-0 mb-2">
                    <Card.Header className="border-0">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                </Card>
            {/* </Container>
            <Container className="mb-2"> */}
                <Card className="text-center border-0 mb-2">
                    <Card.Header className="border-0">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted border-0">2 days ago</Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default Welcome1