import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT } from "../constants/Action-types";

const initialState={
    product:{}
}


export const detailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SELECTED_PRODUCT:
        return {...state,product:payload};
        case REMOVE_SELECTED_PRODUCT:
        return {...state,product:{}};
  
      default:
        return state;
    }
  };