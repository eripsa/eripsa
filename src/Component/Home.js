import React, { Component } from 'react';
import Slide from './Carousel';
import Product from './Product';

class Home extends Component {
    render() {
      return (
        <div >          
          <Slide />
          <Product />
        </div>
      );
    }
  }
  
  export default Home;