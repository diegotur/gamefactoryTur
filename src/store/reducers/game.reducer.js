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
            const SelectedGame = state.games.find((game)=> game.id === action.gameId)
            if (SelectedGame === -1) return state;
            return {...state, selected: state.games[SelectedGame]}
        case FILTER_GAMES:
            const filteredGames = state.games.filter((game)=> game.categoryId === action.categoryId)
            if (filteredGames === -1) return state;
            return {...state, selected: state.categories[filteredGames]}
        default:
        return state;


    }
}

export default GameReducer