import React from "react"
import {Link} from "react-router-dom"

import styled from "styled-components"
import {device} from "../theme/responsive"

const urlBaseImage = "https://img.pokemondb.net/artwork/"
const Contenedor = styled.div `
    height: 600px;
    overflow: auto;
`
const Lista = styled.ul `
    text-align:center;
    list-style:none;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: space-around;
    @media ${device.mobileL}{
        padding:0;
    }
    @media ${device.mobileS}{
        flex-flow: column;
    }
`
const ListaPokemon = styled(Link) `
    border: 1px outset black;
    margin: 10px;
    padding: 5px;
    overflow: auto;
    text-decoration:none;
    /* animation */
    @keyframes slidein {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(.95);
            }
            100% {
                transform: scale(1);
            }
    }
    >img{
        width: 130px;
        height: 120px;
    }
    &:hover img,span{
        animation-duration: 1s;
        animation-name: slidein;
        animation-iteration-count: infinite;
    }
    >span{
        background: rgba(0,0,0,.3);
        position: relative;
        margin:0 auto;
        padding: 10px 0;
        width: 130px;
        color:yellow;
        font-size: 20px;
        border-radius: 5px;
        display:none;
        z-index: 20;
    }
    &:hover span{
        display:block;
    }
    @media ${device.mobileL}{
        margin:10px auto;
    }
    @media ${device.mobileS}{
        margin: 10px;
    }
`
const Title = styled.h2 `
    color:black;
    text-align:center;
    text-transform: uppercase;
`
export default ({generacion,region}) => (
    <div>
        <Title>{`Region de ${region.name}`}</Title>
    <Contenedor>
        <Lista>
            {
                (generacion.filter(data => data.entry_number < 60)).map(pokemon =>
                    <ListaPokemon key={pokemon.entry_number} to={`pokemon/${pokemon.pokemon_species.name}`}>
                        <span>{pokemon.pokemon_species.name}</span>
                        <img src={`${urlBaseImage}${pokemon.pokemon_species.name}.jpg`} alt="Bulbasaur"/>
                    </ListaPokemon>
                )
            }     
        </Lista>
    </Contenedor>
    </div>
)