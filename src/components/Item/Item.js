import React from 'react';
import './Item.css';

const Item = ({product}) => {
    return (
        
            <li className='d-flex align-items-center mb-5 item-container'>
                <img src={product.image} className='pro-img' alt="" />
                <h5>{product.title}</h5>
                <p className='ms-auto text-success'>Quantity: 1</p>
            </li>
       
    );
};

export default Item;