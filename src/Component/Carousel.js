import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../Images/cor3.jpg'),
    caption : ''

  },
  {
    src: require('../Images/cor2.jpg'),    
    caption : ''
  },
  {
    src: require('../Images/cor1.jpg'), 
    caption : ''
  }
];

const Slide = () => <div className="container"><UncontrolledCarousel items={items} /></div>

export default Slide;