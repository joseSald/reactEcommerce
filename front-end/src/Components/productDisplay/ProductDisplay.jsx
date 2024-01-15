import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
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
                    <img src={star_dull} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">{product.old_price}$</div>
                    <div className="product-display-right-price-new">
                        {product.new_price}$
                    </div>
                </div>
                <div className="product-display-right-description">
                    A lightwight, usually knitted, pullover shirt, close-fitting and Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur fugiat temporibus.
                </div>
                <div className="product-display-right-sizes">
                    <h1>Select size</h1>
                    <div className="product-display-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='product-display-right-category'></p>
                <p className='product-display-right-category'>tags:</p>
            </div>
        </div>
    )
}

export default ProductDisplay