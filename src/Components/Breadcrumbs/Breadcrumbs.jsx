import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumbs = (props) => {
    const {product} = props;

  return (
    <div className='breadcrumbs'>
        Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrumbs