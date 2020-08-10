import {ADD_PRODUCT_BASKET} from './types';


const addBasket = (productName) => {
    return (dispatch) => {
        console.log('Adding to the cart');
        console.log('product: ', productName);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        });
    }
}

export default addBasket;