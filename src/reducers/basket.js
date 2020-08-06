import {ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET} from '../actions/types'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyTshirt: {
            name: 'Grey t-shirt',
            price: 15.00,
            numbers: 0,
            isCart: false
        },
        blackTshirt: {
            name: 'Black t-shirt',
            price: 10.00,
            numbers: 0,
            isCart: false
        },
        greyHoddie: {
            name: 'Grey hoddie',
            price: 25.00,
            numbers: 0,
            isCart: false
        },
        blackHoddie: {
            name: 'Black hoddie',
            price: 30.00,
            numbers: 0,
            isCart: false
        }
    }
        
    
}

const basketReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[payload]} ;
            addQuantity.numbers += 1; 
            addQuantity.isCart = true;

            return {
                
               basketNumbers: state.basketNumbers + 1,
               cartCost: state.cartCost + addQuantity.price,
               products: {
                   ...state.products,
                   [payload]: addQuantity
               }

            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default basketReducer;