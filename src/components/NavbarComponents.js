import React, { useEffect, useState } from 'react'
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { ListCategory, Hasil, Menu } from './Index'
import { API_URL } from '../Utils/Constant';
import axios from 'axios';
    
const NavbarComponents = () => {
    const [menu, setMenu] = useState([])
    const [kategoriSelected, setKategoriSelected] = useState('Makanan')

    useEffect(() => {
        axios.get(API_URL + "products?category.nama=" + kategoriSelected)
            .then(response => {
                setMenu(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])


    const changeCategory = (value) => {
        setKategoriSelected(value)
        setMenu([])

        axios.get(API_URL + "products?category.nama=" + value)
            .then(response => {
                setMenu(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">React App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <div className='mt-2'>
                <Container fluid>
                    <Row>
                        <ListCategory changeCategory={changeCategory} kategoriSelected={kategoriSelected}></ListCategory>
                        <Col>
                            <h4>
                                <strong>Daftar Produk </strong>
                            </h4>
                            <hr />
                            <Row>
                                {
                                    menu && menu.map(menu => (
                                        <Menu key={menu.id} menu={menu} />
                                    ))
                                }
                            </Row>
                        </Col>
                        <Hasil></Hasil>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default NavbarComponents