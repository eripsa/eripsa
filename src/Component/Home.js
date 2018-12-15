import React, { Component } from 'react';
import Header from './Header';
//import Carousel from 'react-bootstrap';

import Product from './Product';
import Login from './Login';
import {product} from '../Mock/Const';

class Home extends Component {
    render() {
      return (
          <div >
            <Header />
            <Product />                     
          </div>
        );
    }
  }
  
  export default Home;