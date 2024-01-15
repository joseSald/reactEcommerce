import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_products, cartItems, removeCartItem, addtoCart } = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    <div>
                        <div className="cartitems-format">
                            <img className="cart-icon-product" src={e.image} alt="cart-icon-product" />
                            <p title='productsName'>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>cartItems[e.id]</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} alt="removeIcon" onClick={() => { removeCartItem(e.id) }} />
                        </div>
                        <hr />

                    </div>
                }
            })}
        </div>
    )
}

export default CartItems