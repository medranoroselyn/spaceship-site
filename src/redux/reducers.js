const productsReducer = (state= {}, action) => {
  switch(action.type) {
    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        ...action.products
      }
    }

    case "GET_SINGLE_PRODUCTS": {
      return {
        selectedProduct: action.selectedProduct
      }
    }

    default : return state;
  }
}

export default productsReducer;
