import {GAMES} from "../../data/games"
import { SELECT_GAME, FILTER_GAMES} from "../actions/games.action"


const initialState = {
    games: GAMES,
    filteredGames: [],
    selected: null,
}

const GameReducer  = (state = initialState, action) =>{
    switch(action.type) {
        case SELECT_GAME:
            return {...state, selected: state.games.find(game=>game.id === action.gameId)}
        case FILTER_GAMES:
            return{
                ...state, filteredGames: state.games.filter(game=>game.category === action.categoryId)
            }
        default:
        return state;
    }
}

export default GameReducer