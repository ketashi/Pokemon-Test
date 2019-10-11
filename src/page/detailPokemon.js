import React from "react"
import Header from "../components/header"
import Dashboard from "../components/dashboard"
import Grid from "@material-ui/core/Grid"
import StatsBarra from "../components/stats2"
import Stats from "../components/stats"
import {connect} from "react-redux"
import {getPokemonDetails} from "../redux/actions/pokemonActions"
import Breadcumbs from "../components/breadcumbs"
import styled from "styled-components"
import {device} from "../theme/responsive"

const Separado = styled.hr `
    margin: 0;
    width: 100px;
    transform: rotate(90deg);
    @media ${device.tablet}{
        display:none;
    }
`
class DetailPokemon extends React.Component{
    componentDidMount(){
        const name = this.props.match.params.name
        this.props.getPokemonDetails(name)
    }
    render(){
        return(
            <div>
                <Header/>
                <Breadcumbs/>
                <Dashboard 
                    name={this.props.detail.name}
                    sprites={this.props.detail.sprites}
                    height={this.props.detail.height}
                    weight={this.props.detail.weight}
                    abilities={this.props.detail.abilities}
                    types={this.props.detail.types}
                />
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={10} sm={4}>
                        <Stats stats={this.props.detail.stats}/>
                    </Grid>
                    <Separado/>
                    <Grid item xs={10} sm={4}>
                        <StatsBarra stats={this.props.detail.stats}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({portada,detail}) => {
    return {
        portada,
        detail
    }
}
export default connect (mapStateToProps,{
    getPokemonDetails
})(DetailPokemon)