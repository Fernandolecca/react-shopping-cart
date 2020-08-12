import {REMOVE_PRODUCT_BASKET} from './types'


const removeBasket = (product) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_BASKET,
            payload: product
        })
    }
}

export default removeBasket;