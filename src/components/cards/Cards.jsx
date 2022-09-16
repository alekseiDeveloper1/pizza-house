import {Row} from "react-bootstrap";
import CardItem from "../card/CardItem";
import {useSelector} from "react-redux";


const Cards = () => {
    const cards = useSelector(state => state.cards)
    return (
        <Row xs={1} md={3} className="g-2">
            {cards.map(item =>
                <CardItem
                    key = {item.id}
                    prop = {item}
                />
            )}
        </Row>
    );
};

export default Cards;