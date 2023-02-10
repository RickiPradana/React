import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

const Userlist = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };

    return (
        <div>
            <Container>
                <Breadcrumb>
                    <NavLink className="me-3 text-decoration-none text-black" to="/dashboard">Home</NavLink>
                    <p className="me-3">/</p>
                    <NavLink className="me-3 text-decoration-none text-black" to="/products">Products</NavLink>
                    <p className="me-3">/</p>
                    {/* <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item> */}
                    {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item> */}
                    <Breadcrumb.Item className="me-3" active>Users</Breadcrumb.Item>
                </Breadcrumb>
                <Card className="border-0 mb-2">
                    <Card.Header className="border-0"><h3>Featured</h3></Card.Header>
                    <Card.Body className="cardbody">
                        <Card.Title>Special title treatment</Card.Title>
                        <Button className="btn-success btn-sm m-2">
                            <Link to="/users/add" className="text-white text-decoration-none">
                                Add New
                            </Link>
                        </Button>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.uuid}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td className="text-center">
                                            <Button className="btn-warning btn-sm mt-1">
                                                <NavLink
                                                    to={`/products/edit/${user.uuid}`}
                                                    className="text-white text-decoration-none"
                                                >
                                                    Edit
                                                </NavLink>
                                            </Button >
                                            {" "}
                                            <Button className="btn-danger btn-sm mt-1">
                                                <NavLink
                                                    onClick={() => deleteUser(user.uuid)}
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
            {/* <h1 className="title">Users</h1>
            <h2 className="subtitle">List of Users</h2>
            <Link to="/users/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link
                                    to={`/users/edit/${user.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Edit
                                </Link>
                                {" "}
                                <button
                                    onClick={() => deleteUser(user.uuid)}
                                    className="button is-small is-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default Userlist;
