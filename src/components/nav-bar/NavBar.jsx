import React from 'react';
import {ListGroup} from "react-bootstrap";

const NavBar = () => {
    const food = [
        {id:1, name: 'Pizza'},
        {id:2, name: 'Beverages'},
        {id:3, name: 'Tea'},
        {id:4, name: 'Cheese'},
        {id:5, name: 'Fruit'},
    ]
    return (
        <ListGroup>
            {food.map(item =>
                <ListGroup.Item key={item.id}>
                    {item.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default NavBar;