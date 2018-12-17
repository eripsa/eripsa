import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Slide from './Component/Carousel';
import Profile from './Component/UserProflie';
import Home from './Component/Home';
import ProductList from './Component/ProductDetails';

const Routes = () => (
    <BrowserRouter>
        <Switch>                                  
            <Route path='/Home' component={Home}/>  
            <Route path='/Profile' component={Profile}/>          
            <Route path='/ProductList' component={ProductList}/>  
            <Route path='/Main' component={Slide}/>            
            <Route path='/*' component={Home}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;