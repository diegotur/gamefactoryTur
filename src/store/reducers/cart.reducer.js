import {CART} from "../../data/cart"
import { SHOW_CART} from "../actions/cart.action"


const initialState = {
    cart: CART,
    selected: null,
}

const CartReducer  = (state = initialState, action) =>{
    switch(action.type) {
        case SHOW_CART:
            return {...state, selected: state.cart.filter((n)=>n.id!==undefined)}
        default:
        return state;
    }
}


export default CartReducer