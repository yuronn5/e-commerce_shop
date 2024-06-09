import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, blanditiis provident veniam dolorum fuga animi soluta vero, nulla esse quidem sequi exercitationem id natus dignissimos quis minus recusandae in saepe voluptatem perferendis iste consectetur. Sed placeat dolorum iusto debitis iure omnis soluta dolore tempora laborum recusandae optio, impedit, cumque alias.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste omnis nisi ducimus, soluta quas provident molestiae aspernatur nihil doloribus quod nobis pariatur expedita maiores quaerat at blanditiis? Temporibus, odio. Quasi?</p>
        </div>
    </div>
  )
}

export default DescriptionBox