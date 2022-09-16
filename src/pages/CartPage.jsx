import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const CartPage = () => {
    const product = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)
    useEffect(() => {
        setSum(product.reduce((acc, item) => {
            return acc + item.price
        }, 0))
    }, [product])
    const remCart = (id) => {
        dispatch({type: 'REM_CART', id})
    }

    return (
        <>
            <Header/>
            <Container>
                    {product.length !== 0 ? product.map(product =>
                        <Row className='mt-5' key={product.id}>
                            <Col md={3}>
                                <Card>
                                    <Card.Img src={product.img}/>
                                </Card>
                            </Col>
                            <Col md={7}>
                                <div className='product__price'>{product.price} &#8381;</div>
                                <div className='product__title'>{product.title}</div>
                                <div>{product.desc}</div>
                            </Col>
                            <Col md={2}>
                                <Button onClick={() => remCart(product.id)}>X</Button>
                            </Col>
                        </Row>
                    ) : <h1 className='mt-5'>No product added yet</h1>}
                <hr style={{margin: "0 -20vw"}}/>
                <h2 style={{textAlign: 'right'}} className='mt-2'>{product.length} product {sum} &#8381;</h2>
            </Container>
        </>
    );
};

export default CartPage;