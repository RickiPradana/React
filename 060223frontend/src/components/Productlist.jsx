import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

const Productlist = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProducts();
    };

    return (
        <div>
            <Container>
                <Breadcrumb>
                    <NavLink className="me-3 text-decoration-none text-black" to="/dashboard">Home</NavLink>
                    <p className="me-3">/</p>
                    {/* <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item> */}
                    {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item> */}
                    <Breadcrumb.Item className="me-3" active>Products</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="border-0 mb-2">
                    <Card.Header className="border-0"><h3>Featured</h3></Card.Header>
                    <Card.Body className="cardbody">
                        <Card.Title>Special title treatment</Card.Title>
                        <Button className="btn-success btn-sm m-2">
                            <Link to="/products/add" className="text-white text-decoration-none">
                                Add New
                            </Link>
                        </Button>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Created By</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.user.name}</td>
                                        <td className="text-center">
                                            <Button className="btn-warning btn-sm mt-1">
                                                <NavLink
                                                    to={`/products/edit/${product.uuid}`}
                                                    className="text-white text-decoration-none"
                                                >
                                                    Edit
                                                </NavLink>
                                            </Button >
                                            {" "}
                                            <Button className="btn-danger btn-sm mt-1">
                                                <NavLink
                                                    onClick={() => deleteProduct(product.uuid)}
                                                    className="text-white text-decoration-none"
                                                >
                                                    Hapus
                                                </NavLink>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Productlist;
