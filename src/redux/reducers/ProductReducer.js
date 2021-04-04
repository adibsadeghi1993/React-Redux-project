import { SET_PRODUCTS } from "../constants/Action-types";

const initialState={
    products:[{
        id:1,
        title:"adib sadeghi"
    }]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case SET_PRODUCTS:return state
            
           
    
        default:return state
           
    }

}

