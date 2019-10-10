import tipo from "../actions/tipo"

const initialState = {
    name:"",
    abilities:[],
    height:"",
    moves:[],
    sprites:[],
    stats:[],
    types:[],
    weight:""
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_POKEMON_DETAILS_FULFILLED:
            const {name,abilities,height,moves,sprites,stats,types,weight} = action.payload.data
            return Object.assign({}, state, {
                name,
                abilities,
                height,
                moves,
                sprites,
                stats,
                types,
                weight
            })

        default:
           return state
    }
}