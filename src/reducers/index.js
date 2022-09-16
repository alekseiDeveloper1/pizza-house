import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const initialState = {
    cards: [
        {id: 1, title:'pizza five cheese', desc: "pizza five cheese is nice pizza", price: 500, img: p1},
        {id: 2, title:'pizza five cheese', desc: "pizza five cheese is nice pizza", price: 300, img: p2},
        {id: 3, title:'pizza five cheese', desc: "pizza five cheese is nice pizza", price: 600, img: p3},
        {id: 4, title:'pizza five cheese', desc: "pizza five cheese is nice pizza", price: 200, img: p1},
        {id: 5, title:'pizza five cheese', desc: "pizza five cheese is nice pizza", price: 500, img: p2},
    ],
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case'CREATE_PRODUCT':
            return {...state, cards: [...state.cards, action.data]}
        case 'REMOVE_PRODUCT':
            return {...state, cards: state.cards.filter(product => product.id !== action.id)}
        case 'ADD_CART':
            return {...state, cart: [...state.cart, state.cards.find(product => product.id === action.id)]}
        case 'REM_CART':
            return {...state, cart: state.cart.filter(product => product.id !== action.id)}
        default:
            return state
    }
}