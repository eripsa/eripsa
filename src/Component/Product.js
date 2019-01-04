import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '../styles/design.css';
import {Data} from '../Mock/data';

class Product extends Component {

    constructor(props){
        super(props);
          this.state ={
         Product : []
          }        
      }    

    componentDidMount(){        
        this.products();
    }

    products(){
   
    console.log("sdsss==>"+JSON.stringify(Data));
   
    this.setState({
        Product: Data.product_list
    });    
    
    /*fetch(Data)
     .then(response => {
console.log("sdsss==>"+JSON.stringify(response));
         return response;
     }).then(data => {
     this.setState({
        Product: data.product_list
     });      
    });*/
}


    render() {
      return (
        <div className="main thememain-white">
            <div className="container content-main">
                <br/>
                <div className="row">
                    {this.state.Product.map((data) => {
                    return <ProductList key={data.id} data={data} />
                    })}
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
                <Link to={{ pathname: '/ProductList', state: { id: this.props.data} }}>
                <div className="productItems">
                    <div>
                        <img className="card-img-top" src={this.props.data.image1} alt="Card cap"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{this.props.data.product_name}</h5>                        
                        <p>₹{this.props.data.product_price}</p>            
                    </div>
                </div></Link>
            </div>
       );
    }
}
export default Product;
