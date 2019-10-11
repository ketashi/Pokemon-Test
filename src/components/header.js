import React from "react";
import {AppBar,
  Toolbar,
  Typography
} from "@material-ui/core"
import { Link } from "react-router-dom";
import Search from "./search"

import {connect} from "react-redux"
import {getPokemonNational} from "../redux/actions/pokemonActions"


class Header extends React.Component {
  state = {
    pokemon:"",
    lista: false
  }
  componentDidMount(){
    this.props.getPokemonNational()
  }
  onSearch = data =>{
    const valor = document.getElementById("namepokemon")
    const filtro = data.filter(pokemon => {
      if(pokemon.indexOf(valor.value)+1)
        return pokemon
    })
    this.setState({
      pokemon:filtro,
      lista:false
    })
  }
  onOcultar = () =>{
    this.setState({
      pokemon: [],
      lista: true
    })
  }
  render() {
    const {data} = this.props.national
    const results = data.map(pokemon => pokemon.pokemon_species.name)
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between"
          }} onBlur={this.onOcultar}>
            <Typography variant="h6" noWrap>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Poke-info Region
              </Link>
            </Typography>
            {this.props.path === "/" && <Search onSearch={()=>this.onSearch(results)} result= {this.state.pokemon} lista={this.state.lista}/>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({national}) =>{
  return{
    national
  }
}
export default connect (mapStateToProps,{
  getPokemonNational
})(Header);
