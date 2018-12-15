import React, { Component } from 'react';
import Header from './Header';
import Slide from './Carousel';
import Product from './Product';

class Home extends Component {
    render() {
      return (
        <div >
          <Header />
          <Slide />
          <Product />
        </div>
      );
    }
  }
  
  export default Home;