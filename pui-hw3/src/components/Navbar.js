import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-container">
                    <img src="assets/logo/logo-01.svg" alt="Bun Bun Bake Shop Logo" width="100%"/>
                </div>

                {/* container for navigation buttons and description */}
                <div className="header-detail">
                <div className="nav">
                    <a href="" alt="link to products">PRODUCTS</a>
                    <a href="" alt="link to cart">CART</a>
                </div>
                <div className="header-description">
                    <h1>Our hand-made cinnamon rolls</h1>
                </div>
                </div>
            </div>
        );
    }
}

export default Navbar