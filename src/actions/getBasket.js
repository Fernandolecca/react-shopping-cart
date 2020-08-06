import {GET_NUMBERS_BASKET} from './types'

const getNumbers = () => {
    return (dispatch) => {
        console.log('Getting baskets numbers');
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}

export default getNumbers;