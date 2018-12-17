import React, { Component } from 'react';
import Header from './Header';
import file from '../';
import Product from './Product';
import Login from './Login';
import {product} from '../Mock/Const';
import $ from 'jquery';

//import * from '../script.js';

class ProductDetails extends Component {
    componentDidMount() {
        // Jquery here $(...)...
    }

    render() {
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <div className="row productDetailsPage">
                        <div className="col-lg-4 col-sm-4">
                            <div className="productLeftImage col-sm-12">
                                <div className="productImage col-sm-12">
                                    <img className="card-img-top" src={require('../Images/cake-dessert-food.jpg')} alt="Card cap"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-8">
                            <div className="productDesc">
                                <div className="col-sm-12 clear d-flex flex-wrap">
                                    <h3>Desert Choco Cake </h3>
                                </div>
                                <div className=" d-flex col-sm-12 flex-wrap">
                                    <label>Price:</label> <label> $500 </label>
                                </div>
                                <div className="d-flex col-sm-12 clear flex-wrap">
                                    <label>Seller Name:</label> <label> Shopclues </label>
                                </div>
                                <div className="d-flex col-sm-12 flex-wrap product-Top">
                                    <button className="btn btn-success" id="start-record-btn" title="Start Recording">Start Recognition</button>
                                </div>
                                <div className="d-flex col-sm-12 flex-wrap product-Top">
                                    <button className="btn btn-success" id="save-note-btn" title="Save Queries">Save Queries</button>
                                </div>

                                <div className="Queries">
                                   <div className="input-single">
                                       <p id="note-textarea" placeholder="Create a new note by typing or using voice recognition." ></p>
                                   </div>
                                   
                                   <p id="recording-instructions">Press the <strong>Start Recognition</strong> 
                                   button and allow access.</p>

                                   <h3>My Notes</h3>
                                   <ul id="notes">
                                       <li>
                                           <p className="no-notes">You dont have any notes.</p>
                                       </li>
                                   </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;