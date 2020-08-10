import React from 'react';
import {connect} from 'react-redux';
import getNumbers from '../actions/getBasket';
import {Link} from 'react-router-dom';

function Navbar({basketProps}) {
    
    return (
        <header className="header">
            <div className="overlay"></div>
            <nav className="nav">
                <h2>Shopping</h2>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item cart">
                        <Link to="/cart" className="nav-link cart-link">
                        <ion-icon name="cart"></ion-icon>Cart <span>{basketProps.basketNumbers}</span></Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = (state) => ({
    basketProps: state.basket
})

export default connect(mapStateToProps, {getNumbers}) (Navbar);