import React from "react"
import Grid from "@material-ui/core/Grid"


import Header from "../components/header"
import Portada from "../components/portada"
import Region from "../components/region"


import {connect} from "react-redux"
import {
    getPokemonKanto,
    getPokemonPortada,
    getPokemonJohto,
    getPokemonHoenn,
    getPokemonShinnoh,
    getPokemonUnova
} from "../redux/actions/pokemonActions"
class HomePage extends React.Component{
    componentDidMount(){
        this.props.getPokemonKanto()
        this.props.getPokemonPortada()
        this.props.getPokemonJohto()
        this.props.getPokemonHoenn()
        this.props.getPokemonShinnoh()
        this.props.getPokemonUnova()
    }
    render(){
        return(
            <div>
            <Header/>
            <Grid container>
            <Grid item xs={12}>
                <Portada 
                    name={this.props.portada.name}
                    sprites={this.props.portada.sprites}
                    height={this.props.portada.height}
                    weight={this.props.portada.weight}
                    abilities={this.props.portada.abilities}
                    types={this.props.portada.types}
                    />
            </Grid>
            </Grid>
                
                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={5}>
                        <Region generacion={this.props.kanto.data} region={this.props.kanto.region}/>
                    </Grid>
                    <hr style={{margin: "0",
                                width: "100px",
                                transform: "rotate(90deg)"}}/>
                    <Grid item xs={12} sm={5}>
                        <Region generacion={this.props.johto.data} region={this.props.johto.region}/>
                    </Grid>
                </Grid>

                <hr style={{margin:"50px auto",
                                width: "300px",
                                }}/>

                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={5}>
                        <Region generacion={this.props.hoenn.data} region={this.props.hoenn.region}/>
                    </Grid>
                    <hr style={{margin: "0",
                                width: "100px",
                                transform: "rotate(90deg)"}}/>
                    <Grid item xs={12} sm={5}>
                        <Region generacion={this.props.unova.data} region={this.props.unova.region}/>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

const mapStateToProps = ({kanto,portada,johto,hoenn,sinnoh,unova}) => {
    return {
        kanto,
        portada,
        johto,
        hoenn,
        sinnoh,
        unova
    }
}
export default connect (mapStateToProps,{
    getPokemonKanto,
    getPokemonPortada,
    getPokemonJohto,
    getPokemonHoenn,
    getPokemonShinnoh,
    getPokemonUnova
})(HomePage)