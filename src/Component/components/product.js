import React, { Component } from 'react';
import  '../styles/design.css';
import {Button} from 'react-bootstrap';

class Product extends Component {
    render() {
      return (
        <Button bsStyle="link" value={this.props.id}>
        <div className="product" >
        <img className="card-img-top" src={require('../Images/'+ this.props.data.image)} alt="Card cap"/>
        <div className="card-body">
            <h5 className="card-title font-weight-bold">{this.props.data.Name}</h5>
            <p className="card-text text-wrap warp">{this.props.data.description}</p>
            <p>₹{this.props.data.cost}</p>            
        </div>
        </div>  
        </Button>
        );
    }
  }
  
  export default Product;




                      