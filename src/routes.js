import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Slide from './Component/Carousel';
import Home from './Component/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>                                  
            <Route path='/Home' component={Home}/>            
            <Route path='/Main' component={Slide}/>            
            <Route path='/*' component={Home}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;