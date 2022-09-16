import {Button, Card, Col} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";

const CardItem = ({prop}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addCart = (id) => {
        dispatch({type: 'ADD_CART', id})
    }
    const del = (id) => {
        dispatch({type: 'REMOVE_PRODUCT', id})
    }
    return (
        <Col sm={4}>
            <Card>
                <Card.Img
                    variant="top"
                    src={prop.img}
                    onClick={() => navigate('/' + prop.id)}
                />
                <Card.Body>
                    <Card.Title>{prop.title}</Card.Title>
                    <Card.Text>
                        {prop.desc}
                    </Card.Text>
                    <Card.Text>
                        {prop.price} &#8381;
                    </Card.Text>
                    <Button onClick={() => del(prop.id)} className='me-3'>Delete</Button>
                    <Button onClick={() => addCart(prop.id)}>Add cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardItem;