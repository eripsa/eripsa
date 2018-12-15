import React, { Component } from 'react';
import  '../styles/design.css';
import {Button} from 'react-bootstrap';
import {product} from '../Mock/Const';

class Product extends Component {
    render() {
      return (
        <div className="main thememain-white">
            <div className="container content-main">
                <div className="row">
                    <div className="col-12">
                        <h3>An introduction : </h3>
                    </div>
                </div>
                <div className="row">
                    {product.map((data) => {
                    return <ProductList key={data.id} data={data} />
                    })};
                </div>
            </div>
        </div>
        
        );
    }
}

class ProductList extends Component {
    render() {
       return (
            <div className="col-sm-4 productList">
                <div className="productItems">
                    <div>
                        <img className="card-img-top" src={require('../Images/'+ this.props.data.image)} alt="Card cap"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{this.props.data.name}</h5>
                        <p className="card-text text-wrap warp">{this.props.data.description}</p>
                        <p>${this.props.data.cost}</p>            
                    </div>
                </div>
            </div>
       );
    }
}
export default Product;
