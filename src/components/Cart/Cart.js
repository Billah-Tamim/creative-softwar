import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import Item from '../Item/Item';
import './Cart.css';

const Cart = () => {
    const { products } = useContext(AuthContext);
    console.log(products)
    return (
        <div className=''>
            <h2 className='text-center fst-italic mt-5 mb-5'>Cart Details</h2>
            <div className="cart-container">
                {
                    products.map(product => <Item
                        key={product.id}
                        product={product}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Cart;