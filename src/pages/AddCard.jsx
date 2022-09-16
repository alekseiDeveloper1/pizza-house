import React, {useState} from 'react';
import Header from "../components/header/Header";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const AddCard = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()

    const addProduct = (e) => {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title: title,
            desc: desc,
            price: `${price}`,
            img: file,
        }
        dispatch({type: "CREATE_PRODUCT", data})
    }

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Button onClick={addProduct} variant="primary" type="submit">
                            Add card
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
};

export default AddCard;