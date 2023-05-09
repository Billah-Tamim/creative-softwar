import React, { useContext } from 'react';
import './Product.css';
import { AuthContext } from '../../context/UserContext';

const Product = ({ product }) => {
    const {handleCartData} = useContext(AuthContext);
    return (
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 p-2 d-flex justify-content-center align-items-center">
                        <img src={product.image} className="product-img img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text details-product">{product.description}</p>
                            <div className='d-flex'>
                                <p className="card-text"><small className="text-body-secondary">Price: ${product.price}</small></p>
                                <p className="card-text"><small className="text-body-secondary">Rating: {product.rating.rate} star</small></p>
                            </div>
                            <button onClick={()=>handleCartData(product)} className="btn btn-primary">Add To Cart</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;