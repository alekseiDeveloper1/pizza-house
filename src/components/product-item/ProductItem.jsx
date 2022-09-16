import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const ProductItem = () => {
    const params = useParams()
    const id = params.id -1

    const cards = useSelector(state => state.cards)
    const product = cards[id]
    return (
        <div>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img src={product.img}/>
                    </Card>
                </Col>
                <Col md={6}>
                    <div className='product__price'>{product.price} &#8381;</div>
                    <div className='product__title'>{product.title}</div>
                    <div>{product.desc}</div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductItem;