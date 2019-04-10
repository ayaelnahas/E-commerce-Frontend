import axios from 'axios'
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_MY_PRODUCTS = 'GET_MY_PRODUCTS'

export const register = (user) => {
    return axios.post(`${baseURL}/users/`, user);
}

export const login = (credentials) => {
    return axios.post(`${baseURL}/users/authenticate`, credentials);
}


// Products CRUD Operations
export const addProduct = (data) => {
    return dispatch => {
        axios.post(`${baseURL}/products`, data)
            .then(response => {
                response.data.userId = localStorage.getItem("userId");
                response.data.addedBy = localStorage.getItem("userId");
                if (response.status === 200) {
                    alert("new product added");
                    dispatch({ type: ADD_PRODUCT, payload: response.data }, { type: GET_ALL_PRODUCTS })
                }
            })
    }
}
const getProductsSuccess = (value) => {
    return { type: GET_ALL_PRODUCTS, payload: value };
}
export const deleteProduct = (id) => {
    return dispatch => {
        axios.delete(`${baseURL}/products/${id}`).then(
            response => {
                if (response.status === 200) {
                    dispatch({ type: DELETE_PRODUCT, payload: response.data })
                }
            }
        );
    }
}
export const getAllProducts = () => {
    return dispatch => {
        axios.get(`${baseURL}/products`)
            .then((response) => {
                dispatch(getProductsSuccess(response.data));
            }).catch((error) => { console.log(error); })
    }
}

export const getMyProducts = (id) => {
    return dispatch => {
        axios.get(`${baseURL}/products/products/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: GET_MY_PRODUCTS, payload: response.data })
                }
            }).catch((error) => { console.log(error); })
    }
}

