import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[]);

    return (
        <div className='m-5'>
            <h2 className='text-center fst-italic mt-5 mb-5'>All Products of Creative Software</h2>
            <div className="row">
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;