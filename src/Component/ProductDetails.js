import React, { Component } from 'react';


class productList extends Component {
   
    render() {
      
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <div className="row productDetailsPage">
                        <div className="col-4 col-sm-4">
                            <div className="productImage">
                                <img className="card-img-top" src={require('../Images/Saree.jpg')} alt="Card cap"/>
                            </div>
                        </div>
                        <div className="col-8 col-sm-8">
                            <div className="productDesc">
                                <div className="col-sm-12 clear">
                                    <h3>PerfectFit Solid WoMen Saree </h3>
                                </div>
                                {/* <div className="col-sm-12 clear">
                                    <h3>Seller : Right: </h3>
                                </div> */}
                                <div className="col-sm-12">
                                    {/* <a href="#">Audio</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default productList;