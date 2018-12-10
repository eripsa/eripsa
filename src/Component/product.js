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
                    return <Product key={data.id} data={data} />
                    })};    
                    <div className="col-sm">
                        <div>
                            <img className="card-img-top" src="" alt="Card cap"/>
                        </div>          
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">sfssssssssdd</h5>
                            <p className="card-text text-wrap warp">gggggg</p>
                            <p>₹ttt</p>            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

/*class ProductList extends Component {

}*/
export default Product;
