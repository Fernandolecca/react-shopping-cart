import React from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhoddie.jpg';
import blackHoddie from '../images/blackhoddie.jpg';
import {connect} from 'react-redux';
import addBasket from '../actions/add';

const Home = (props) => {
    

    return (
        <div className="container">
            <div className="image">
                <img src={greyTshirt} alt="grey t-shirt"/>
                <h3>Grey T-shirt</h3>
                <h3>$15,00</h3>
                <a onClick={() => props.addBasket('greyTshirt')} className="add-to-cart cart-1" href="#">Add to Cart</a>
            </div>

            <div className="image">
                <img src={blackTshirt} alt="black t-shirt"/>
                <h3>Black shirt</h3>
                <h3>$10,00</h3>
                <a onClick={() => props.addBasket('blackTshirt')} className="add-to-cart cart-2" href="#">Add to Cart</a>
            </div>

            <div className="image">
                <img src={greyHoddie} alt="Grey hoddie"/>
                <h3>Grey Hoddie</h3>
                <h3>$25,00</h3>
                <a onClick={() => props.addBasket('greyHoddie')} className="add-to-cart cart-3" href="#">Add to Cart</a>
            </div>

            <div className="image">
                <img src={blackHoddie} alt="black hoddie"/>
                <h3>Black Hoddie</h3>
                <h3>$30,00</h3>
                <a onClick={() => props.addBasket('blackHoddie')} className="add-to-cart cart-4" href="#">Add to Cart</a>
            </div>
            
        </div>
    );
}

export default connect(null, {addBasket}) (Home);