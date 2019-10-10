import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"

import GlobalStyle from "../theme/global"
import HomePage from "../page/homePage"
import DetailPokemon from "../page/detailPokemon"

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <GlobalStyle/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/pokemon/:name" component={DetailPokemon}/>
      </BrowserRouter>
    )
  }
}

export default App
