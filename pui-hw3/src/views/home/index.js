import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Item from '../../components/Item';

class Index extends Component {
  render() {
    return (
        <div>

            <Navbar />

            {/* container for all items to be shown on store page  */}
            <div className="items-container">
                {/* <!-- first row of items --> */}
                <div className="item-row">
                    
                    <Item 
                        imageURL="assets/products/original-cinnamon-roll.jpg"
                        label="Original Cinnamon Roll"
                        basePrice="2.49"/>
                    
                    <Item
                        imageURL="assets/products/apple-cinnamon-roll.jpg"
                        label="Apple Cinnamon Roll"
                        basePrice="3.49"/>

                    <Item
                        imageURL="assets/products/raisin-cinnamon-roll.jpg"
                        label="Raisin Cinnamon Roll"
                        basePrice="2.99"/>
                        
                </div>

                {/* <!-- second row of items --> */}
                <div className="item-row">

                    <Item
                        imageURL="assets/products/walnut-cinnamon-roll.jpg"
                        label="Walnut Cinnamon Roll"
                        basePrice="3.49"/>

                    <Item
                        imageURL="assets/products/double-chocolate-cinnamon-roll.jpg"
                        label="Double-Chocolate Cinnamon Roll"
                        basePrice="3.99"/>

                    <Item
                        imageURL="assets/products/strawberry-cinnamon-roll.jpg"
                        label="Strawberry Cinnamon Roll"
                        basePrice="3.99"/>

                </div>
            </div>
        </div>
    );
  }
}

export default Index