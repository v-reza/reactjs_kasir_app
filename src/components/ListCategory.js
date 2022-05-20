import React, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../Utils/Constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCoffee, faCheese } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const Icon = ({ nama }) => {
    if (nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className="mr-2" />
    if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} className="mr-2" />
    if (nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="mr-2" />

    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />
}

export default class ListCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + "categories")
            .then(response => {
                const categories = response.data;
                this.setState({ categories })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const { changeCategory, kategoriSelected } = this.props
        console.log(kategoriSelected)
        return (
            <Col md={3} mt="2">
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
                <ListGroup>
                    {
                        this.state.categories && this.state.categories.map(categori => (
                            <ListGroup.Item key={categori.id} onClick={() => changeCategory(categori.nama)}
                            className={kategoriSelected === categori.nama && "kategori-aktif"}
                            style={{cursor: "pointer"}}>
                                <h5>
                                    <Icon nama={categori.nama} /> {categori.nama}
                                </h5>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Col>
        )
    }
}
