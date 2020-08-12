import {ADD_PRODUCT_BASKET, 
        GET_NUMBERS_BASKET, 
        INCREASE_QUANTITY, 
        DECREASE_QUANTITY,
        REMOVE_PRODUCT_BASKET} from '../actions/types'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        greyTshirt: {
            name: 'Grey t-shirt',
            tagName: 'greyTshirt',
            price: 15.00,
            numbers: 0,
            isCart: false
        },
        blackTshirt: {
            name: 'Black t-shirt',
            tagName: 'blackTshirt',
            price: 10.00,
            numbers: 0,
            isCart: false
        },
        greyHoddie: {
            name: 'Grey hoddie',
            tagName: 'greyHoddie',
            price: 25.00,
            numbers: 0,
            isCart: false
        },
        blackHoddie: {
            name: 'Black hoddie',
            tagName: 'blackHoddie',
            price: 30.00,
            numbers: 0,
            isCart: false
        }
    }
        
    
}

const basketReducer = (state=initialState, {type, payload}) => {
    let productSelected = "";
    let newCartCost = 0;
    let newBasketNumbers = 0;

    switch(type) {
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[payload]} ;
            productSelected.numbers += 1; 
            productSelected.isCart = true;

            return {
                
               basketNumbers: state.basketNumbers + 1,
               cartCost: state.cartCost + productSelected.price,
               products: {
                   ...state.products,
                   [payload]: productSelected
               }

            }

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        case INCREASE_QUANTITY:
            productSelected = {...state.products[payload]};
            productSelected.numbers += 1;
            return {
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + productSelected.price,
                products: {
                    ...state.products,
                    [payload]: productSelected
                }

            }

        case DECREASE_QUANTITY:
            productSelected = {...state.products[payload]};
            newCartCost = 0;
            
            if(productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost;
                newBasketNumbers = state.basketNumbers;
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - productSelected.price;
                newBasketNumbers = state.basketNumbers - 1;
            }

            return {
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [payload]: productSelected
                }

            }
        
        case REMOVE_PRODUCT_BASKET:
            productSelected = {...state.products[payload]};
            productSelected.isCart = false;
            newCartCost = 0;

            if(productSelected.numbers === 0) {
                newCartCost = state.cartCost;
            } else {
                newCartCost = state.cartCost - (productSelected.price * productSelected.numbers);
                newBasketNumbers = state.basketNumbers - productSelected.numbers;
                productSelected.numbers = 0;
            }
            
            return {
                
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [payload]: productSelected
                }
            }
        
        default:
            return state;
    }
}

export default basketReducer;