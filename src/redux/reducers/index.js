import {combineReducers} from "redux"
import kanto from "./kantoReducers"
import portada from "./portadaReducers"
import johto from "./johtoReducers"
import hoenn from "./hoennReducers"
import sinnoh from "./sinnohReducers"
import unova from "./unovaReducers"
import detail from "./detailReducers"

export default combineReducers ({
    kanto,
    portada,
    johto,
    hoenn,
    sinnoh,
    unova,
    detail
})