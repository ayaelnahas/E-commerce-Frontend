import * as actionTypes from '../Actions/actions'
const initialState =
{
    productArray: [],
    myProductArray: []
}

const productReducer = (state = initialState, action) => {
    let newArr = [...state.productArray];
    let myProductArr = [...state.myProductArray];
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            newArr.push(action.payload);
            break;
        case actionTypes.DELETE_PRODUCT:
            const index = newArr.findIndex(product => product._id === action.payload._id)
            console.log(index);
            newArr.splice(index, 1);  
            break;
        case actionTypes.GET_ALL_PRODUCTS:
            newArr = action.payload
            break;
        case actionTypes.GET_MY_PRODUCTS:
            myProductArr = action.payload
            break;
        default:
    }

    return {
        ...state,
        productArray: newArr,
        myProductArray: myProductArr
    };

}

export default productReducer;