import {createStore, combineReducers} from "redux";

import CategoryReducer from "./reducers/category.reducer";
import GameReducer from "./reducers/game.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrdersReducer from "./reducers/orders.reducer";

const RootReducer = combineReducers ({
    category: CategoryReducer,
    games: GameReducer,
    cart: CartReducer,
    orders: OrdersReducer
})

export default createStore(RootReducer)