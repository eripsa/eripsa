import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../Images/Honor_8X.jpg'),
    caption : ''

  },
  {
    src: require('../Images/Hero-Tall.jpg'),    
    caption : ''
  },
  {
    src: require('../Images/Offers.jpg'), 
    caption : ''
  }
];

const Slide = () => <div className="container"><UncontrolledCarousel items={items} /></div>;

export default Slide;