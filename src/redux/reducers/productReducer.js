import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  //destructure action into its objects
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload }; //...means existing state
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTSSELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
