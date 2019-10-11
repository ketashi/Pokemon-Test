import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import StraightenIcon from "@material-ui/icons/Straighten"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import DeviceHubIcon from "@material-ui/icons/DeviceHub"
import SportsBasketballIcon from "@material-ui/icons/SportsBaseball"
import {device} from "../theme/responsive"

const urlBaseImage = "https://img.pokemondb.net/artwork/"
const Nombre = styled.h2 `
    text-transform:uppercase;
`
const Image = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow: column wrap;
    padding: 20px;
    margin:10px;
    >img {
        width: 300px;
    }
    @media ${device.mobileL}{
        >img{
            width: 200px;
        }
    }
`
const ContenedorList = styled.div `
    display:flex;
    justify-content: start;
    align-items: center;
    flex-flow: column wrap;
`
const List = styled.ul `
    list-style: none;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;
    padding:0;
`
const Atributo = styled.h4 `
    font-size: 22px;
`
const ListDetalle = styled.li `
    display: flex;
    flex-flow: column wrap;
    >span {
        display: flex;
        align-items: flex-start;
        font-size: 18px;
        margin:5px;
        padding: 5px;
        justify-content: space-between;
        justify-content: flex-start;
    }
    >span svg{
        margin-right:10px;
    }
`
export default ({ name, height, types, weight, abilities }) => {
    return(
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Nombre>{name}</Nombre>
            <Grid item xs={12} sm={5}>
                <Image>
                    <img src ={`${urlBaseImage}${name}.jpg`} alt={name}/>
                </Image>
            </Grid>

            <Grid item xs={12} sm={5}>

                <Grid container
                    direction="row"
                    justify= "center"
                    alignItems="center"
                >
                    <Grid item xs={5} sm={5}>
                        <ContenedorList>
                            <List>
                                <Atributo>Heigth:</Atributo>
                                <ListDetalle>
                                    <span><StraightenIcon />{parseFloat(height/10)+ " m."}</span>
                                    
                                </ListDetalle>
                            </List>

                            <List>
                                <Atributo>Weight:</Atributo>
                                <ListDetalle>
                                    <span><FitnessCenterIcon/>{weight + " lbs."}</span>
                                    
                                </ListDetalle>
                            </List>
                        </ContenedorList> 
                    </Grid>

                    <Grid item xs={5} sm={5}>
                        <ContenedorList>
                            <List>
                                <Atributo>Abilities:</Atributo>
                                <ListDetalle>
                                {
                                    abilities.map(ability =>
                                        <span key={ability.ability.name}><DeviceHubIcon/>{ability.ability.name}</span>
                                    )
                                }                                 
                                </ListDetalle>
                            </List>

                            <List>
                                <Atributo>Types:</Atributo>
                                <ListDetalle>
                                {
                                    types.map(type =>
                                        <span key={type.type.name}><SportsBasketballIcon/>{type.type.name}</span>
                                    )
                                }  
                                </ListDetalle>
                            </List>
                        </ContenedorList> 
                    </Grid>
                </Grid>

               
            </Grid>

        </Grid>
    )   
}