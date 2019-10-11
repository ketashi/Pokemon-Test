import React from "react"
import styled from "styled-components"
import {Search} from "@material-ui/icons"
import {Input} from "@material-ui/core"
import {Link} from "react-router-dom"

const urlBaseImage="https://img.pokemondb.net/sprites/x-y/normal/"
const ContainerSearch = styled.div `
    display:flex;
    flex-flow: row wrap;
    justify-content: start;
    align-content: start;
    align-items: center;
`
const ListSearch = styled.div `
    display:flex;
    flex-flow: column wrap;
    justify-content:start;
    align-content:start;
    align-items:center;
    position:absolute;
    width: 280px;
    right: 5px;
    top:70px;
    background: rgba(255,255,255,0.5);
    border-radius: 5px;
    overflow:auto;
    color:black;
`
const Lista = styled.ul `
    list-style:none;
    padding:0;
    margin:0;
    height: 300px;
`

const ItemPokemon = styled(Link) `
    border-bottom: 1px solid;
    padding-bottom: 10px;
    text-transform:uppercase;
    display: flex;
    align-items: center;
    justify-content:space-around;
    text-decoration:none;
    color:black;
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
    &:hover img{
        animation-duration: 1s;
        animation-name: slidein;
        animation-iteration-count: infinite;
    }
    &:hover span{
        color:blue;
    }
`
const ListaPokemon = (result,lista) =>{
    if(!lista){
    if(result){
        return (
        <ListSearch id="lista">
            <Lista>
            {result.map(pokemon =>
                <ItemPokemon key={pokemon} to={`pokemon/${pokemon}`}>
                <img src={`${urlBaseImage}${pokemon}.png`} alt={pokemon}/>
                <span>{pokemon}</span>
                </ItemPokemon>
            )}
            </Lista>
        </ListSearch>
        )
    }}
}
export default ({onSearch,result,lista}) => {
    return(
        <ContainerSearch >
            <Input
              placeholder="search..."
              inputProps={{
                'aria-label': 'Pokemon',
              }}
              id="namepokemon"
            />
            {ListaPokemon(result,lista)}
            <Search onClick={onSearch}/>
        </ContainerSearch>
    )   
}