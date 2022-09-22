import React, { Component } from 'react';
import '../App.css';
import Dropdown from './Dropdown';
import CountSelector from './CountSelector';

class Item extends Component {
    render() {
        return(
            <div className="item">
              <img src={this.props.imageURL} alt={this.props.lab} width="100%"/>
              
              <h2>{this.props.label}</h2>

              {/* <!-- dropdown --> */}
              <Dropdown />

              {/* <!-- count selector --> */}
              <CountSelector />

              {/* <!-- price & add to cart --> */}
              <div className="selector">
                <h2>$ {this.props.basePrice}</h2>
                <div className="options cart">
                  <a href="" alt="Add to Cart Button"><h2>Add to Cart</h2></a>
                </div>
              </div>
            </div>
        );
    }
}

export default Item