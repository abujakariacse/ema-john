import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product,handleAddToCart} = props;
    const {img,name,seller,price,ratings} = product;
    // const {img,name,seller,price,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small> <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon> </p>
            </div>
            <button className='cart-btn'>
                <p onClick={()=>{handleAddToCart(product)}}>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;