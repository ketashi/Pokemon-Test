import tipo from "../actions/tipo"

const initialState = {
    data:[],
    region:""
}

export default (state=initialState,action) => {
    switch (action.type) {
        case tipo.GET_POKEMON_JOHTO_FULFILLED:
            const {pokemon_entries,region} = action.payload.data
            return Object.assign({},state,{
                data: pokemon_entries,
                region
            })
        default:
            return state
    }
}