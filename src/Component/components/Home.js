import React, { Component } from 'react';
import Header from './Header';
import {Carousel} from 'react-bootstrap';
import Product from './product';
import Login from './Login';
import {product} from '../Mock/Const';

class Home extends Component {
    render() {
      return (
          <div >
              <Header></Header>
              <Carousel className="carosel">
                <Carousel.Item>
                <img className="intro" height={300} alt="900x500" src={require('../Images/Honor_8X.jpg')} />            
                </Carousel.Item>
                <Carousel.Item>
                <img className="intro" height={300}  alt="900x500" src={require('../Images/Hero-Tall.jpg')} />            
                </Carousel.Item> 
                <Carousel.Item>
                <img className="intro" height={300}  alt="900x500" src={require('../Images/Offers.jpg')} />            
                </Carousel.Item> 
            </Carousel>     
            <Login/>
            {product.map((data) => {
                return <Product key={data.id} data={data} />
                })};               
          </div>
        );
    }
  }
  
  export default Home;