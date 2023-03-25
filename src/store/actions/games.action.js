export const SELECT_GAME  ="SELECT_GAME";

export const FILTER_GAMES  ="FILTER_GAMES";

export const selectGame = (id)=>({
type: SELECT_GAME,
gameId: id,
})

export const filterGames = (id)=>({
    type: FILTER_GAMES,
    categoryId: id,
    })
    