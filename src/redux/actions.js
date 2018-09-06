import axios from "axios";

export const getAllProducts = () => dispatch => {
  return axios.get("http://demo7475333.mockable.io/spaceships")
    .then((response) => {
        dispatch(getAllProductsAction(response.data))
    }).catch((error) => {
     console.log(error);
    })
}

const getAllProductsAction = (products) => {
  return {
    type: "GET_ALL_PRODUCTS",
    products
  }
}
