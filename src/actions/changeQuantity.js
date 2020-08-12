import {INCREASE_QUANTITY, DECREASE_QUANTITY} from './types'

const productQuantity = (action, product) => {
    return (dispatch) => {
        console.log('inside product quantity');
        console.log('the action is', action);
        console.log('the product is', product);

        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY: DECREASE_QUANTITY,
            payload: product
        });
    }
}

export default productQuantity;
