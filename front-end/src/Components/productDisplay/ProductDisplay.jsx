import React from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-imagelist">
                    <img src={product.image} alt="productImage" />
                    <img src={product.image} alt="productImage" />
                    <img src={product.image} alt="productImage" />
                    <img src={product.image} alt="productImage" />
                </div>
                <div className="product-display-image">
                    <img className='product-display-main-img' src={product.image} alt="productImageOnFocus" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay