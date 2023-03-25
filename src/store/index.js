import {createStore, combineReducers} from "redux";

import CategoryReducer from "./reducers/category.reducer";
import GameReducer from "./reducers/game.reducer";

const RootReducer = combineReducers ({
    category: CategoryReducer,
    games: GameReducer
})

export default createStore(RootReducer)