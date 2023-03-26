import {ORDERS} from "../../data/orders"
import { SHOW_ORDERS} from "../actions/orders.action"


const initialState = {
    orders: ORDERS,
    selected: null,
}

const OrdersReducer  = (state = initialState, action) =>{
    switch(action.type) {
        case SHOW_ORDERS:
            return {...state, selected: state.orders.filter((n)=>n.id!==undefined)}
        default:
        return state;
    }
}


export default OrdersReducer