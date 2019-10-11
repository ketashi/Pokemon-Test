import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"

import GlobalStyle from "../theme/global"
import HomePage from "../page/homePage"
import DetailPokemon from "../page/detailPokemon"
import Page404 from "../page/page404"

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/pokemon/:name" component={DetailPokemon}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
