import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhoddie.jpg';
import blackHoddie from '../images/blackhoddie.jpg';


function Cart({basketProps}) {

    let products = Object.values(basketProps.products);
    let productsInCart = products.filter( product => {
        return product.isCart;
    });

    const productImages = [greyTshirt, blackTshirt, greyHoddie, blackHoddie];
    
    productsInCart = productsInCart.map( (product, index) => {
        return (
            <Fragment>
                <div className="product">
                    <ion-icon name="close-circle"></ion-icon>
                    <img src={productImages[index]} alt=""/><span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon className="increment" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basket-total-container">
                <h4 className="basket-total-title">Basket Total</h4>
                <h4 className="basket-total">${basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    basketProps: state.basket
})

export default connect(mapStateToProps) (Cart);

