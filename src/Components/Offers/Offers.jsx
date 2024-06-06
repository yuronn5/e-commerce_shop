import React from 'react';
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {;
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offers for you</h2>
            <p>ONLY ON BESTSELLERS PRODUCT</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
};


export default Offers