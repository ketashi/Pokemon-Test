import tipo from "./tipo"
import axios from "axios"

const urlBaseRegion = "https://pokeapi.co/api/v2/pokedex/"
const urlBase = "https://pokeapi.co/api/v2/pokemon/"
const numero = Math.floor(Math.random()*721)

export const getPokemonKanto = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_KANTO,
        payload: axios.get(`${urlBaseRegion}2`)
    })
}

export const getPokemonPortada = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_PORTADA,
        payload: axios.get(`${urlBase}${numero}`)
    })
}
export const getPokemonJohto = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_JOHTO,
        payload: axios.get(`${urlBaseRegion}3`)
    })
}
export const getPokemonHoenn = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_HOENN,
        payload: axios.get(`${urlBaseRegion}4`)
    })
}
export const getPokemonShinnoh = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_SINNOH,
        payload: axios.get(`${urlBaseRegion}5`)
    })
}
export const getPokemonUnova = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_UNOVA,
        payload: axios.get(`${urlBaseRegion}8`)
    })
}
export const getPokemonDetails = (name) => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_DETAILS,
        payload: axios.get(`${urlBase}${name}`)
    })
}
export const getPokemonNational = () => dispatch => {
    dispatch({
        type: tipo.GET_POKEMON_NATIONAL,
        payload: axios.get(`${urlBaseRegion}1`)
    })
}