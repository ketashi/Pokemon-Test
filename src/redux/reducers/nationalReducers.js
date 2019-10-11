import tipo from "../actions/tipo"

const initialState = {
    data:[]
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_POKEMON_NATIONAL_FULFILLED:
           const {pokemon_entries} = action.payload.data 
           return Object.assign({},state,{
               data: pokemon_entries
           })
    
        default:
           return state
    }
}