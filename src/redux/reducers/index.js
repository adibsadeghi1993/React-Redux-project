import {combineReducers} from "redux"
import { detailReducer } from "./DetailReducer"
import { productReducer } from "./ProductReducer"
 const rootReducer=combineReducers({
    allProducts:productReducer,
    product:detailReducer
})

export default rootReducer